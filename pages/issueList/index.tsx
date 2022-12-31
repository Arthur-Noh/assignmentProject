import { Link, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useContext, useEffect } from 'react';
import { Linking, Pressable } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import IssueCard from '../../components/atoms/issueCard';
import { scaler } from '../../helper/scaler';
import useCustomHeader from '../../hooks/useCustomHeader';
import { IssueListDTO } from '../../interface/types';
import { IssueContext } from '../../providers/issueProvider';
import { AppStackParamList } from '../../route/routeDef';
import repositoryService from '../../services/repositoryService';
import { DEFAULT_PAGE, DEFAULT_PER_PAGE } from './constant';

const Layout = styled.View`
flex: 1;
padding: 0 ${({ theme }) => theme.base.templatePadding}px;
`;

const AdBox = styled.Image`
width: 100%;
height: ${scaler(60)}px;
margin: ${scaler(5)}px 0;
`;

type IssueCardType = {
    item: IssueListDTO,
    index: number,
};

const IssueList = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList, 'IssueList'>>();
    const issueContext = useContext(IssueContext)!;

    const initialize = async (page: number, perPage: number) => {
        try {
            const response = await repositoryService.getIssues(page, perPage);
            if (response) {
                issueContext.setIssueList(response);
            }
        } catch (error) {
            console.log('IssueList initialize error =>', error);
        }
    }

    const renderIssueCard = (data: IssueCardType) => {
        const { item, index } = data;

        return (
            <>
            <IssueCard
                key={`card${index}`}
                title={item.title}
                name={item.user.login}
                issueNumber={item.number}
                createDate={item.created_at}
                comments={item.comments}
                onPress={() => navigation.navigate('IssueDetail')}
            />
            { index === 4 && (
                <Pressable
                    key={`ad${index}`}
                    onPress={async () => await Linking.openURL('https://thingsflow.com/ko/home')}
                >
                    <AdBox 
                        source={{ uri : 'https://hellobot-test.s3.ap-northeast-2.amazonaws.com/image/01fdd797-0477-4717-8d70-8551150463f7' }}
                    />
                </Pressable>
            )}
            </>
        );
    }

    useCustomHeader({ title: 'Angular/Angular-cli' });

    useEffect(() => {
        initialize(DEFAULT_PAGE, DEFAULT_PER_PAGE);
    }, []);

    return (
        <Layout>
            <FlatList
                data={issueContext.issueList}
                renderItem={renderIssueCard}
                keyExtractor={(item) => `${item.number}-${item.title}`}
                contentContainerStyle={{ backgroundColor: 'white' }}
            />
        </Layout>
    );
};

export default IssueList;
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components/native';
import useCustomHeader from '../../hooks/useCustomHeader';
import { IssueContext } from '../../providers/issueProvider';
import { AppStackParamList } from '../../route/routeDef';
import repositoryService from '../../services/repositoryService';
import { DEFAULT_PAGE, DEFAULT_PER_PAGE } from './constant';

const Layout = styled.View`
flex: 1;
`;

const DefaultText = styled.Text`
font-size: ${({ theme }) =>  theme.typography.size.m1}px;
`;

const NaviButton = styled.Pressable`
width: 50px;
height: 50px;
background-color: ${({ theme }) => theme.colors.primary.red};
`;

const IssueList = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList, 'IssueList'>>();
    const issueContext = useContext(IssueContext)!;

    const initialize = async (page: number, perPage: number) => {
        try {
            const response = await repositoryService.getIssues(page, perPage);
            if (response) {
                // console.log(response);
                issueContext.setIssueList(response);
            }
        } catch (error) {
            console.log('IssueList initialize error =>', error);
        }
    }

    useCustomHeader({ title: 'Angular/Angular-cli' });

    useEffect(() => {
        initialize(DEFAULT_PAGE, DEFAULT_PER_PAGE);
    }, []);

    return (
        <Layout>
            <DefaultText>이슈 리스트 페이지</DefaultText>
            <NaviButton onPress={() => navigation.navigate('IssueDetail')}/>
        </Layout>
    );
};

export default IssueList;
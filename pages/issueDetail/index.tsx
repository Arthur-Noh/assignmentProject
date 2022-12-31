import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useContext, useEffect } from 'react';
import { Alert } from 'react-native';
import Markdown from 'react-native-markdown-display';
import styled from 'styled-components/native';
import IssueCard from '../../components/atoms/issueCard';
import { generateDateString } from '../../helper/dateHelper';
import useCustomHeader from '../../hooks/useCustomHeader';
import { IssueContext } from '../../providers/issueProvider';
import { LoaderContext } from '../../providers/loaderProvider';
import { AppStackParamList } from '../../route/routeDef';
import repositoryService from '../../services/repositoryService';

const Layout = styled.View`
flex: 1;
`;

const Header = styled.View`
padding: ${({ theme }) => theme.base.templatePadding}px;
background-color: ${({ theme }) => theme.colors.white.base};
box-shadow: 0 4px 3px rgba(0, 0, 0, 0.2);
`;

const InnerLayout = styled.ScrollView`
padding: 0 ${({ theme }) => theme.base.templatePadding}px;
flex: 1;
`;

const ContentText = styled.Text`
font-size: ${({ theme }) => theme.typography.size.s3}px;
color: ${({ theme }) => theme.colors.black[100]};
`;

const IssueDetail = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList, 'IssueDetail'>>();
    const router = useRoute<RouteProp<AppStackParamList, 'IssueDetail'>>();
    const issueContext = useContext(IssueContext)!;
    const loaderContext = useContext(LoaderContext)!;

    const initialize = async (commentId: number) => {
        try {
            loaderContext.setLoading(true);
            const response = await repositoryService.getDetailIssue(commentId);
            if (response) {
                // console.log('response =>', response);
                issueContext.setDetailIssue(response);
            }
            loaderContext.setLoading(false);
        } catch (error: any) {
            loaderContext.setLoading(false);
            console.error('IssueDetail initialize error =>', error);
            Alert.alert('이슈 상세정보 가져오기에 실패하였습니다. 다시 시도해주세요.');
        }
    }

    useCustomHeader({ title: 'Angular/Angular-cli' });

    useEffect(() => {
        initialize(router.params.commentId);
    }, [ router.params ]);

    return (
        <Layout>
            <Header>
                <IssueCard
                    title={issueContext.detailIssue.title}
                    name={issueContext.detailIssue.user?.login}
                    issueNumber={issueContext.detailIssue.number}
                    createDate={generateDateString(issueContext.detailIssue.created_at)}
                    comments={issueContext.detailIssue.comments}
                    avatar={issueContext.detailIssue.user?.avatar_url}
                />
            </Header>
            <InnerLayout>
                <Markdown>{issueContext.detailIssue.body ?? ''}</Markdown>
            </InnerLayout>
        </Layout>
    );
};

export default IssueDetail;
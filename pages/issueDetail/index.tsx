import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components/native';
import IssueCard from '../../components/atoms/issueCard';
import useCustomHeader from '../../hooks/useCustomHeader';
import { IssueContext } from '../../providers/issueProvider';
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

    const initialize = async (commentId: number) => {
        try {
            const response = await repositoryService.getDetailIssue(commentId);
            if (response) {
                // console.log('response =>', response);
                issueContext.setDetailIssue(response);
            }
        } catch (error: any) {
            console.error('IssueDetail initialize error =>', error);
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
                    createDate={issueContext.detailIssue.created_at}
                    comments={issueContext.detailIssue.comments}
                    avatar={issueContext.detailIssue.user?.avatar_url}
                />
            </Header>
            <InnerLayout>
                <ContentText>{issueContext.detailIssue.body}</ContentText>
            </InnerLayout>
        </Layout>
    );
};

export default IssueDetail;
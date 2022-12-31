import React from 'react';
import styled from 'styled-components/native';
import { scaler } from '../../helper/scaler';

const Layout = styled.View`
`;

const InnerLayout = styled.View`
flex-direction: row;
align-items: center;
`;

const UserProfile = styled.Image`
width: ${scaler(50)}px;
height: ${scaler(50)}px;
`;

const Card = styled.View`
flex: 1;
border-bottom-width: 1px;
border-bottom-color: ${({ theme }) => theme.colors.black[100]};
`;

const CardLayout = styled.Pressable`
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: ${({ theme }) => theme.base.templatePadding}px;
`;

const CardLeftView = styled.View`
flex: 4;
`;

const CardRightView = styled.View`
flex: 1;
align-items: flex-end;
`;

const CardTitle = styled.Text`
font-size: ${({ theme }) => theme.typography.size.s3}px;
`;

const CardDescription = styled.Text`
font-size: ${({ theme }) => theme.typography.size.s1}px;
`;


interface IIssueCard {
    title: string;
    name: string;
    issueNumber: number;
    createDate: string;
    comments: number;
    avatar?: string;
    onPress?: () => void;
}

const IssueCard: React.FC<IIssueCard> = React.memo((props) => {
    return (
        <Layout>
            <InnerLayout>
                { props.avatar && (
                    <UserProfile source={{ uri: props.avatar}} />
                )}
                <Card>
                    <CardLayout onPress={props.onPress}> 
                        <CardLeftView>
                            <CardTitle>{`#${props.issueNumber} ${props.title}`}</CardTitle>
                            <CardDescription>{`작성자: ${props.name}, 작성일: ${props.createDate}`}</CardDescription>
                        </CardLeftView>
                        <CardRightView>
                            <CardDescription>{`코멘트: ${props.comments}`}</CardDescription>
                        </CardRightView>
                    </CardLayout>
                </Card>
            </InnerLayout>
        </Layout>
    );
});

export default IssueCard;
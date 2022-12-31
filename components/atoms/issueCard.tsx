import React from 'react';
import styled from 'styled-components/native';

const Card = styled.View`
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
font-size: ${({ theme }) => theme.typography.size.m1}px;
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
    onPress: () => void;
}

const IssueCard: React.FC<IIssueCard> = React.memo((props) => {
    return (
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
    );
});

export default IssueCard;
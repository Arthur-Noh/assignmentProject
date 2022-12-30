import React from 'react';
import styled from 'styled-components/native';

const Layout = styled.View`
flex: 1;
`;

const DefaultText = styled.Text`
font-size: ${({ theme }) =>  theme.typography.size.m1}px;
`;

const IssueDetail = () => {

    return (
        <Layout>
            <DefaultText>이슈 디테일 페이지</DefaultText>
        </Layout>
    );
};

export default IssueDetail;
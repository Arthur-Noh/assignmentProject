import React from 'react';
import styled from 'styled-components/native';

const Layout = styled.View`
flex: 1;
`;

const DefaultText = styled.Text`
font-size: ${({ theme }) =>  theme.typography.size.m1}px;
`;


const Main = () => {

    return (
        <Layout>
            <DefaultText>메인 페이지</DefaultText>
        </Layout>
    );
};

export default Main;
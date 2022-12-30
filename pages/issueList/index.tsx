import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import styled from 'styled-components/native';
import { AppStackParamList } from '../../route/routeDef';

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

    return (
        <Layout>
            <DefaultText>이슈 리스트 페이지</DefaultText>
            <NaviButton onPress={() => navigation.navigate('IssueDetail')}/>
        </Layout>
    );
};

export default IssueList;
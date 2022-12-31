import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import BlueArrowImage from '../../asserts/common/blueArrow.png';

const Button = styled.TouchableOpacity`
flex-direction: row;
align-items: center;
`;

const BackArrow = styled.Image`
width: 9px;
height: 15px;
`;

const ButtonText = styled.Text`
font-size: ${({ theme }) => theme.typography.size.m2}px;
font-weight: ${({ theme }) => theme.typography.weight.medium};
color: ${({ theme }) => theme.colors.black.base};
margin-left: 8px;
`;

export interface IHeaderLeftButton {
    headerTitle: string;
    customGoBack?: () => void;
}

const HeaderLeftButton: React.FC<IHeaderLeftButton> = (props) => {
    const navigation = useNavigation();

    return (
        <Button onPress={ props.customGoBack ?? navigation.goBack }>
            <BackArrow source={BlueArrowImage} />
            <ButtonText>{props.headerTitle}</ButtonText>
        </Button>
    );
};

export default HeaderLeftButton;
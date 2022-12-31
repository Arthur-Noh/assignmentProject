import React from 'react';
import styled from 'styled-components/native';
import { scaler } from '../../helper/scaler';

const Layout = styled.View`
`;

const InnerLayout = styled.View`
flex-direction: row;
align-items: center;
`;

const ButtonLayout = styled.TouchableOpacity<{ needGap?: boolean }>`
flex: 1;
border: 1px solid ${({ theme }) => theme.colors.gray[500]};
border-radius: ${({ theme }) => theme.base.templateRadius}px;
margin-right: ${({ needGap }) => needGap ? scaler(8) : 0}px;
`;

const Button = styled.View`
align-items: center;
justify-content: center;
padding: ${({ theme }) => theme.base.templatePadding}px;
`;

const ButtonText = styled.Text`
font-size: ${({ theme }) => theme.typography.size.m1}px;
font-weight: ${({ theme }) => theme.typography.weight.bold};
color: ${({ theme }) => theme.colors.gray[500]};
`;

interface IPagingButton {
    currentPage: number;
    onPressLeft: () => void;
    onPressRight: () => void;
}

const PagingButton: React.FC<IPagingButton> = React.memo((props) => {
    return (
        <Layout>
            <InnerLayout>
                { props.currentPage !== 1 &&
                    <ButtonLayout needGap onPress={props.onPressLeft}>
                        <Button><ButtonText>{`< 이전페이지`}</ButtonText></Button>
                    </ButtonLayout>
                }
                <ButtonLayout onPress={props.onPressRight}>
                    <Button><ButtonText>{`다음 페이지 >`}</ButtonText></Button>
                </ButtonLayout>
            </InnerLayout>
        </Layout>
    );
});

export default PagingButton;
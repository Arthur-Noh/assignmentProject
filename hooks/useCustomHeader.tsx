import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import HeaderLeftButton, { IHeaderLeftButton } from '../components/atoms/headerLeftButton';
import HeaderRightButton from '../components/atoms/headerRightButton';
import { IHeaderButton } from '../helper/headerHelper';

interface ICustomHeaderOption {
    title?: string;
    hide?: boolean;
    useCustomLeftHeader?: boolean;
    headerLeftButton?: IHeaderLeftButton;
    headerRightButtons?: Array<IHeaderButton>;
}

const useCustomHeader = (customHeaderOption: ICustomHeaderOption) => {
    const {
        title = '',
        hide = false,
        useCustomLeftHeader = false,
        headerLeftButton = { headerTitle : '', customGoBack: () => {} },
        headerRightButtons = [],
    } = customHeaderOption;

    const navigation = useNavigation();

    useLayoutEffect(() => {
        let options: Partial<{}> = {
            headerTitle: title,
            headerShown: !hide,
            // NOTE: 백 버튼 텍스트는 별도 요청이 없으면 비워둔다.
            headerBackTitle: '',
            headerRight: () => (
                <HeaderRightButton buttons={headerRightButtons} />
            ),
        };

        if (useCustomLeftHeader) {
            options = {
                ...options,
                headerLeft: () => (
                    <HeaderLeftButton
                        headerTitle={headerLeftButton.headerTitle}
                        customGoBack={headerLeftButton.customGoBack}
                    />
                ),
            };
        }

        navigation.setOptions(options);

        return () => {
            navigation.setOptions({
                HeaderRightButton: () => (
                    <HeaderRightButton buttons={[]} />
                ),
            })
        };
    }, [ navigation, title, hide, useCustomLeftHeader, headerLeftButton, headerRightButtons ]);
};

export default useCustomHeader;
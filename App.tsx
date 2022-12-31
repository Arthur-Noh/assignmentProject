import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';
import { initAxiosInstance } from './factories/axiosFactory';
import AppScreen from './route/appScreen';
import { theme } from './theme/theme';

const navigationTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'white',
    },
};

const App = () => {
    initAxiosInstance();

    return (
        <SafeAreaProvider>
            <NavigationContainer theme={navigationTheme}>
                <ThemeProvider theme={theme}>
                    <AppScreen />
                </ThemeProvider>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;

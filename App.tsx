import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import AppScreen from './route/appScreen';

const navigationTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'white',
    },
};

const App = () => {
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

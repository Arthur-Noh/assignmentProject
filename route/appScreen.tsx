import React from 'react';
import { SafeAreaView } from 'react-native';
import AppStack from './appStack';

interface IAppScreen {

};

const AppScreen: React.FC<IAppScreen> = (props) => {
    return (
        <SafeAreaView style={{ flex : 1 }}>
            <AppStack />
        </SafeAreaView>
    );
};

export default AppScreen;
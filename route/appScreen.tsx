import React from 'react';
import { SafeAreaView } from 'react-native';
import IssueProvider from '../providers/issueProvider';
import AppStack from './appStack';

interface IAppScreen {

};

const AppScreen: React.FC<IAppScreen> = (props) => {
    return (
        <SafeAreaView style={{ flex : 1 }}>
            <IssueProvider>
                <AppStack />
            </IssueProvider>
        </SafeAreaView>
    );
};

export default AppScreen;
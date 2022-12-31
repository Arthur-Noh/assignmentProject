import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native';
import Loader from '../components/modals/loader';
import IssueProvider from '../providers/issueProvider';
import { LoaderContext } from '../providers/loaderProvider';
import AppStack from './appStack';

interface IAppScreen {

};

const AppScreen: React.FC<IAppScreen> = (props) => {
    const loaderContext = useContext(LoaderContext);

    return (
        <SafeAreaView style={{ flex : 1 }}>
            <IssueProvider>
                <AppStack />
            </IssueProvider>

            { loaderContext?.loading && <Loader />}
        </SafeAreaView>
    );
};

export default AppScreen;
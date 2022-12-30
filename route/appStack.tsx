import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackDef, AppStackParamList } from './routeDef';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName='Main'>
            { Object.entries({ ...AppStackDef }).map(([ name, { initialParams, component }]) => (
                <Stack.Screen
                    key={name}
                    // @ts-ignore
                    name={name}
                    component={component}
                    initialParams={initialParams}
                />
            ))}
        </Stack.Navigator>
    );
};

export default AppStack;
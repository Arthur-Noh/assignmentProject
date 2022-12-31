import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const Loader: React.FC = React.memo(() => {
    return (
        <View
            style={{
                flex: 1,
                ...StyleSheet.absoluteFillObject,
                backgroundColor: '#00000070',
                zIndex: Number.MAX_SAFE_INTEGER,
                justifyContent: 'center',
                alignContent: 'center',
            }}
            pointerEvents='none'
        >
            <ActivityIndicator
                size='large'
                color='white'
            />
        </View>
    );
});

export default Loader;
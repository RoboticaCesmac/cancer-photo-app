import * as React from 'react';
import { View, Text } from 'react-native';

export function LoadingScreen () {
    return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>AppCancer</Text>
        <Text>Centro de Inovação Tecnológica</Text>
        <Text>@carloswgama</Text>
        <Text>Versão: 0.0.1</Text>
    </View>
    );
}
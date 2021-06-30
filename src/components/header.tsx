import * as React from 'react';
import { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppColors } from '../theme/colors';
import { AppFonts } from '../theme/fonts';

export interface AppHeaderProps {
    title: string;
}

const AppHeader = (props: AppHeaderProps) => {
    return (
      <View style={styles.container}>
         <Text style={styles.title}>{props.title}</Text>
      </View>
    );
}

export default memo(AppHeader)

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.primary,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontFamily: AppFonts.regular
    }
});
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppColors } from '../theme/colors';

export interface AppFooterProps {
}

export const AppFooter = (props: AppFooterProps) => {
    return (
      <View style={styles.container} />
    );
}

export default React.memo(AppFooter);

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.primary,
        height:20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    }
});
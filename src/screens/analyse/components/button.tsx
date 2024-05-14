import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AppColors } from '../../../theme/colors';
import { AppFonts } from '../../../theme/fonts';
import { TouchableOpacity } from 'react-native';

export interface ButtonImageProps {
    icon?: string;
    label: string;
    onPress():void;
    style?:object;
    size?:'normal'|'small';
}

export function ButtonImage ({style = {}, size = 'normal', onPress, icon, label}: ButtonImageProps) {
    return (
      <TouchableOpacity onPress={onPress}>  
        <View style={[styles.container, (size=='small' ? {width:100, height: 60} : {}), style ]}>
                {icon && <MaterialIcons name={icon} size={30} color="white"/> }
                <Text style={[styles.label, (size == 'small' ? {fontSize: 9} : {})]}>{label}</Text>
        </View>
      </TouchableOpacity>  
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor: AppColors.primary,
        padding: 20, 
        borderRadius: 10,
        height: 75,
        width: 150,
        marginHorizontal: 30
    },
    label: {
        // fontFamily: AppFonts.bold,
        textAlign: 'center',
        color: 'white',
        textTransform: 'uppercase'
    }
});

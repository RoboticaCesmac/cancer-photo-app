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
}

export function ButtonImage (props: ButtonImageProps) {
    return (
      <TouchableOpacity onPress={props.onPress}>  
        <View style={styles.container}>
                {props.icon && <MaterialIcons name={props.icon} size={30} color="white"/> }
                <Text style={styles.label}>{props.label}</Text>
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
        height: 70,
        width: 140,
        marginHorizontal: 30
    },
    label: {
        fontFamily: AppFonts.bold,
        color: 'white',
        textTransform: 'uppercase'
    }
});

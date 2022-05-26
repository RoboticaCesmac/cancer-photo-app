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

export function ButtonImage (props: ButtonImageProps) {
    return (
      <TouchableOpacity onPress={props.onPress}>  
        <View style={[styles.container, (props.size=='small' ? {width:100, height: 60} : {}), props.style ]}>
                {props.icon && <MaterialIcons name={props.icon} size={30} color="white"/> }
                <Text style={[styles.label, (props.size == 'small' ? {fontSize: 8} : {})]}>{props.label}</Text>
        </View>
      </TouchableOpacity>  
    );
}

ButtonImage.defaultProps = {
    style: {},
    size: 'normal'
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
        fontFamily: AppFonts.bold,
        textAlign: 'center',
        color: 'white',
        textTransform: 'uppercase'
    }
});

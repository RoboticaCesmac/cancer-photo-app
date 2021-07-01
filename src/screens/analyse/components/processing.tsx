import * as React from 'react';
import { memo } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { AppColors, AppFonts } from '../../../theme';
import { ButtonImage } from './button';
export interface ProcessingComponentProps {
    image:string;
    cancel():string;
}

/**
 * Tela da segunda Etapa, onde está processando a imagem
 * @param props 
 * @returns 
 */
const ProcessingComponent = function (props: ProcessingComponentProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.description}>Estamos processando, por favor, aguarde</Text>
            <Image source={{uri:props.image}} style={{height:300, width: 300}} />
            <ActivityIndicator size={80} color={AppColors.primary}/>
            <Text style={styles.description}>Está etapa pode demorar alguns minutos</Text>
            <ButtonImage onPress={props.cancel} label="Cancelar" icon="arrow-back" />
        </View>
    );
}

export default memo(ProcessingComponent)


const styles = StyleSheet.create({
    container: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -20,
        flex: 1,
        backgroundColor: AppColors.background,
        padding: 20,
        alignItems: 'center',
    },
    description: {
        color: AppColors.text,
        fontFamily: AppFonts.regular,
        fontSize: 30,
        textAlign: 'center'
    }
});
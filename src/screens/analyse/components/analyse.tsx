import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ButtonImage } from './button';
import { AppColors, AppFonts } from '../../../theme';

export interface AnalyseComponentProps {
    handleCamera():void;
    handleLibrary():void;
}

/**
 * Tela da primeira Etapa, onde pede pela imagem
 * @param props 
 * @returns 
 */
export function AnalyseComponent (props: AnalyseComponentProps) {
    const { handleCamera, handleLibrary } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.description}>Para realizar a análise é preciso que tire uma foto ou selecione da sua galeria uma foto da boca do paciente, que esteja mais ou menos de acordo com o modelo abaixo.</Text>
            <Text style={styles.descriptionExample}>Seguir o modelo</Text>

            <Image source={require('./../../../assets/example.png')}/>
        
            <View style={styles.buttons}>
                <ButtonImage onPress={handleCamera} icon="photo-camera" label="Câmera" />
                <ButtonImage onPress={handleLibrary} icon="collections" label="Galeria" />
            </View>
        </View>
    );
}

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
        fontSize: 20,
        textAlign: 'center'
    },
    descriptionExample: {
        marginVertical: 30,
        fontFamily: AppFonts.bold,
        fontSize: 20,
    },
    buttons: {
        flexDirection:'row',
        marginTop: 20
    }
});
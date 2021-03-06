import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ButtonImage } from './button';
import { AppColors, AppFonts } from '../../../theme';
import imgCancer from './../../../assets/modelos/cancer.jpg';
import imgLeucoplasia from './../../../assets/modelos/leucoplasia.jpg';

export interface AnalyseComponentProps {
    handleCamera():void;
    handleLibrary():void;
    handleBack():void;
    type:'cancer'|'leucoplasia'
}

/**
 * Tela da primeira Etapa, onde pede pela imagem
 * @param props 
 * @returns 
 */
export function AnalyseComponent (props: AnalyseComponentProps) {
    const { handleCamera, handleLibrary, handleBack, type } = props;
    
    return (
        <View style={styles.container}>
            <Text style={styles.description}>Para realizar a análise é preciso que tire uma foto ou selecione da sua galeria uma foto da boca do paciente, que esteja mais ou menos de acordo com o modelo abaixo.</Text>
            <Text style={styles.descriptionExample}>Seguir o modelo - {type == 'cancer' ? 'Câncer' : 'Leucoplasia'}</Text>

            <Image resizeMode='contain' style={styles.model} source={(type == 'cancer' ? imgCancer : imgLeucoplasia)}/>
        
            <View style={styles.buttons}>
                <ButtonImage onPress={handleCamera} icon="photo-camera" label="Câmera" />
                <ButtonImage onPress={handleLibrary} icon="collections" label="Galeria" />
            </View>
            <ButtonImage onPress={handleBack} icon="arrow-back" label="Voltar" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,      
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
        marginTop: 20,
        marginBottom: 10
    },
    model: {
        maxWidth: 250,
        maxHeight: 200
    }
});
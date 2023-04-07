import * as React from 'react';
import { View, Text, Image, StyleSheet, Switch } from 'react-native';
import { ButtonImage } from './button';
import { AppColors, AppFonts } from '../../../theme';
import imgCancer from './../../../assets/modelos/cancer.jpg';
import imgLeucoplasia from './../../../assets/modelos/leucoplasia.jpg';
import imgEritroplasia from './../../../assets/modelos/eritroplasia.jpg';
import imgQa from './../../../assets/modelos/qa.jpg';
import { TypeAnalyses } from '../../../types/type-analyse';

export interface AnalyseComponentProps {
    handleCamera():void;
    handleLibrary():void;
    handleBack():void;
    handleSave():void;
    save: boolean;
    type:'cancer'|'leucoplasia'|'eritroplasia'|'qa'
}

/**
 * Tela da primeira Etapa, onde pede pela imagem
 * @param props 
 * @returns 
 */
export function AnalyseComponent (props: AnalyseComponentProps) {
    const { handleCamera, handleLibrary, handleBack, type, save, handleSave } = props;

    const nameType = (type: TypeAnalyses) => {
        if (type == 'cancer') return 'Câncer';
        if (type == 'leucoplasia') return 'Leucoplasia';
        if (type == 'eritroplasia') return 'Eritroplasia';
        return 'Queilite Actinica';
    }

    const imgType = (type: TypeAnalyses) => {
        if (type == 'cancer') return imgCancer;
        if (type == 'leucoplasia') return imgLeucoplasia;
        if (type == 'eritroplasia') return imgEritroplasia;
        if (type == 'qa') return imgQa;
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.description}>Para realizar a análise é preciso que tire uma foto ou selecione da sua galeria uma foto da boca do paciente, que esteja mais ou menos de acordo com o modelo abaixo.</Text>
            <Text style={styles.descriptionExample}>Seguir o modelo - {nameType(type)} </Text>

            <Image resizeMode='contain' style={styles.model} source={imgType(type)}/>

            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
                <Text style={styles.textSave}>Usar sua foto para melhorar nossa IA?</Text>
                <Switch value={save} onChange={handleSave} />
            </View>
        
        
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
    textSave: {
        fontFamily: AppFonts.regular,
        fontSize: 16,
        textAlign: 'center'
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
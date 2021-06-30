import * as React from 'react';
import { Image } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import AppFooter from '../../components/footer';
import AppHeader from '../../components/header';
import { AppColors } from '../../theme/colors';
import { AppFonts } from '../../theme/fonts';
import { ButtonImage } from './components/button';
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { AnalyseComponent } from './components/analyse';
import ProcessingComponent from './components/processing';
import ResultComponent from './components/results';
import { useState } from 'react';
import api from '../../provider/api';

export interface AnalyseScreenProps {
}

export type ResultAnalyse = {
    cancer: boolean,
    probability: number
}

export function AnalyseScreen (props: AnalyseScreenProps) {

    const nav = useNavigation();
    const [ step, setStep ] = useState(1);  
    const [ imageBase64, setImageBase64 ] = useState<string|false>(false);
    const [ resultAnalyse, setResultAnalyse ] = useState<ResultAnalyse|null>(null);

    //Functions
    const saveImage = async function(base64: string) {
        setImageBase64('data:image/png;base64,' + base64);
        setStep(2);
        //const { data } = await api.post('/photo', {base64});
        await new Promise((resolve, erro) => setTimeout(() => resolve('a'), 5000));
        const data = {cancer: true, probability: 0.932312};
        setResultAnalyse(data)
        setStep(3);
    }

    const handleCamera = React.useCallback(async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        //Erro
        if (status !== "granted") {
            Alert.alert('Erro', 'Apenas é possivel usar esse recurso caso libere a função de câmera');
            return;
        }

        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
            base64: true
        });

        if (!result.cancelled && result.base64 != null)
            saveImage(result.base64)

        console.log('Camera');
    }, []);
    
    const handleLibrary = React.useCallback(async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        //Erro
        if (status !== "granted") {
            Alert.alert('Erro', 'Apenas é possivel usar esse recurso caso libere a função de galeria');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
            base64: true
        });

        if (!result.cancelled && result.base64 != null)
            saveImage(result.base64)

        console.log('Biblioteca');
    }, []);

    const handleBack = React.useCallback(async () => {
        setStep(1);
    }, []);

    //Render
    return (
        <View style={{flex:1}}>
            <AppHeader title="Análise" />
                {step == 1 && <AnalyseComponent handleCamera={handleCamera} handleLibrary={handleLibrary}/>}
                {step == 2 && imageBase64 != false && <ProcessingComponent image={imageBase64} />}
                {step == 3 && <ResultComponent result={resultAnalyse} image={imageBase64} handleBack={handleBack} />}
            <AppFooter/>
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
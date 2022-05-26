import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppFooter from '../../components/footer';
import AppHeader from '../../components/header';
import { AppColors } from '../../theme/colors';
import { AppFonts } from '../../theme/fonts';
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { AnalyseComponent } from './components/analyse';
import TypeAnalyse from './components/type';
import ProcessingComponent from './components/processing';
import ResultComponent from './components/results';
import { useState } from 'react';
import api from '../../provider/api';
import { ENV } from './../../config/env';
import { TypeAnalyses } from '../../types/type-analyse';
import { ScrollView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';


export interface AnalyseScreenProps {
}

export type ResultAnalyse = {
    positive: boolean,
    type: string,
    probability: number
}

export function AnalyseScreen (props: AnalyseScreenProps) {

    const [ step, setStep ] = useState(1);  
    const [ type, setType ] = useState<TypeAnalyses>('cancer');  
    const [ imageBase64, setImageBase64 ] = useState<string|false>(false);
    const [ resultAnalyse, setResultAnalyse ] = useState<ResultAnalyse|null>(null);

    //Functions
    const saveImage = React.useCallback(async function(image: string) {
        setImageBase64('data:image/png;base64,' + image);
        setStep(3);
        try {
            console.log('A')
            console.log(ENV.API_URL)
            const { data } = await api.post(`/${type}`, {image});
            // const data = { value: "1", acc: 0.93, value_name:'Positivo' type: (type == 'cancer' ? 'Câncer' : 'Leucoplasia') }; //Exemplo
            console.log(type)
            console.log(data) 
            setResultAnalyse({positive: data.value == "1", probability: Number(data.acc), type: data.type})
            //await new Promise((resolve, erro) => setTimeout(() => resolve('a'), 5000));
            setStep(4);
        } catch(e) {
            console.log(e)
            Alert.alert('Falha', 'Falha na comunicação com o servidor');
            setStep(2)
        }
    }, [type])

    const handleSelectType = React.useCallback(async (type) => {
        setType(type)
        console.log('Selecionado:', type);
        setStep(2)
    }, []);

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
    }, [type]);
    
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
                <ScrollView style={styles.scrollview} contentContainerStyle={{minHeight: (Dimensions.get('window').height - 150)}}>
                    {step == 1 && <TypeAnalyse handleSelectType={handleSelectType} />}
                    {step == 2 && <AnalyseComponent type={type} handleCamera={handleCamera} handleLibrary={handleLibrary} handleBack={handleBack} />}
                    {step == 3 && imageBase64 != false && <ProcessingComponent image={imageBase64} cancel={handleBack} />}
                    {step == 4 && <ResultComponent type={type} result={resultAnalyse} image={imageBase64} handleBack={handleBack} />} 
                </ScrollView>
            <AppFooter/>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollview: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -20,
        flex:1, 
        backgroundColor: AppColors.background,
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
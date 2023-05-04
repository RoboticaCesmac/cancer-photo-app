import * as React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import AppFooter from '../../components/footer';
import AppHeader from '../../components/header';
import { AppColors } from '../../theme/colors';
import { AppFonts } from '../../theme/fonts';
import * as ImagePicker from 'expo-image-picker';
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
import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator';

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
    const [ save, setSave ] = useState(false);  
    const [ imageBase64, setImageBase64 ] = useState<string|false>(false);
    const [ resultAnalyse, setResultAnalyse ] = useState<ResultAnalyse|null>(null);

    //Functions
    const saveImage = React.useCallback(async function(image: string) {
    
        image = image.replace(/(?:\r\n|\r|\n)/g, '');
        
        setImageBase64('data:image/png;base64,' + image);
        
        setStep(3);
        try {
            console.log('A')
            console.log(`${ENV.API_URL}/${type}`)            
            const { data } = await api.post(`/${type}`, {image, save});
            // const data = { value: "1", acc: 0.93, value_name:'Positivo' type: (type == 'cancer' ? 'Câncer' : 'Leucoplasia') }; //Exemplo
            console.log(data) 
            setResultAnalyse({positive: data.value == "1", probability: Number(data.acc), type: data.type})
            //await new Promise((resolve, erro) => setTimeout(() => resolve('a'), 5000));
            setStep(4);
        } catch(e) {
            console.log(JSON.stringify(e))

            
            Alert.alert('Falha', 'Falha na comunicação com o servidor');
            setStep(2)
        }
    
    }, [type, save]);

    //======
    const handleSelectType = React.useCallback(async function(type) {
        setType(type)
        console.log('Selecionado:', type);
        setStep(2)
    }, []);
    //======
    const handleCamera = React.useCallback(async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        console.log(status);
        //Erro
        if (status !== "granted") {
            Alert.alert('Erro', 'Apenas é possivel usar esse recurso caso libere a função de câmera');
            return;
        }
        
        console.log('CLICOU!!!!!!!!!')
        try {
            console.log('---AAA---')
            const result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                quality: 1
            });

            console.log('---BBB---')
            
            if (!result.canceled) {
                const image = await manipulateAsync(result.assets[0].uri, [],{ compress: 1, base64: true });
                console.log('Camera');
                console.log(saveImage);
                if (image.base64)
                    await saveImage(image.base64)
                        .catch(erro => console.log(erro))
            }

        } catch(e) {
            console.log('---CCC---')
            console.log(e);
            Alert.alert('Erro ao acessar camera', 'Verifique se a permissão de usar a câmera está liberada. \n\nErro:\n ' + e)
        }
        

    }, [type, saveImage]);
    //======
    const handleLibrary = React.useCallback(async function() {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        //Erro
        if (status !== "granted") {
            Alert.alert('Erro', 'Apenas é possivel usar esse recurso caso libere a função de galeria');
            return;
        }

        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                quality: 1,
                base64: true
            });
            
            if (!result.canceled) {
                const image = await manipulateAsync(result.assets[0].uri, [],{ compress: 1, base64: true });
                console.log('Galeria');
                console.log(saveImage);
                if (image.base64)
                    await saveImage(image.base64)
                        .catch(erro => console.log(erro))
            }
        } catch(e) {
            console.log(e);
            Alert.alert('Erro ao acessar camera', 'Verifique se a permissão de usar a câmera está liberada. \n\nErro:\n ' + e)
        }


    }, [type, saveImage]);
    //======
    const handleSave = React.useCallback(function() {

        if (!save) {
            Alert.alert('Você deseja liberar a sua foto para nossa base de treinamento?', 'Ao confirmar essa ação, você aceita que a sua foto seja usada na nossa base de treinamento para melhorar a IA. Mas fique tranquilo, que nenhuma imagem é disponibilizada ao público, sendo usada exclusivamente para o treinamento da IA.',
            [
                { text: 'Confirmar', onPress: () => setSave(true) },
                { text: 'Não salvar', onPress: () => setSave(false) }
            ] )
        } else setSave(false)
    }, [save])
    //======
    const handleBack = React.useCallback(async function() {
        setStep(1);
    }, []);

    //Render
    return (
        <View style={{flex:1}}>
            <AppHeader title="Análise" />
                <ScrollView style={styles.scrollview} contentContainerStyle={{minHeight: (Dimensions.get('window').height - 150)}}>
                    {step == 1 && <TypeAnalyse handleSelectType={handleSelectType} />}
                    {step == 2 && <AnalyseComponent type={type} handleCamera={handleCamera} handleLibrary={handleLibrary} handleBack={handleBack} handleSave={handleSave} save={save} />}
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
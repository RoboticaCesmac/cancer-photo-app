import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ButtonImage } from './button';
import { AppColors, AppFonts } from '../../../theme';
import { ResultAnalyse } from '..';
import { memo } from 'react';

export interface ResultComponentProps {
    image:string;
    result: ResultAnalyse;
    handleBack():void;
}

/**
 * Tela da terceira Etapa, onde mostra o resultado da imagem
 * @param props 
 * @returns 
 */
const ResultComponent = function(props: ResultComponentProps) {
    const { result, image, handleBack } = props;
    
    //Bota numa escala de porcentagem levando de 0.5-1
    const percentage = (value:number) => {
        value -= 0.5
        return ((value*100)/0.5).toFixed(2)
    } 

    React.useEffect(() => {
        console.log(result)        
    }, [result])

    return (
        <View style={styles.container}>
            <Text style={[styles.label, {textAlign:'center'}]}>Resultado:</Text>

            <Image source={{uri:image}} style={{height:300, width: 300}} />
        
            <View style={styles.probability}>
                <Text style={[styles.label, {fontWeight:'bold'}]}>Probabilidade: </Text>
                {!result.hasCancer && <Text style={[styles.label, {color:'green'}]}>Falso positivo para Leucoplástia ({percentage(result.probability)}%)</Text>}
                {result.hasCancer && <Text style={[styles.label, {color:'tomato'}]}>Possibilidade de Leucoplástia ({percentage(result.probability)}%)</Text>}
            </View>

            {!result.hasCancer && <Text style={[styles.label, {textAlign:'center'}]}>Após a análise da foto, o algoritmo não encontrou sinal significativo para leucoplástia</Text>}
            {result.hasCancer && <Text style={[styles.label, {textAlign:'center'}]}>É recomendado procurar um especialista para uma análise mais precisa</Text>}

            <ButtonImage onPress={handleBack} icon="arrow-back" label="Voltar" />
        </View>
    );
}

export default memo(ResultComponent);

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
    label: {
        color: AppColors.text,
        fontFamily: AppFonts.regular,
        fontSize: 20,
        marginBottom: 10
    },
    probability: {
        flexDirection: 'column',
        marginVertical: 20
    }

    
});
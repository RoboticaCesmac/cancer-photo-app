import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ButtonImage } from './button';
import { AppColors, AppFonts } from '../../../theme';
import { ResultAnalyse } from '..';
import { memo } from 'react';
import { TypeAnalyses } from '../../../types/type-analyse';

export interface ResultComponentProps {
    image:string;
    result: ResultAnalyse;
    handleBack():void;
    type: TypeAnalyses;
}

/**
 * Tela da terceira Etapa, onde mostra o resultado da imagem
 * @param props 
 * @returns 
 */
const ResultComponent = function(props: ResultComponentProps) {
    const { result, image, handleBack, type } = props;
    
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
                {!result.positive && <Text style={[styles.label, {color:'green'}]}>Falso positivo</Text>}
                {/* (Confiança: {percentage(result.probability)}%) */}
                {result.positive && <Text style={[styles.label, {color:'tomato'}]}>Possibilidade de {result.type}</Text>}
            </View>

            {!result.positive && <Text style={[styles.label, {textAlign:'center'}]}>Após a análise da foto, o algoritmo não encontrou sinal significativo para {result.type}</Text>}
            {result.positive && <Text style={[styles.label, {textAlign:'center'}]}>É recomendado procurar um especialista para uma análise mais precisa</Text>}

            <ButtonImage onPress={handleBack} icon="arrow-back" label="Voltar" />
        </View>
    );
}

export default memo(ResultComponent);

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
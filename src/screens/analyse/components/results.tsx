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
    const percentage = (value:number) => Math.round(value*100);

    return (
        <View style={styles.container}>
            <Text style={[styles.label, {textAlign:'center'}]}>Resultado:</Text>

            <Image source={{uri:image}} style={{height:300, width: 300}} />
        
            <View style={styles.probability}>
                <Text style={[styles.label, {fontWeight:'bold'}]}>Probabilidade: </Text>
                {!result.cancer && <Text style={[styles.label, {color:'green'}]}>Não possui cancer ({percentage(result.probability)}%)</Text>}
                {result.cancer && <Text style={[styles.label, {color:'tomato'}]}>Pode possuir cancer ({percentage(result.probability)}%)</Text>}
            </View>

            {!result.cancer && <Text style={[styles.label, {textAlign:'center'}]}>Após a análise da foto, o algoritmo não encontrou sinal de câncer</Text>}
            {result.cancer && <Text style={[styles.label, {textAlign:'center'}]}>É recomendado procurar um especialista para uma análise mais precisa</Text>}

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
        flexDirection: 'row',
        marginVertical: 20
    }

    
});
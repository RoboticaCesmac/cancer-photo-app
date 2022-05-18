import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppColors, AppFonts } from '../../../theme';
import { ButtonImage } from './button';

export interface TypeAnalysesProps {
    handleSelectType(type:'cancer'|'leucoplasia'):void;
}

const TypeAnalyses = (props: TypeAnalysesProps) => {
    const { handleSelectType } = props;
    return (
      <View style={styles.container}>
         <Text style={styles.description}>O aplicativo atualmente está podendo realizar a análise de câncer ou leucoplasia</Text>
         <Text style={styles.description}>{"\n"}Escolha a opção desejada para sua análise:</Text>

        <View style={styles.buttons}>
            <ButtonImage onPress={() => handleSelectType('cancer')}  label="Câncer" />
            <ButtonImage onPress={() => handleSelectType('leucoplasia')}  label="Leucoplasia" />
        </View>
      </View>
    );
}

export default React.memo(TypeAnalyses)

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
    },
    model: {
        width: 250,
        height: 170
    }
});
import * as React from 'react';
import { Image } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AppFooter from '../../components/footer';
import AppHeader from '../../components/header';
import { AppColors } from '../../theme/colors';
import { AppFonts } from '../../theme/fonts';

export interface CreditsScreenProps {
}

export function CreditsScreen (props: CreditsScreenProps) {

    const names = [
        'José Marcos dos Santos Oliveira',
        'Sonia Maria Soares Ferreira  (Coordenadora)',
        'Carlos Alberto Correia Lessa Filho',
        'Catarina Rodrigues Rosa de Oliveira',
        'Ingrid Ferreira Leite',
        'Ivisson Alexandre Pereira da Silva',
        'Anne Caroline dos Santos Barbosa'
    ];

    return (
        <View style={{flex:1}}>
            <AppHeader title="Créditos" />
            <ScrollView style={styles.container}>

                <Text style={[styles.text, {textAlign:'center', marginBottom: 20}]}>Este é um Projeto desenvolvido no Centro Universitário CESMAC entre os membros:</Text>
                {names.map((name, key) => (
                    <Text style={styles.text} key={key}>- {name}</Text>
                ))}


                <Text style={styles.textSpecial}>AGRADECIMENTO À EQUIPE DO NÚCLEO DE DIAGNÓSTICO BUCAL (NDB UFES),  AS PROFESSORAS DANIELLE CAMISASCA, LILIANA BARROS, TÂNIA VELLOSO, VANESSA DE CARLA BATISTA DOS SANTOS e ADRIANA TEREZINHA NEVES NOVELINO ALVES POR DISPONIBILIZAR IMAGENS PARA A REALIZAÇÃO DO APLICATIVO.</Text>
                <View style={{flex:1, justifyContent:'flex-end', marginTop: 20}}>
                    <Image source={require('./../../assets/logos/cesmac.png')} style={{alignSelf:'center'}}/>
                    <View style={{justifyContent:'space-around', flexDirection: 'row', marginTop:10}}>
                        <Image source={require('./../../assets/logos/mpps.png')} />
                        <Image source={require('./../../assets/logos/cit.png')} />
                    </View>
                </View>
            </ScrollView>
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
        padding: 20
    },
    text: {
        color: AppColors.text,
        fontFamily: AppFonts.regular
    },
    textSpecial: {
        color: AppColors.text,
        fontFamily: AppFonts.regular,
        margin: 10,
        textAlign: 'justify',
        fontSize: 12,
        borderWidth: 1,
        borderColor: 'lightgrey',
        padding: 5
    }
});
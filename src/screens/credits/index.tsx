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
        'Ticiano Gomes do Nascimento',
        'Josealdo Tonholo ',
        'Isabel Cristina Celerino de Moraes Porto',
        'Alan John Duarte de Freitas',
        'Catarina Rodrigues Rosa de Oliveira',
        'Natanael Barbosa dos Santos',
        'Dávida Maria Ribeiro Cardoso dos Santos',
        'Ingrid Ferreira Leite', 
        'Maria Cicera de Cerqueira Albuquerque', 
        'Camila Maria Beder Ribeiro Girish Panjwani', 
        'André Luiz dos Santos Oliveira', 
        'Laís Farias Azevedo de Magalhães Oliveira',
        'Larissa Tinô de Carvalho Silva'
    ];

    return (
        <View style={{flex:1}}>
            <AppHeader title="Créditos" />
            <ScrollView style={styles.container}>

                <Text style={[styles.text, {textAlign:'center', marginBottom: 20}]}>Este é um Projeto desenvolvido no Centro Universitário CESMAC entre os membros:</Text>
                {names.map((name, key) => (
                    <Text style={styles.text} key={key}>- {name}</Text>
                ))}
                <View style={{flex:1, justifyContent:'flex-end'}}>
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
    }
});
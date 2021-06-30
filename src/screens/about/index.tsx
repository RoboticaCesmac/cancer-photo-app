import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AppFooter from '../../components/footer';
import AppHeader from '../../components/header';
import { AppColors } from '../../theme/colors';
import { AppFonts } from '../../theme/fonts';

export interface AboutScreenProps {
}

export function AboutScreen (props: AboutScreenProps) {
    return (
        <View style={{flex:1}}>
            <AppHeader title="Sobre" />
            <View style={styles.container}>

                <Text style={styles.welcome}>Bem vindo</Text>

                <Text style={styles.description}> O AppCancerBucal é um aplicativo desenvolvido no Centro Universitário CESMAC como parceria entre o Mestrado Profissional Pesquisa em Saúde com o Centro de Inovação Tecnológica.</Text>
                <Image source={require('./../../assets/logos/cesmac.png')} style={{alignSelf:'center'}}/>
                <View style={{justifyContent:'space-around', flexDirection: 'row', marginTop:10}}>
                    <Image source={require('./../../assets/logos/mpps.png')} />
                    <Image source={require('./../../assets/logos/cit.png')} />
                </View>

                <Text style={styles.description}>   O aplicativo utilizará inteligência artificial para gerar uma predição se um paciente pode possuir ou não câncer bucal, por meio de fotos. Lembrando que essa é uma análise prévia e não 100% exata, devendo ser acompanhado por um especialista.</Text>
                <Text style={styles.description}>Para iniciar a avaliação, acesse o menu de análise abaixo!</Text>
                <View style={{flex:1, justifyContent: 'flex-end', marginRight: 30}}>
                    <Image source={require('./../../assets/arrow.png')} style={{alignSelf:'center'}} />
                </View>
            </View>
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
    welcome: {
        fontFamily: AppFonts.bold,
        fontSize: 30
    },
    description: {
        fontFamily: AppFonts.regular,
        color: AppColors.text,
        textAlign: 'justify',
        marginTop: 20
    }
});
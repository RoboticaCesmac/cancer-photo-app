import * as React from 'react';
import { View, Text, StyleSheet, Alert, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';
import { AppColors, AppFonts } from '../../../theme';
import { TypeAnalyses } from '../../../types/type-analyse';
import { ButtonImage } from './button';

export interface TypeAnalyseProps {
    handleSelectType(type:TypeAnalyses):void;
}

const TypeAnalyse = (props: TypeAnalyseProps) => {
    const { handleSelectType } = props;
    const modal = React.useRef<Modalize>();

    const openHelp = () => {
        modal.current?.open();
    }

    return (
      <View style={styles.container}>
         <Text style={styles.description}>O aplicativo atualmente está podendo realizar a análise nos seguintes grupos.</Text>
         <Text style={styles.description}>{"\n"}Escolha a opção desejada para sua análise:</Text>

        <ButtonImage style={{margin: 10}} onPress={openHelp}  label="Ajude a escolher"  />
        <View style={styles.buttons}>
            <ButtonImage style={{margin: 5, width: 110}} onPress={() => handleSelectType('cancer')}  label="Câncer" size='small'  />
            <ButtonImage style={{margin: 5, width: 110}} onPress={() => handleSelectType('leucoplasia')}  label="Leucoplasia" size='small' />
            <ButtonImage style={{margin: 5, width: 110}} onPress={() => Alert.alert('Não implementado ainda')}  label="Eritroplasia"  size='small' />
            <ButtonImage style={{margin: 5, width: 110}} onPress={() => Alert.alert('Não implementado ainda')}  label="Leucoeritroplasia" size='small' />
            
        </View>

        <Modalize ref={modal} modalTopOffset={200}>
            <ScrollView contentContainerStyle={styles.modalContainer}>
                <Text style={styles.modalTitle}>AJUDE A ESCOLHER</Text>
                <Text style={styles.modalTitle}>LESÕES POTENCIALMENTE MALIGNAS</Text>

                {/* LEUCOPLASIA */}
                <Text style={styles.modalH1}>1. SE A LESÃO É BRANCA -> PODE SER LEUCOPLASIA</Text>
                <Text style={styles.modalText}>LEUCOPLASIA:  é definida como uma mancha branca ou placa que não pode ser caracterizada clínica ou patologicamente como qualquer outra doença" (Organização Mundial da Saúde (OMS)). </Text>
                
                {/* ERITROPLASIA  */}
                <Text style={styles.modalH1}>2. SE A LESÃO É VERMELHA -> PODE SER ERITROPLASIA </Text>
                <Text style={styles.modalText}>ERITROPLASIA: é definida como uma mancha ou placa vermelha que não pode ser clínica ou patologicamente diagnosticada como qualquer outra condição (Organização Mundial da Saúde (OMS)).</Text>

                {/* ERITROLEUCOPLASIA OU LEUCOERITROPLASIA  */}
                <Text style={styles.modalH1}>3. SE A LESÃO É BRANCA E VERMELHA -> PODE SER ERITROLEUCOPLASIA OU LEUCOERITROPLASIA </Text>
                <Text style={styles.modalText}>ERITROLEUCOPLASIA OU LEUCOERITROPLASIA: Caracterizada pela aparência clínica de leucoplasia e eritroplasia numa mesma lesão. </Text>

                {/* CANCER  */}
                <Text style={styles.modalH1}>4. QUANDO SUSPEITAR DE CÂNCER? </Text>
                <Text style={styles.modalText}>O carcinoma epidermoide de boca tem uma apresentação clínica variada, incluindo as seguintes:</Text>

                <Text style={styles.modalH1}>4.1 Exofítica (aumento de volume; vegetante, papilífera, verruciforme)</Text>
                <Text style={styles.modalH1}>4.2 Endofítica (invasiva, escavada, ulcerada)</Text>
                <Text style={styles.modalH1}>4.3 Leucoplásica (mancha branca) </Text>
                <Text style={styles.modalH1}>4.4 Eritroplásica (mancha vermelha)</Text>
                <Text style={styles.modalH1}>4.5 Eritroleucoplásica (combinação de áreas vermelha e branca) </Text>
                <Text style={styles.modalText}>Os exemplos leucoplásicos e eritroplásicos são provavelmente casos em fases iniciais, que ainda não produziram um aumento de volume ou ulceração, e as características clínicas são idênticas às descritas para as leucoplasias e eritroplasias </Text>

                {/* LABIO  */}
                <Text style={styles.modalH1}>5.	SE A LESÃO FOR NO LÁBIO?</Text>
                
                {/* QUEILITE ACTINICA  */}
                <Text style={styles.modalH1}>5.1 QUEILITE ACTINICA</Text>
                <Text style={styles.modalText}>caracterizada por áreas lisas, manchadas e pálidas, ressecamento e fissuras do vermelhão do lábio inferior, indefinição da margem  entre o vermelhão e a pele. Com a progressão da lesão, áreas descamativas e ásperas, aparecem nas porções ressecadas do vermelhão. Essas áreas podem se espessar formando lesões leucoplásicas. Podem progredir para ulceração.</Text>
                
                <Text style={styles.modalText}>O carcinoma do vermelhão do lábio se manifesta como uma ulceração endurecida, indolor, crostosa e exsudativa que apresenta geralmente menos de 1 cm no seu maior diâmetro quando descoberta precocemente. Pode causar destruição do lábio se não tratada precocemente.</Text>

                <Text style={styles.modalFont}>Fonte das informações : NEVILLE, Brad W. et al. Patologia oral e maxilofacial. 4. ed. Rio de Janeiro: Elsevier, 2016. 912 p. ISBN: 978-85-352-6564-4</Text>

                <Button title="Fechar" onPress={()=>modal.current?.close()} />

            </ScrollView>
        </Modalize>

      </View>
    );
}

export default React.memo(TypeAnalyse)

const styles = StyleSheet.create({
    modalContainer: {
        padding: 20
    },
    modalTitle: {fontSize: 20, fontWeight: 'bold', textAlign: 'center'},
    modalH1: {fontSize: 16, marginTop: 10, fontWeight: 'bold'},
    modalText: {fontSize: 14, textAlign: 'justify', marginBottom: 10},
    modalFont: {fontSize: 14, textAlign: 'right', marginTop: 30},

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
        flex: 1,
        flexWrap:'wrap',
        justifyContent: 'space-around',
        marginTop: 20
    },
    model: {
        width: 250,
        height: 170
    }
});
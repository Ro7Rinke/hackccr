import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import globalStyles from "../styles/globalStyles"
import colors from "../styles/colors"
import { ScrollView } from 'react-native-gesture-handler'


const saude = require('../../assets/images/saude.png')
const diabetes = require('../../assets/images/diabetes.jpg')
const motor = require('../../assets/images/truckMotor.jpg')
const back = require('../../assets/images/back.jpg')


export default Home = () => {
    return (
        <View style={globalStyles.globalContainer}>
            <View style={{ width: "100%", justifyContent: "center", marginTop: "5%", marginLeft: "3%" }}>
                <Text style={[globalStyles.title, {}]}>PodCast ao Vivo:</Text>
            </View>
            <View style={{ height: "30%", marginTop: "5%", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                <View style={{ margin: 10, height: 125, width: 125, backgroundColor: colors.gray, }}>
                    <Image source={saude} resizeMode={"cover"} style={{ height: "100%", width: "100%" }} />
                </View>
                <View style={{ width: "40%" }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>PodCast Saúde</Text>
                    <Text>Dr. José Antônio explica os beneficios da boa alimentação</Text>
                    <Text style={{ fontSize: 17, fontWeight: "bold", color: "#e61919" }}>● AO VIVO</Text>
                </View>
                <Icon name="play-circle-outline" size={70} style={{ marginRight: "5%" }} />
            </View>
            <View style={globalStyles.hr} />
            <View style={{ width: "100%", justifyContent: "center", marginTop: "5%", marginLeft: "3%" }}>
                <Text style={[globalStyles.title, {}]}>Hoje:</Text>
            </View>
            {/* Hoje Bloco */}

            <View style={{ height: "17%", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                <View style={{ margin: 10, height: 75, width: 75, backgroundColor: colors.gray, }}>
                    <Image source={motor} resizeMode={"cover"} style={{ height: "100%", width: "100%" }} />
                </View>
                <View style={{ width: "40%", marginRight: "17%" }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>TruckCast</Text>
                    <Text style={{ fontSize: 13 }}>Como fazer manutenção do motor em viagens</Text>
                    <Text style={{ fontSize: 11, marginTop: "5%", color: colors.gray }}>🕛 Inicio as 10:00h</Text>
                </View>
                <Icon name="notifications-none" size={50} style={{ marginRight: "5%" }} />
            </View>
            {/*Fim do  Hoje Bloco */}
            {/* Hoje Bloco */}
            <View style={{ height: "17%", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                <View style={{ margin: 10, height: 75, width: 75, backgroundColor: colors.gray, }}>
                    <Image source={diabetes} resizeMode={"cover"} style={{ height: "100%", width: "100%" }} />
                </View>
                <View style={{ width: "40%", marginRight: "17%" }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>Noticas CCR</Text>
                    <Text style={{ fontSize: 13 }}>Programa de concientização</Text>
                    <Text style={{ fontSize: 11, marginTop: "5%", color: colors.gray }}>🕛 Inicio as 14:30h</Text>
                </View>
                <Icon name="notifications-none" size={50} style={{ marginRight: "5%" }} />
            </View>
            {/*Fim do  Hoje Bloco */}
            {/* Hoje Bloco */}
            <View style={{ height: "17%", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                <View style={{ margin: 10, height: 75, width: 75, backgroundColor: colors.gray, }}>
                    <Image source={back} resizeMode={"cover"} style={{ height: "100%", width: "100%" }} />
                </View>
                <View style={{ width: "40%", marginRight: "17%" }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>SaudeCast</Text>
                    <Text style={{ fontSize: 13 }}>Cuidados com a saude</Text>
                    <Text style={{ fontSize: 11, marginTop: "5%", color: colors.gray }}>🕛 Inicio as 13:00h</Text>
                </View>
                <Icon name="notifications-none" size={50} style={{ marginRight: "5%" }} />
            </View>
            {/*Fim do  Hoje Bloco */}
        </View>
    )
}

const styles = StyleSheet.create({
    title: {

    },

})
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


const saude = require('../../assets/images/saude.png')

export default Home = () => {
    return (
        <View style={globalStyles.globalContainer}>
            <View style={{ width: "100%", justifyContent: "center", marginTop: "5%", marginLeft: "3%" }}>
                <Text style={[globalStyles.title, {}]}>PodCast ao Vivo:</Text>
            </View>
            <View style={{ height: "30%", marginTop: "5%", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                <View style={{ margin: 10, height: 125, width: 125, backgroundColor: colors.gray }}>
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
                <Text style={[globalStyles.title, {}]}>PodCast ao Vivo:</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {

    },

})
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
import { ScrollView, FlatList } from 'react-native-gesture-handler'


const saude = require('../../assets/images/saude.png')
const diabetes = require('../../assets/images/diabetes.jpg')
const motor = require('../../assets/images/truckMotor.jpg')
const back = require('../../assets/images/back.jpg')
const men = require('../../assets/images/men.jpg')
const women = require('../../assets/images/women.jpg')
const cigarro = require('../../assets/images/cigarro.jpg')
const comprimido = require('../../assets/images/comprimido.jpg')



const DATA = [
    {
        id: 'bd7acbeautruasdsaasdyr-c1b1-46c2-aed5-3ad53abb28ba',
        author: "Hoje saéde",
        title: 'Cuidados na Farmacia',
        image: comprimido
    }, {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        author: "SaúdeCast",
        title: 'Não fume!',
        image: cigarro
    }, {
        id: 'bd7acbea-c1b1-46cert2-aed5-3ad53abb28ba',
        author: "SaúdeCast",
        title: 'Cuide da sua coluna',
        image: back
    }, {
        id: 'bd7acbea-c1b1-4wery6c2-aed5-3ad53abb28ba',
        author: "Casos de Familía",
        title: 'Cuidados com a mente',
        image: men
    }, {
        id: 'bd7acbeautruyr-c1b1-46c2-aed5-3ad53abb28ba',
        author: "Astral",
        title: 'Paz Interior',
        image: women
    }, {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abasdb28ba',
        author: "SaúdeCast",
        title: 'Não fume!',
        image: cigarro
    }, {
        id: 'bd7acbea-c1basdsaasd1-46cert2-aed5-3ad53abb28ba',
        author: "SaúdeCast",
        title: 'Cuide da sua coluna',
        image: back
    }, {
        id: 'bd7acbea-c1basdsaasd1-4wery6c2-aed5-3ad53abb28ba',
        author: "Casos de Familía",
        title: 'Cuidados com a mente',
        image: men
    }, {
        id: 'bd7acbeautruasdsaasdyr-c1b1-46c2-aed5-3ad53abb28ba',
        author: "Astral",
        title: 'Paz Interior',
        image: women
    },
    {
        id: 'bd7acbeautruasdsaasdyr-c1b1-46c2-aed5-3ad53abb28ba',
        author: "Hoje saéde",
        title: 'Cuidados na Farmacia',
        image: comprimido
    },


];

const renderPodCast = (item) => {
    return (
        <View style={{ height: 100, alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
            <View style={{ margin: 10, height: 75, width: 75, backgroundColor: colors.gray, }}>
                <Image source={item.image} resizeMode={"cover"} style={{ height: "100%", width: "100%" }} />
            </View>
            <View style={{ width: "40%", marginRight: "17%", }}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>{item.author}</Text>
                <Text style={{ fontSize: 13 }}>{item.title}</Text>
            </View>
            <Icon name="play-circle-outline" size={50} style={{ marginRight: "5%" }} />
        </View>
    )
}

export default PodcastList = () => {
    return (
        <View style={globalStyles.globalContainer}>
            <View style={{ width: "100%", justifyContent: "center", marginTop: "5%", marginLeft: "3%" }}>
                <Text style={[globalStyles.title, {}]}>PodCasts sobre Saúde:</Text>
            </View>
            <FlatList
                data={DATA}
                renderItem={({ item }) => renderPodCast(item)}
                keyExtractor={item => item.id}
                style={{ height: "100%" }}
                ItemSeparatorComponent={() => <View style={globalStyles.hr} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {

    },

})
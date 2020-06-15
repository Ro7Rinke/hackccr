import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList,
    ImageBackground
} from 'react-native';
import { Actions } from 'react-native-router-flux'

const img1 = require('../../assets/images/saude.png')
const img2 = require('../../assets/images/truckMotor.jpg')
const img3 = require('../../assets/images/women.jpg')
const img4 = require('../../assets/images/beach-4316959_1920.jpg')


export default Podcast = () => {
    let data = [
        { id: '1', image: img1, title: 'Saude' },
        { id: '12', image: img2, title: 'Segurança' },
        { id: '13', image: img3, title: 'CCR' },
        { id: '14', image: img4, title: 'Notícias' },
    ]

    const renderItem = ({ item }) => {
        return (
            <ImageBackground style={styles.bg} resizeMode='cover' source={item.image}>
                <Text style={{ color: 'black', fontSize: 28 }}>{item.title}</Text>
            </ImageBackground>
        )
    }

    return (
        <FlatList contentContainerStyle={{ justifyContent: 'space-around', alignContent: 'space-around', alignItems: 'center' }} style={{ width: '100%', height: '100%' }} data={data}
            renderItem={(item) => renderItem(item)}
            keyExtractor={item => item.id}
        />
    )
}

const styles = StyleSheet.create({
    bg: {
        height: 100,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 22
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
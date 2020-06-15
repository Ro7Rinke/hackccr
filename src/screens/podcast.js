import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList,
    ImageBackground,
    Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux'
import globalStyles from "../styles/globalStyles"
import colors from "../styles/colors"

const windowWidth = Dimensions.get('window').width;


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

        { id: 'asd1', image: img1, title: 'Saude' },
        { id: 'asd12', image: img2, title: 'Segurança' },
        { id: 'asd13', image: img3, title: 'CCR' },
        { id: 'asd14', image: img4, title: 'Notícias' },

        { id: '1asd', image: img1, title: 'Saude' },
        { id: '1asd2', image: img2, title: 'Segurança' },

    ]

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => Actions.list()}>
                <ImageBackground style={styles.bg} resizeMode='cover' source={item.image} onPress={() => console.warn("xabls")}>
                    {/* <Text style={{ color: 'black', fontSize: 28 }}>{item.title}</Text> */}

                    <View style={{ position: 'absolute', bottom: 8, left: 8, backgroundColor: 'rgba(0, 0, 0, 0.8)', borderRadius: 5, maxWidth: windowWidth / 2 }}>
                        <Text style={{
                            fontSize: 16,
                            color: 'white',
                            fontWeight: 'bold',
                            paddingVertical: 8,
                            paddingHorizontal: 15,
                            textAlign: 'center'
                        }}>{item.title}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ width: "100%", justifyContent: "center", marginTop: "5%", marginLeft: "3%", marginBottom: "5%" }}>
                <Text style={[globalStyles.title, {}]}>Categorias:</Text>
            </View>
            <FlatList contentContainerStyle={{ justifyContent: 'space-around', alignContent: 'space-around', alignItems: 'center' }} style={{ width: '100%', height: '100%' }} data={data}
                renderItem={(item) => renderItem(item)}
                keyExtractor={item => item.id}
                numColumns={2}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    bg: {
        height: 150,
        width: 175,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 22,
        margin: 10
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
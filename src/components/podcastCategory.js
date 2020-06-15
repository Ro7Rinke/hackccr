import React from 'react'
import {View, StyleSheet, ImageBackground, Text} from 'react-native'

const img1 = require('../../assets/images/saude.png')

export default podcastCategory = (props) => {
    console.log(props)
    return (
        <ImageBackground style={styles.container} resizeMode='cover' source={img1}>
            <Text style={{color:'black'}}>{props.id}</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'transparent',
        width: '100%',
        height: '100%'
    }
})
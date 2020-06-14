import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import {Actions} from 'react-native-router-flux'

const logo = require('../../assets/brviajantes.png')

export default Login = () => {
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const loginClick = () => {
        Actions.tabbar()
    }
    return(
        <View style={styles.container}>
            <Image style={styles.logo} resizeMode="center" source={logo}/>
            <View style={styles.subContainer}>
                <TextInput style={styles.userInput} keyboardType="email-address" placeholder="email" value={user} onChangeText={(text) => setUser(text)}/>
                <TextInput style={styles.userInput} secureTextEntry={true} placeholder="senha" value={pass} onChangeText={(text) => setPass(text)}/>
                <TouchableOpacity style={styles.btLogin} onPress={() => loginClick()}>
                    <Text style={{color:'#000000'}}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btLogin} onPress={() => loginClick()}>
                    <Text style={{color:'#000000'}}>Signup</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        marginTop: 25,
        height: '30%',
    },
    subContainer:{
        alignItems: 'center',
        height:'70%',
        width: '70%'
    },
    userInput:{
        marginTop: 7,
        marginBottom: 7,
        backgroundColor: '#dcdcdc',
        borderColor: 'gray',
        height: 50,
        width: '100%' 
    },
    btLogin:{
        marginTop: 7,
        marginBottom: 7,
        backgroundColor: '#ff8a00',
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
import React from "react"
import { Text } from 'react-native'
import { Router, Stack, Scene } from 'react-native-router-flux'

import Login from "./screens/login"
import Home from "./screens/home"

const tabIcon = ({ selected, title }) => {
    return (<Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>)
}

const App = () => (
    <Router>
        <Scene key="root">
            <Scene key="login" component={Login} title="Login" />
            <Scene key="tabbar" tabs tabBarStyle={{ backgroundColor: 'black' }} >
                    <Scene key='hometab' title='Home' initial component={Home} icon={tabIcon} renderBackButton={()=>(null)}/>
                    <Scene key='testtab' title='Hometeset' component={Home} icon={tabIcon} renderBackButton={()=>(null)}/>
            </Scene>
        </Scene>
    </Router>
);



export default App
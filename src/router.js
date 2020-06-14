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
            <Scene key="tabbar" tabs hideNavBar showLabel={false}>
                <Scene key='testtab' title="Home" hideNavBar component={Home} icon={tabIcon} />
                <Scene key='hometab' title="Chat" hideNavBar initial component={Home} icon={tabIcon} />
            </Scene>


        </Scene>
    </Router>
);



export default App
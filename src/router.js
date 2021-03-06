import React from "react"
import { Text } from 'react-native'
import { Router, Stack, Scene } from 'react-native-router-flux'

import Login from "./screens/login"
import Home from "./screens/home"
import Chat from "./screens/chat"
import Podcast from './screens/podcast'
import PodcastList from "./screens/podcastList"

const tabIcon = ({ selected, title }) => {
    return (<Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>)
}

const App = () => (
    <Router>
        <Scene key="root">
            <Scene key="login" component={Login} title="Login" />
            <Scene key='list' title="Podcasts" hideNavBar hideTabBar component={PodcastList} icon={tabIcon} />

            <Scene key="tabbar" tabs hideNavBar showLabel={false}>
                <Scene key='hometab' title="Home" hideNavBar initial component={Home} icon={tabIcon} />
                <Scene key='podcast' title="Categorias" hideNavBar component={Podcast} icon={tabIcon} >
                </Scene>
                <Scene key='chat' title="Chat" hideNavBar hideTabBar component={Chat} icon={tabIcon} />
            </Scene>
        </Scene>
    </Router>
);



export default App
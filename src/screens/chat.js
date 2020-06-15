import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Image
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
const avatar = require('../../assets/bot.png')
export default Login = () => {
    const [msgs, setMsgs] = useState([])
    const [isReply, setIsReply] = useState(false)

    useEffect(() => {
        setMsgs([{_id: `${Date.now()}${Math.random}`, user:{_id: 2}, createdAt: Date.now(), text: "Olá querido ouvinte! Como é bom ter você interagindo com a gente! É um grande prazer para nós... Mas, vamos lá, segue algumas opções de interação:\n\nDigete \"tema\" para nos dizer um tema ou assunto que gostaria de ouvir em um podcast futuro\n\nDigite \"duvida\" para informar uma dúvida que gostaria de enviar para o quadro de respostas de um podcast futuro\n\nDigite \"musica\" para nos contar qual música gostaria de ouvir tocando em nossa rádio"}])
    },[])

    const onSend= (message) => {
        if(message[0] && message[0].text && message[0].text != ""){
            console.log(isReply)
            if(isReply) {
                setIsReply(false)
                setMsgs(GiftedChat.append(msgs, [{_id: `${Date.now()}${Math.random}`, user:{_id: 2}, createdAt: Date.now(), text: "Sua resposta foi registrada com sucesso"}, ...message]))
                return
            }
            switch(message[0].text.toLowerCase()){
                case "tema":
                    setMsgs(GiftedChat.append(msgs, [{_id: `${Date.now()}${Math.random}`, user:{_id: 2}, createdAt: Date.now(), text: "Por favor digite o tema ou assunto que gostaria de ouvir nos podcast futuros"}, ...message]))
                    setIsReply(true)
                    return
                case "duvida":
                    setMsgs(GiftedChat.append(msgs, [{_id: `${Date.now()}${Math.random}`, user:{_id: 2}, createdAt: Date.now(), text: "Por favor digite a sua duvida que gostaria que fosse respondida em um podcast futuro"}, ...message]))
                    setIsReply(true)
                    return
                case "musica":
                    setMsgs(GiftedChat.append(msgs, [{_id: `${Date.now()}${Math.random}`, user:{_id: 2}, createdAt: Date.now(), text: "Por favor digite o nome da musica e artista"}, ...message]))
                    setIsReply(true)
                    return
            }
        }
        setMsgs(GiftedChat.append(msgs, message))
    }

    const renderAvatar = (message) => {
        console.log(message)
        return (
            <Image style={styles.avatarContainer} resizeMode='cover' source={avatar}/>
        )
    }
    
    return(
        <GiftedChat 
            messages={msgs}
            onSend={message => onSend(message)}
            user={{_id: 1}}
            renderAvatar={message => renderAvatar(message)}
            showUserAvatar={false}
        />
    )
}

const styles = StyleSheet.create({
    avatarContainer:{
        borderRadius: 20,
        height: 40,
        width: 40
    }
})
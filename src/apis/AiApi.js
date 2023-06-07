import axios from 'axios'
import random from 'random'

async function botMessage() {
    try {
        let botmessage = { sender: '', text: '' }
        botmessage.sender = await axios.get(
            `http://${process.env.VUE_APP_HOST}:${process.env.VUE_APP_PORT}/api/name`
        )
        botmessage.text = await axios.post(
            `http://${process.env.VUE_APP_HOST}:${process.env.VUE_APP_PORT}/api/sentence`,
            {
                num_words: random.int(1, 7),
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
        // console.log('from AiApi file: Bot message = ', botMessage)
        return botmessage
    } catch (e) {
        console.error('ERROR :::', e)
    }
}

export default {
    botMessage,
}

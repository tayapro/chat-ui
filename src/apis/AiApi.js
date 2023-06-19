import axios from 'axios'
import random from 'random'

async function botMessage(msg_type) {
    try {
        let botmessage = { sender: '', text: '', avatar: '' }
        botmessage.sender = await axios.get(
            `http://${process.env.VUE_APP_HOST}:${process.env.VUE_APP_PORT}/api/name`
        )
        if (msg_type === 'greeting') {
            botmessage.text = await axios.get(
                `http://${process.env.VUE_APP_HOST}:${process.env.VUE_APP_PORT}/api/greeting`
            )
        } else {
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
        }

        const name = botmessage.sender.data
        botmessage.avatar = await axios.post(
            `http://${process.env.VUE_APP_HOST}:${process.env.VUE_APP_PORT}/api/avatar`,
            {
                sender_name: name,
            }
        )
        return botmessage
    } catch (e) {
        console.error('ERROR :::', e)
    }
}

export default {
    botMessage,
}

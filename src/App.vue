<template>
    <div class="card text-center border-0">
        <!-- <div class="card-header border-0"></div> -->
        <div class="card-body">
            <ChatMessage
                v-for="m in messages"
                :key="m.text"
                :text="m.text"
                :senderType="m.senderType"
                :msgType="m.msgType"
            ></ChatMessage>
        </div>
        <div class="card-footer fixed-bottom border-0">
            <InputMessage @new-message="addMessage" />
        </div>
    </div>
</template>

<script>
import InputMessage from './components/InputMessage.vue'
import ChatMessage from './components/ChatMessage.vue'

export default {
    name: 'App',
    data() {
        return {
            // .text
            // .senderType
            // .displayName
            messages: [],
        }
    },
    components: { InputMessage, ChatMessage },
    methods: {
        async addMessage(msg) {
            this.messages.push({
                text: msg,
                // sender: 'hooman',
            })
            // добавить вероятность ~ 60% ответа от бота (несколько моих сообщений - одно сообщение от бота)
            this.messages.push({
                senderType: 'bot',
            })
        },
    },
    created() {
        this.messages.push({
            senderType: 'bot',
            msgType: 'greeting',
        })
    },
}
</script>

<style>
.card-body {
    background-color: #74ebd5;
    background-image: linear-gradient(90deg, #74ebd5 0%, #9face6 100%);
    min-height: 100vh;
}

#msg-list {
    list-style-type: none;
}
</style>

<template>
    <div class="card text-center border-0">
        <!-- <div class="card-header border-0"></div> -->
        <div class="card-body">
            <ChatMessage text="jopa" displayName="JopaBot" senderType="bot" />
            <ChatMessage text="pisja" displayName="PisjaBot" senderType="bot" />
            <ChatMessage text="kto nassal?" displayName="" senderType="bot" />
            <ChatMessage text="" displayName="" senderType="bot" />
            <ChatMessage senderType="bot" />

            <ChatMessage text="hello, jopa!!!" />
            <ChatMessage
                v-for="m in messages"
                :key="m.text"
                :senderType="m.senderType"
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
                sender: 'hooman',
            })
            // добавить вероятность ~ 60% ответа от бота (несколько моих сообщений - одно сообщение от бота)
            this.messages.push({
                senderType: 'bot',
            })
        },
    },
}
</script>

<style>
#msg-list {
    list-style-type: none;
}
</style>

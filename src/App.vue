<template>
    <div class="card text-center border-0">
        <!-- <div class="card-header border-0"></div> -->
        <div class="card-body">
            <ChatMessage text="jopa" displayName="JopaBot" senderType="bot" />
            <ChatMessage text="hello, jopa!!!" />
            <ChatMessage
                v-for="m in messages"
                :key="m.text"
                :text="m.text"
                :senderType="m.senderType"
                :displayName="m.displayName"
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
            const message = await this.aiapi.botMessage()
            this.messages.push({
                text: message.text.data,
                displayName: message.sender.data,
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

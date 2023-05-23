<template>
    <div class="card text-center border-0">
        <!-- <div class="card-header border-0"></div> -->
        <div class="card-body">
            <ChatMessage text="jopa" sender="bot" />
            <ChatMessage text="hello, jopa!!!" />
            <ChatMessage
                v-for="message in messages"
                :key="message"
                :text="message"
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
            // .sender
            messages: [],
        }
    },
    components: { InputMessage, ChatMessage },
    methods: {
        addMessage(msg) {
            console.log('function bla', msg)
            this.messages.push(msg)
        },
    },
}
</script>

<style>
#msg-list {
    list-style-type: none;
}
</style>

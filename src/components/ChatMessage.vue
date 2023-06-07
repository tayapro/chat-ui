<template>
    <div v-if="isBot()" class="text-end">
        <div v-if="isBotMessageReady()">
            {{ printMessage() }}
        </div>
        <div v-else>
            <div class="spinner-grow spinner-grow-sm m-1" role="status"></div>
            <div
                class="spinner-border spinner-border-sm m-1"
                role="status"
            ></div>
        </div>
    </div>
    <div v-else class="text-start">{{ text }}</div>
</template>

<script>
export default {
    name: 'ChatMessage',
    props: {
        text: String,
        senderType: String,
        displayName: String,
    },
    data() {
        return {
            botMsgReady: false,
        }
    },
    methods: {
        isBot() {
            return this.senderType === 'bot'
        },
        printMessage() {
            return `${this.displayName}: ${this.text}`
        },
        isBotMessageReady() {
            return this.botMsgReady
        },
    },
    async mounted() {
        // setTimeout(() => {
        //     this.botMsgReady = true
        // }, 1000)
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 1000)
        })
        this.botMsgReady = true
    },
}
</script>

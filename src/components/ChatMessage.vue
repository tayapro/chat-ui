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
            message: {},
            botMsgReady: false,
        }
    },
    methods: {
        isBot() {
            return this.senderType === 'bot'
        },
        printMessage() {
            return `${this.message.displayName}: ${this.message.text}`
        },
        isBotMessageReady() {
            return this.botMsgReady
        },
    },
    async mounted() {
        if (!this.isBot()) {
            return
        }

        if (this.displayName || this.displayName === '')
            this.message.displayName = this.displayName
        if (this.text || this.text === '') this.message.text = this.text

        if ('displayName' in this.message || 'text' in this.message) {
            this.botMsgReady = true
            return
        }

        await new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 1000)
        })

        const res = await this.aiapi.botMessage()
        this.message.displayName = res.sender.data
        this.message.text = res.text.data

        this.botMsgReady = true
    },
}
</script>

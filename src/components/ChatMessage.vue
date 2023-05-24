<template>
    <div v-if="isBot()" class="text-end">{{ printMessage() }}</div>
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
        return {}
    },
    methods: {
        isBot() {
            return this.senderType === 'bot'
        },
        printMessage() {
            return `${this.displayName}: ${this.text}`
        },
    },
}
</script>

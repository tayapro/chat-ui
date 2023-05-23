<template>
    <div v-if="isBot()" class="text-end">{{ text }}</div>
    <div v-else class="text-start">{{ text }}</div>
</template>

<script>
export default {
    name: 'ChatMessage',
    props: {
        text: String,
        sender: String,
    },
    data() {
        return {}
    },
    methods: {
        isBot() {
            return this.sender === 'bot'
        },
    },
}
</script>

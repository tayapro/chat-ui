<template>
    <div class="input-group mb-3">
        <input
            type="text"
            class="form-control"
            v-model="your_message"
            placeholder="New message ..."
        />
        <button
            type="button"
            class="btn btn-primary btn-md"
            @click="sendMessage"
        >
            Send
        </button>
    </div>
</template>

<script>
export default {
    name: 'InputMessage',
    data() {
        return {
            your_message: '',
        }
    },
    methods: {
        sendMessage() {
            if (this.your_message.length > 0) {
                this.$emit('new-message', this.your_message)
                this.your_message = ''
            }
        },
    },
}
</script>

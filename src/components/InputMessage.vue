<template>
    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="New message ..." />
        <button
            type="button"
            class="btn btn-primary btn-md"
            @click="$emit('new-message')"
        >
            Send
        </button>
    </div>
</template>

<script>
export default {
    name: 'InputMessage',
    props: {
        msg: String,
    },
}
</script>

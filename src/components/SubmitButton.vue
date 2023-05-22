<template>
    <button id="button" class="m-2 btn btn-info" @click="send_message">
        Send
    </button>
</template>

<script>
export default {
    name: 'SubmitButton',
    props: {
        msg: String,
    },
}
</script>

<!-- <style>
#button {
    font: inherit;
    font-size: 13px;
    margin: 40px;
    right: 0;
    left: 0;
    height: 37px;
    padding: 10px;
    width: 90px;
    border-radius: 50px;
    border: 1px solid #e4e4e4;
    bottom: 26px;
    z-index: 2;
    text-align: center;
    cursor: pointer;
}
</style> -->

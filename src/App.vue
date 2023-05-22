<template>
    <div class="card text-center border-0">
        <!-- <div class="card-header border-0"></div> -->
        <div class="card-body">blaa</div>
        <div class="card-footer fixed-bottom border-0">
            <InputMessage @new-message="hello" />
        </div>
    </div>
</template>

<script>
import InputMessage from './components/InputMessage.vue'

export default {
    name: 'App',
    components: { InputMessage },
    methods: {
        hello() {
            console.log('function bla')
        },
    },
}
</script>

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
    <!-- <div>
        <form>
            <div class="mb-3 w-50">
                <input
                    class="m-2 mt-4 border rounded-pill input-sm"
                    id="typeText"
                />
                <button
                    class="btn btn-primary btn-md"
                    type="button"
                    @click="$emit('new-message')"
                >
                    Send
                </button>
            </div>
        </form>
    </div> -->
    <!-- <div>
        <input class="m-2 mt-4 border rounded-pill input-sm" id="typeText" />
        <button
            class="m-2 btn btn-info rounded-pill btn-sm"
            @click="$emit('new-message')"
        >
            Button
        </button>
    </div> -->
</template>

<script>
export default {
    name: 'InputMessage',
    props: {
        msg: String,
    },
}
</script>

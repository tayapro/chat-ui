<template>
    <section id="chat">
        <div class="container-lg">
            <div class="row justify-content-between align-items-center">
                <!-- bot message -->
                <div v-if="isBot()" class="col-5 m-2">
                    <div v-if="isBotMessageReady()">
                        <div class="media text-md-start">
                            <div class="media-heading">
                                <p class="text-muted my-1 text-start">
                                    {{ printBotName() }}
                                </p>
                            </div>
                            <div class="media-body ml-3">
                                <div class="bg-info rounded py-2 px-3">
                                    <p
                                        class="text-start text-small mb-0 text-muted"
                                    >
                                        {{ printBotMessage() }}
                                    </p>
                                </div>
                            </div>
                            <p class="small text-muted my-1 text-start">
                                12:00 PM | Aug 13
                            </p>
                        </div>
                    </div>
                    <div v-else>
                        <div
                            class="spinner-grow spinner-grow-sm m-1"
                            role="status"
                        ></div>
                        <div
                            class="spinner-border spinner-border-sm m-1"
                            role="status"
                        ></div>
                    </div>
                </div>
                <div v-if="isBot()" class="col-5"></div>

                <!-- <div class="col-1"></div> -->

                <!-- hooman message-->
                <div v-if="!isBot()" class="col-5 m-2"></div>
                <div v-if="!isBot()" class="col-5 m-2">
                    <div class="media text-md-start">
                        <div class="media-heading"></div>
                        <div class="media-body ml-3">
                            <div class="bg-light rounded py-2 px-3">
                                <p
                                    class="text-start text-small mb-0 text-muted"
                                >
                                    {{ printHoomanMessage() }}
                                </p>
                            </div>
                        </div>
                        <p class="small text-muted my-1 text-end">
                            12:00 PM | Aug 13
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ========================================================================= -->

    <!-- <div class="container">
        <div class="column">
            <div v-if="isBot()" class="media w-50 ml-auto mb-3">
                <div class="media-body">
                    <div class="bg-primary rounded py-2 px-3 mb-2">
                        <p class="text-small mb-0 text-white">
                            {{ printMessage() }}
                        </p>
                    </div>
                    <p class="small text-muted">12:00 PM | Aug 13</p>
                </div>
            </div>
            <div v-else class="media float-end w-50 mb-3"> -->
    <!-- <div class="media-heading">
                    <img
                        src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png"
                        alt="user"
                        width="50"
                        class="rounded-circle"
                    />
                    <p class="small text-muted">12:00 PM | Aug 13</p>
                </div> -->
    <!-- <div class="media-body ml-3">
                    <div class="bg-light rounded py-2 px-3 mb-2">
                        <p class="text-start text-small mb-0 text-muted">
                            {{ text }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
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
        printBotMessage() {
            return `${this.message.text}`
        },
        printBotName() {
            return `${this.message.displayName}`
        },
        printHoomanMessage() {
            return this.text
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

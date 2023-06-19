<template>
    <section id="chat">
        <div class="container-lg">
            <div class="row justify-content-between align-items-center">
                <!-- bot message -->
                <div v-if="isBot()" class="col-5 m-2">
                    <div v-if="isBotMessageReady()">
                        <div class="media text-md-start">
                            <div class="media-heading d-flex">
                                <img
                                    :src="printBotAvatar()"
                                    alt="user"
                                    width="30"
                                    class="rounded-circle m-1"
                                />
                                <!-- <img :src="printBotAvatar()" /> -->
                                <p class="text-muted m-1 text-start">
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
                                {{ printTime() }}
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

                <!-- hooman message-->
                <div v-if="!isBot()" class="col-5 m-2"></div>
                <div v-if="!isBot()" class="col-5 m-2">
                    <div class="media text-md-start">
                        <div class="media-heading"></div>
                        <div class="media-body ml-3">
                            <div class="bg-light rounded py-2 px-3">
                                <p class="text-end text-small mb-0 text-muted">
                                    {{ printHoomanMessage() }}
                                </p>
                            </div>
                        </div>
                        <p class="small text-muted my-1 text-end">
                            {{ printTime() }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ChatMessage',
    props: {
        text: String,
        senderType: String,
        displayName: String,
        msgType: String,
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
        printBotAvatar() {
            // displays an interactive list of the properties of the specified JavaScript object
            // console.dir(this.message.avatar)

            return `data:image/png;base64,${this.message.avatar}`
        },
        printTime() {
            let date_time = new Date()

            // get current date
            // adjust 0 before single digit date
            const date = ('0' + date_time.getDate()).slice(-2)

            // get current month
            const month = ('0' + (date_time.getMonth() + 1)).slice(-2)

            // get current year
            const year = date_time.getFullYear()

            // get current hours
            const hours = date_time.getHours()

            // get current minutes
            const minutes = date_time.getMinutes()

            // get current seconds
            //const seconds = date_time.getSeconds()

            // prints date & time in YYYY-MM-DD HH:MM:SS format
            const current_time =
                year + '-' + month + '-' + date + ' ' + hours + ':' + minutes

            return current_time
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
            }, 500)
        })

        const res = await this.aiapi.botMessage(this.msgType)
        this.message.displayName = res.sender.data
        this.message.text = res.text.data
        this.message.avatar = res.avatar.data

        this.botMsgReady = true
    },
}
</script>

<template>
    <div>
        <div class="flex flex-col items-center relative z-100 justify-center" style="z-index: 1000">
            <div class="flex gap-24">
                <div class="h-16 w-1 bg-gray-200"></div>
                <div class="h-16 w-1 bg-gray-200"></div>
            </div>
            <div>
                <div class="bg-white flex flex-col items-center rounded-lg border-dashed relative z-100  border-2 shadow p-8" style="background:#fff8e9a3">
                    <div class="flex gap-24">
                        <div class="h-2 w-2 bg-yellow-500 rounded-full"></div>
                        <div class="h-2 w-2 bg-yellow-500 rounded-full"></div>
                    </div>
                    <span class="pl-8 pr-8 pt-8 lg:text-xl text-base text-bold text-primary">How it works</span>
                </div>
            </div>
        </div>
        <div class="bg-wheat grid lg:grid-cols-2 gric-cols-1 rounded-xl -mt-8 border" id="how-it-works">
            <div class="flex lg:order-first order-last flex-col gap-1 p-8 pt-24">
                <div>
                    <div class="flex gap-8 p-4 cursor-pointer rounded-md" :class="{'bg-gray-100': activePage == 1}" @click="activePage = 1 ">
                        <button class="w-24 h-32 rounded-full border-black border-2 text-xl text-bold">1</button>
                        <div>
                            <h3 class="text-bold lg:text-2xl text-xl">Send & Receive Money</h3>
                            <h6 class="opacity-50 text-sm lg:text-base">Easily send and receive money from anywhere in the world. With a onefi tag, sending money takes seconds</h6>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex gap-8  p-4 cursor-pointer rounded-md" :class="{'bg-gray-100': activePage == 2}"  @click="activePage = 2 ">
                        <button class="w-24 h-32 rounded-full border-black border-2 text-xl text-bold">2</button>
                        <div>
                            <h3 class="text-bold lg:text-2xl text-xl">Transact Offline</h3>
                            <h6 class="opacity-50 text-sm lg:text-base">OwoFi works offline. You can send and receive money with no internet, and it syncs with your wallet once you are back online!</h6>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex gap-8 p-4 cursor-pointer rounded-md" :class="{'bg-gray-100': activePage == 3}"  @click="activePage = 3 ">
                        <button class="w-24 h-32 rounded-full border-black border-2 text-xl text-bold">3</button>
                        <div>
                            <h3 class="text-bold lg:text-2xl text-xl">Pay Bills</h3>
                            <h6 class="opacity-50 text-sm lg:text-base">Easily perform a host of actions on OwoFi, pay bills, fund card, withdraw and many more. OwoFi is the financial solution for you.</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-gray-50  flex items-center relative h-full justify-center p-8 pt-12 lg:pt-8 rounded-xl demos" ref="demos">
                <img class="w-3/6 object-fit" v-if="activePage == 1" src="@/static/images/screen-iphone/send-receive.png" />
                <img class="w-3/6 object-fit" v-if="activePage == 2" src="@/static/images/screen-iphone/offline.png" />
                <img class="w-3/6 object-fit" v-if="activePage == 3" src="@/static/images/screen-iphone/pay-bills.png" />
            </div>
        </div>
    </div>
</template>

<script>
import gsap from "gsap"
export default {
    // methods: {
    //     gsap
    // },
    data() {
        return {
            activePage: '1'
        }
    },
    mounted() {
        // let z = 100
        // let top = 0
        // let gsap = this.$gsap
        // let demo = this.$refs['demos']
        // let images = demo.querySelectorAll('img')
        
        // images.forEach((image) => {
        //     z = z - 1
        //     top = top + 1
        //     image.style.top = top
        //     image.style.zIndex = z
        // })
    }
}
</script>
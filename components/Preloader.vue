<template>
    <div class=""> 
        <div class="mainn" v-if="loaded">
            <slot name="content">

            </slot>
        </div>

        <div class="fixed huge bg-black text-white p-4 top-0 "> 
            <span class="text-sm"></span>
        </div>
    </div>
</template>

<script>
import gsap from "gsap"
export default {
    data() {
        return {
            count: '0',
            imageLoad: '',
            loaded: false
        }
    },  
    methods: {
        imageLoaded() {
            this.imageLoad = 100
        },
    },
    mounted() {
        let gsap = this.$gsap.timeline()
        // gsap.set('.mm', {opacity: 0})
         document.onreadystatechange = () => { 
            if (document.readyState == "complete") { 
                gsap
                .fromTo('.huge', 3, {width: '0%', autoAlpha: 0}, {width: '100%', autoAlpha: 1})
                .then(() => {
                    this.loaded =true
                })
            } 
        }
    },
    watch: {
        loaded(val) {
            let gsap = this.$gsap.timeline()
            if(val) {
                // gsap.fromTo('.mainn span, .mainn h1, .main a', 2, {autoAlpha: 0}, {autoAlpha: 1})
                this.$emit('preloaded')
                gsap.to('.huge', {opacity: 0, zIndex: -1, width: 0})
            }
        }
    }
}
</script>
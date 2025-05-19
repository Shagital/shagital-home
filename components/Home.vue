<template>
  <section class="main">
    <preloader @preloaded="loaded = true">
      <div class="mm" slot="content">
        <div class="bg-black flex flex-col huge">
          <navbar></navbar>

          <div class="flex flex-col items-center lg:mt-10 mt-20 justify-center">
            <h1 class="text-white logo">SHAGITAL</h1>
            <h4
              class="text-white lg:w-3/6 mx-auto lg:text-3xl text-base lg:-mt-10 mt-10 text-center opacity-80 lg:pl-0 lg:pr-0 pr-4 pl-4">
              Shagital is a Nigerian based Technology Company, building products we wish had existed, in a purpose-driven
              culture, helping humanity, and making Africa better than it was yesterday.</h4>
            <div class="mt-20">
              <a href="#projects">
                <button
                  class="border uppercase border-black hover:border-white text-white flex gap-4 items-center p-4 rounded-full text-sm pl-8 pr-8">
                  See Projects
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M3 12C3 11.4477 3.44772 11 4 11L19.5 11C20.0523 11 20.5 11.4477 20.5 12C20.5 12.5523 20.0523 13 19.5 13L4 13C3.44772 13 3 12.5523 3 12Z"
                      fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M13.2929 19.2071C12.9024 18.8166 12.9024 18.1834 13.2929 17.7929L19.0858 12L13.2929 6.20711C12.9024 5.81658 12.9024 5.18342 13.2929 4.79289C13.6834 4.40237 14.3166 4.40237 14.7071 4.79289L20.5 10.5858C21.281 11.3668 21.281 12.6332 20.5 13.4142L14.7071 19.2071C14.3166 19.5976 13.6834 19.5976 13.2929 19.2071Z"
                      fill="white" />
                  </svg>

                </button>
              </a>
            </div>
          </div>
        </div>

        <div class="lg:p-12 p-4 pt-10 projects" id="projects">
          <h4 class="text-bold text-3xl">OUR PROJECTS</h4>
          <h6 class="text-sm opacity-80">We love building out solutions, here are a few</h6>

          <div class="grid lg:grid-cols-4 grid-cols-1 gap-4 mt-20">
            <div class="flex flex-col gap-4">
              <div class="flex items-end justify-end">
                <a href="https://owofi.com" target="_blank"
                  class="flex p-4 hover:bg-gray-100 rounded-full pt-2 pb-2 text-sm items-center gap-4 border-2">
                  VISIT
                  <svg width="16" height="16" style="transform: rotate(45deg)" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M12 21C12.5523 21 13 20.5523 13 20V4.5C13 3.94772 12.5523 3.5 12 3.5C11.4477 3.5 11 3.94772 11 4.5V20C11 20.5523 11.4477 21 12 21Z"
                      fill="black" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M4.79289 10.7071C5.18342 11.0976 5.81658 11.0976 6.20711 10.7071L12 4.91421L17.7929 10.7071C18.1834 11.0976 18.8166 11.0976 19.2071 10.7071C19.5976 10.3166 19.5976 9.68342 19.2071 9.29289L13.4142 3.5C12.6332 2.71895 11.3668 2.71895 10.5858 3.5L4.79289 9.29289C4.40237 9.68342 4.40237 10.3166 4.79289 10.7071Z"
                      fill="black" />
                  </svg>

                </a>
              </div>
              <div class="product relative product--1 pt-24">
                <div class="flex items-center justify-center">
                  <img src="@/static/images/logos/owofi.png" class="w-32" />
                </div>
                <div class="absolute w-full bottom-0 text-white p-4 text-sm bg-black rounded-b-lg">
                  Easy Offline Payment in Nigeria. Send and Receive Money even with Zero internet.
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-4">
              <div class="flex items-end justify-end">
                <a href="https://mysub.io" target="_blank"
                  class="flex p-4 hover:bg-gray-100 rounded-full pt-2 pb-2 text-sm items-center gap-4 border-2">
                  VISIT
                  <svg width="16" height="16" style="transform: rotate(45deg)" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M12 21C12.5523 21 13 20.5523 13 20V4.5C13 3.94772 12.5523 3.5 12 3.5C11.4477 3.5 11 3.94772 11 4.5V20C11 20.5523 11.4477 21 12 21Z"
                      fill="black" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M4.79289 10.7071C5.18342 11.0976 5.81658 11.0976 6.20711 10.7071L12 4.91421L17.7929 10.7071C18.1834 11.0976 18.8166 11.0976 19.2071 10.7071C19.5976 10.3166 19.5976 9.68342 19.2071 9.29289L13.4142 3.5C12.6332 2.71895 11.3668 2.71895 10.5858 3.5L4.79289 9.29289C4.40237 9.68342 4.40237 10.3166 4.79289 10.7071Z"
                      fill="black" />
                  </svg>

                </a>
              </div>
              <div class="product relative product--2 pt-24">
                <div class="flex items-center justify-center">
                  <img src="@/static/images/logos/mysub.png" class="w-36" />
                </div>
                <div class="absolute w-full bottom-0 text-white p-4 text-sm bg-black rounded-b-lg">
                  Sharing Subscriptions made easy. Easily Share services like Netflix, Spotify and more.
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-4">
              <div class="flex items-end justify-end">
                <button disabled
                  class="flex p-4 hover:bg-gray-100 rounded-full pt-2 pb-2 text-sm items-center gap-4 border-2">
                  VISIT
                  <svg width="16" height="16" style="transform: rotate(45deg)" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M12 21C12.5523 21 13 20.5523 13 20V4.5C13 3.94772 12.5523 3.5 12 3.5C11.4477 3.5 11 3.94772 11 4.5V20C11 20.5523 11.4477 21 12 21Z"
                      fill="black" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M4.79289 10.7071C5.18342 11.0976 5.81658 11.0976 6.20711 10.7071L12 4.91421L17.7929 10.7071C18.1834 11.0976 18.8166 11.0976 19.2071 10.7071C19.5976 10.3166 19.5976 9.68342 19.2071 9.29289L13.4142 3.5C12.6332 2.71895 11.3668 2.71895 10.5858 3.5L4.79289 9.29289C4.40237 9.68342 4.40237 10.3166 4.79289 10.7071Z"
                      fill="black" />
                  </svg>

                </button>
              </div>
              <div class="product relative product--3 pt-24">
                <div class="flex items-center justify-center">
                  <img src="@/static/images/logos/vuejobs.png" class="w-36" />
                </div>
                <div class="flex items-center justify-center">
                  <h6 class="text-white text-sm">defunct</h6>
                </div>
                <div class="absolute w-full bottom-0 text-white p-4 text-sm bg-black rounded-b-lg">
                  Making Remote Vue jobs accesible to all. Detailedly curated from global companies.
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-4">
              <div class="flex items-end justify-end">
                <a href="https://feedmonkey.io" target="_blank"
                  class="flex p-4 hover:bg-gray-100 rounded-full pt-2 pb-2 text-sm items-center gap-4 border-2">
                  VISIT
                  <svg width="16" height="16" style="transform: rotate(45deg)" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M12 21C12.5523 21 13 20.5523 13 20V4.5C13 3.94772 12.5523 3.5 12 3.5C11.4477 3.5 11 3.94772 11 4.5V20C11 20.5523 11.4477 21 12 21Z"
                      fill="black" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M4.79289 10.7071C5.18342 11.0976 5.81658 11.0976 6.20711 10.7071L12 4.91421L17.7929 10.7071C18.1834 11.0976 18.8166 11.0976 19.2071 10.7071C19.5976 10.3166 19.5976 9.68342 19.2071 9.29289L13.4142 3.5C12.6332 2.71895 11.3668 2.71895 10.5858 3.5L4.79289 9.29289C4.40237 9.68342 4.40237 10.3166 4.79289 10.7071Z"
                      fill="black" />
                  </svg>

                </a>
              </div>
              <div class="product relative product--4 pt-24">
                <div class="flex items-center justify-center">
                  <img src="@/static/images/logos/feedmonkey.png" class="w-44" />
                </div>
                <div class="absolute w-full bottom-0 text-white p-4 text-sm bg-black rounded-b-lg">
                  An easy way to connect with your customers. Seamless plug-n-play widget to your app.
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-4">
              <div class="flex items-end justify-end">
                <button disabled
                  class="flex p-4 hover:bg-gray-100 rounded-full pt-2 pb-2 text-sm items-center gap-4 border-2">
                  VISIT
                  <svg width="16" height="16" style="transform: rotate(45deg)" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M12 21C12.5523 21 13 20.5523 13 20V4.5C13 3.94772 12.5523 3.5 12 3.5C11.4477 3.5 11 3.94772 11 4.5V20C11 20.5523 11.4477 21 12 21Z"
                      fill="black" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M4.79289 10.7071C5.18342 11.0976 5.81658 11.0976 6.20711 10.7071L12 4.91421L17.7929 10.7071C18.1834 11.0976 18.8166 11.0976 19.2071 10.7071C19.5976 10.3166 19.5976 9.68342 19.2071 9.29289L13.4142 3.5C12.6332 2.71895 11.3668 2.71895 10.5858 3.5L4.79289 9.29289C4.40237 9.68342 4.40237 10.3166 4.79289 10.7071Z"
                      fill="black" />
                  </svg>

                </button>
              </div>
              <div class="product relative product--4 pt-24">
                <div class="flex items-center justify-center">
                  <h3 class="text-bold text-white text-xl">mybookmarks.space</h3>
                </div>
                <div class="flex items-center justify-center">
                  <h6 class="text-white text-sm">defunct</h6>
                </div>
                <div class="absolute w-full bottom-0 text-white p-4 text-sm bg-black rounded-b-lg">
                  An easy way to keep track of your twitter bookmarks. Search without much hassle.
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-4">
              <div class="flex items-end justify-end">
                <a href="https://trustshield.app" target="_blank"
                  class="flex p-4 hover:bg-gray-100 rounded-full pt-2 pb-2 text-sm items-center gap-4 border-2">
                  VISIT
                  <svg width="16" height="16" style="transform: rotate(45deg)" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M12 21C12.5523 21 13 20.5523 13 20V4.5C13 3.94772 12.5523 3.5 12 3.5C11.4477 3.5 11 3.94772 11 4.5V20C11 20.5523 11.4477 21 12 21Z"
                      fill="black" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M4.79289 10.7071C5.18342 11.0976 5.81658 11.0976 6.20711 10.7071L12 4.91421L17.7929 10.7071C18.1834 11.0976 18.8166 11.0976 19.2071 10.7071C19.5976 10.3166 19.5976 9.68342 19.2071 9.29289L13.4142 3.5C12.6332 2.71895 11.3668 2.71895 10.5858 3.5L4.79289 9.29289C4.40237 9.68342 4.40237 10.3166 4.79289 10.7071Z"
                      fill="black" />
                  </svg>

                </a>
              </div>
              <div class="product relative product--4 pt-24">

                <div class="flex items-center justify-center">
                  <img src="@/static/images/logos/trustshield.png" class="w-36" />
                </div>
                <div class="absolute w-full bottom-0 text-white p-4 text-sm bg-black rounded-b-lg">
                  With TrustShield, businesses can blacklist fraudulent users and share that information across multiple
                  startups, enabling them to better protect themselves and their customers.
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-4">
              <div class="flex items-end justify-end">
                <a href="https://tbvh.app" target="_blank"
                  class="flex p-4 hover:bg-gray-100 rounded-full pt-2 pb-2 text-sm items-center gap-4 border-2">
                  VISIT
                  <svg width="16" height="16" style="transform: rotate(45deg)" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M12 21C12.5523 21 13 20.5523 13 20V4.5C13 3.94772 12.5523 3.5 12 3.5C11.4477 3.5 11 3.94772 11 4.5V20C11 20.5523 11.4477 21 12 21Z"
                      fill="black" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M4.79289 10.7071C5.18342 11.0976 5.81658 11.0976 6.20711 10.7071L12 4.91421L17.7929 10.7071C18.1834 11.0976 18.8166 11.0976 19.2071 10.7071C19.5976 10.3166 19.5976 9.68342 19.2071 9.29289L13.4142 3.5C12.6332 2.71895 11.3668 2.71895 10.5858 3.5L4.79289 9.29289C4.40237 9.68342 4.40237 10.3166 4.79289 10.7071Z"
                      fill="black" />
                  </svg>

                </a>
              </div>
              <div class="product relative product--4 pt-24">

                <div class="flex items-center justify-center">
                  <img src="@/static/images/logos/tbvh.png" class="w-36" />
                </div>
                <div class="absolute w-full bottom-0 text-white p-4 text-sm bg-black rounded-b-lg">
                  An anonymous platform for the new generation to share, connect, and be heard.
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-4">
              <div class="flex items-end justify-end">
                <a href="https://xpreview.app" target="_blank"
                  class="flex p-4 hover:bg-gray-100 rounded-full pt-2 pb-2 text-sm items-center gap-4 border-2">
                  VISIT
                  <svg width="16" height="16" style="transform: rotate(45deg)" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M12 21C12.5523 21 13 20.5523 13 20V4.5C13 3.94772 12.5523 3.5 12 3.5C11.4477 3.5 11 3.94772 11 4.5V20C11 20.5523 11.4477 21 12 21Z"
                      fill="black" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M4.79289 10.7071C5.18342 11.0976 5.81658 11.0976 6.20711 10.7071L12 4.91421L17.7929 10.7071C18.1834 11.0976 18.8166 11.0976 19.2071 10.7071C19.5976 10.3166 19.5976 9.68342 19.2071 9.29289L13.4142 3.5C12.6332 2.71895 11.3668 2.71895 10.5858 3.5L4.79289 9.29289C4.40237 9.68342 4.40237 10.3166 4.79289 10.7071Z"
                      fill="black" />
                  </svg>

                </a>
              </div>
              <div class="product relative product--4 pt-24">

                <div class="flex items-center justify-center">
                  <img src="@/static/images/logos/xpreview.png" class="w-36 bg-white" />
                </div>
                <div class="absolute w-full bottom-0 text-white p-4 text-sm bg-black rounded-b-lg">
                  XPreview - Enhance your Twitter links with better preview images. Preview links before posting on Twitter.
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-4">
              <div class="flex items-end justify-end">
                <a href="https://goalgenius.app" target="_blank"
                  class="flex p-4 hover:bg-gray-100 rounded-full pt-2 pb-2 text-sm items-center gap-4 border-2">
                  VISIT
                  <svg width="16" height="16" style="transform: rotate(45deg)" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M12 21C12.5523 21 13 20.5523 13 20V4.5C13 3.94772 12.5523 3.5 12 3.5C11.4477 3.5 11 3.94772 11 4.5V20C11 20.5523 11.4477 21 12 21Z"
                      fill="black" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M4.79289 10.7071C5.18342 11.0976 5.81658 11.0976 6.20711 10.7071L12 4.91421L17.7929 10.7071C18.1834 11.0976 18.8166 11.0976 19.2071 10.7071C19.5976 10.3166 19.5976 9.68342 19.2071 9.29289L13.4142 3.5C12.6332 2.71895 11.3668 2.71895 10.5858 3.5L4.79289 9.29289C4.40237 9.68342 4.40237 10.3166 4.79289 10.7071Z"
                      fill="black" />
                  </svg>

                </a>
              </div>
              <div class="product relative product--4 pt-24">

                <div class="flex items-center justify-center">
                  <img src="@/static/images/logos/goalgenius.png" class="w-36" />
                </div>
                <div class="absolute w-full bottom-0 text-white p-4 text-sm bg-black rounded-b-lg">
                  Get real-time live scores and expert AI-generated match predictions. Subscribe for exclusive access to in-depth analysis and forecasts for your favorite games.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="border-t mt-20" id="contact">
          <div class="p-6 flex justify-between items-center">
            <div class="flex flex-col gap-1">
              <span class="text-sm opacity-70">KEEP IN TOUCH</span>
              <div>
                <a href="mailto:hello@shagital.com" class="text-lg text-bold">EMAIL</a> /
                <a href="https://www.linkedin.com/company/shagital" target="_blank" class="text-lg text-bold">LINKEDIN</a>
                /
                <a href="https://www.twitter.com/helloshagital" target="_blank" class="text-lg text-bold">TWITTER</a>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <span class="text-sm">© 2023 All Rights Reserved</span>
              <span>Shagital Tech RC: 1782874 | 7, Oshifila street, Ikeja 10001, Lagos, Nigeria</span>
            </div>
          </div>
          <div class="bg-gray-50 flex flex-nowrap gap-4 opacity-10 pt-4 pb-4">
            <h2 class="flex flex-nowrap text-bold text-6xl">SHAGITAL</h2>
            <h2 class="flex flex-nowrap text-bold text-6xl">SHAGITAL</h2>
            <h2 class="flex flex-nowrap text-bold text-6xl">SHAGITAL</h2>
            <h2 class="flex flex-nowrap text-bold text-6xl">SHAGITAL</h2>
            <h2 class="flex flex-nowrap text-bold text-6xl">SHAGITAL</h2>
            <h2 class="flex flex-nowrap text-bold text-6xl">SHAGITAL</h2>
          </div>
        </div>
      </div>
    </preloader>
  </section>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import PreLoader from "@/components/Preloader.vue"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}
export default {
  components: { Navbar, PreLoader },
  data() {
    return {
      loaded: false,
    }
  },
  methods: {
    animateOnScroll() {
      // this.$gsap.to(window, { duration: 2, scrollTo: 1000 })
      let gsap = this.$gsap.timeline()
      gsap.to('.mm', {
        opacity: 0,
        ease: 'Power1.easeInOut',
        scrollTrigger: {
          trigger: '.projects',
          pin: true,
          end: 'bottom',
          scrub: true
        }
      })
      console.log('scrolllll')
    }
  },
  mounted() {
    // if(this.loaded) {
    //     this.animateOnScroll()
    // }
  },
  watch: {
    loaded() {
      this.animateOnScroll()
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  // background: blue;
}

button {
  transition: all .5s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    transition: all .5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
}

.product {
  background: black;
  height: 400px;
  @apply rounded-lg;
  background-position: center;
  background-repeat: no-repeat;

  &--1 {
    background: linear-gradient(to bottom,
        rgba(4, 4, 4, 0.808),
        rgba(5, 5, 5, 0.73)),
      url("~/static/images/products/owofi.jpeg");
    background-size: 100%;
  }

  &--2 {
    background: linear-gradient(to bottom,
        rgba(4, 4, 4, 0.808),
        rgba(5, 5, 5, 0.73)),
      url("~/static/images/products/netflix.jpeg");
    background-size: 100%;
  }

  &--3 {
    background: linear-gradient(to bottom,
        rgba(4, 4, 4, 0.808),
        rgba(5, 5, 5, 0.73)),
      url("~/static/images/products/engineer.jpeg");
    background-size: 100%;
  }

  &--4 {
    background: linear-gradient(to bottom,
        rgba(4, 4, 4, 0.808),
        rgba(5, 5, 5, 0.73)),
      url("~/static/images/products/customer.jpeg");
    background-size: 100%;
  }
}

button:disabled {
  opacity: 0.5;
}</style>

<template>
    <div class="main-cta rounded-xl p-8"> 
        <div class="flex flex-col items-center relative h-full gap-2 justify-start lg:pt-20"> 
            <!-- <div class="bg-white p-1 pl-4 pr-4 rounded-full border text-mini">
                <span class="text-xs opacity-50 bg-gray-100 uppercase">Introducing you to myonefi.com</span>
            </div> -->
            <span class="text-sm opacity-50">*****</span>
            <h1 class="text-7xl mt-2 text-bold flex flex-col items-center justify-center text-primary">
                <span class="text-bold">Easy, Offline</span>
                <span class="text-bold">Payment Solution.</span>
            </h1>
            <h6 class="flex flex-col text-center">
                <span class="opacity-70 text-lg">Onefi is the payment solution that lets you </span>
                <span class="opacity-70 text-lg"> Send and Receive money even with no internet.</span>
                <span class="opacity-70 text-lg"> Fast & Secure.</span>
                <!-- <span class="opacity-100 text-sm text-mini text-primary mt-6"> Join our Private Beta List today to begin.</span> -->
            </h6>

            <div class="mt-4"> 
                <form> 
                    <div class="w-full  relative">
                        <!-- <input class="p-4 w-full pl-8 pr-8 rounded-lg" placeholder="Enter your email eddress" type="email" /> -->
                        <router-link :to="{name: 'index-join'}">
                        <button class=" right-0 bg-primary flex gap-4 items-center w-full text-white p-6 pl-12 pr-12 rounded-lg ">
                            Join Private List
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 12C3 11.4477 3.44772 11 4 11L19.5 11C20.0523 11 20.5 11.4477 20.5 12C20.5 12.5523 20.0523 13 19.5 13L4 13C3.44772 13 3 12.5523 3 12Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2929 19.2071C12.9024 18.8166 12.9024 18.1834 13.2929 17.7929L19.0858 12L13.2929 6.20711C12.9024 5.81658 12.9024 5.18342 13.2929 4.79289C13.6834 4.40237 14.3166 4.40237 14.7071 4.79289L20.5 10.5858C21.281 11.3668 21.281 12.6332 20.5 13.4142L14.7071 19.2071C14.3166 19.5976 13.6834 19.5976 13.2929 19.2071Z" fill="white"/>
                            </svg>
                        </button>
                        </router-link>
                    </div>
                </form>
            </div>

            <div class="absolute bottom-0"> 
                <button class="p-3 pl-6 pr-6 hover:bg-gray-100 items-center rounded-full text-sm bg-white border flex gap-4">
                    See How it Works
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.79289 8.54289C5.18342 8.15237 5.81658 8.15237 6.20711 8.54289L12 14.3358L17.7929 8.54289C18.1834 8.15237 18.8166 8.15237 19.2071 8.54289C19.5976 8.93341 19.5976 9.56658 19.2071 9.9571L13.4142 15.75C12.6332 16.531 11.3668 16.531 10.5858 15.75L4.79289 9.95711C4.40237 9.56658 4.40237 8.93342 4.79289 8.54289Z" fill="black"/>
                    </svg>

                </button>
            </div>
            <!-- <div class="flex flex-col items-center justify-center mt-12"> 
                <img class="w-2/6 object-fit" src="@/static/images/screen-iphone/iphone.png" />
            </div> -->
            <div class="w-screen absolute"> 
                <!-- <div class="h-14 w-screen bg-red-500" style="transform:rotate(-45deg)"></div> -->
                <!-- <div class="h-14 w-screen bg-blue-500"></div> -->
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.main-cta {
    background: linear-gradient(
      to bottom,
      rgba(239, 199, 228, 0.875),
      rgba(245, 246, 252, 0.423)
    ),
    url("~/static/images/background-white-2x2.png");
    height: 85vh;
    // width: 50%;
    background-repeat: repeat;
    background-size: 50%;
}
</style>
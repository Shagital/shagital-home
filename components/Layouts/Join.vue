<template>
    <div class="bg-black mt-8 rounded-xl text-white flex flex-col justify-center lg:items-center items-start lg:p-20 p-12 lg:pt-32  lg:pb-32 pt-10 pb-10">
        <h2 class="lg:text-4xl text-2xl">Begin enjoying seamless offline solution today!</h2>
        <h6 class="opacity-60 text-sm lg:text-base">Join early beta list by clicking on the button below and entering your email address.</h6>

        <router-link :to="{name: 'index-join'}">
        <button class=" right-0 bg-white mt-8 flex gap-4 items-center w-auto hover:bg-gray-100 text-primary hover:text-primary p-6 lg:pl-12 lg:pr-12 pl-8 pr-8 text-sm lg:text-base rounded-lg ">
            Join Private List
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 12C3 11.4477 3.44772 11 4 11L19.5 11C20.0523 11 20.5 11.4477 20.5 12C20.5 12.5523 20.0523 13 19.5 13L4 13C3.44772 13 3 12.5523 3 12Z" fill="#3c094e"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2929 19.2071C12.9024 18.8166 12.9024 18.1834 13.2929 17.7929L19.0858 12L13.2929 6.20711C12.9024 5.81658 12.9024 5.18342 13.2929 4.79289C13.6834 4.40237 14.3166 4.40237 14.7071 4.79289L20.5 10.5858C21.281 11.3668 21.281 12.6332 20.5 13.4142L14.7071 19.2071C14.3166 19.5976 13.6834 19.5976 13.2929 19.2071Z" fill="#3c094e"/>
            </svg>
        </button>
        </router-link>
    </div>
</template>

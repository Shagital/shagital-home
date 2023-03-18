<template>
    <div class="flex flex-row justify-between items-center">
        <span>
            <img src="@/static/images/colour.png"  class="lg:w-32 w-24"/>
        </span>

        <ul class="flex lg:gap-12 gap-6 items-center">
            <li class="text-mini text-primary whitespace-pre text-sm"> <a href="#how-it-works">How it works</a></li>
            <li class="text opacity-60 text-sm hidden text-primary text-mini lg:block"><router-link :to="{path: '/join'}"> Join Private List</router-link></li>
            <li class="text opacity-60 text-sm text-primary text-mini"><a href="#footer">Socials</a></li>
        </ul>
    </div>
</template>

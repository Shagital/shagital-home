<template>
    <div class="flex flex-row justify-between items-center">
        <span>
            <img src="@/static/images/colour.jpg"  class="w-32"/>
        </span>

        <ul class="flex gap-12 items-center">
            <li class="text-mini text-primary text-sm"> <a href="#how-it-works">How it works</a>a</li>
            <li class="text opacity-60 text-sm"><router-link :to="{path: '/join'}"> Join early list</router-link></li>
            <li class="text opacity-60 text-sm"><a href="#footer">Socials</a></li>
        </ul>
    </div>
</template>

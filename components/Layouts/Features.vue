<template>
    <div>
        <div class="flex flex-col items-center relative z-100 justify-center">
            <div class="flex gap-24">
                <div class="h-16 w-1 bg-gray-200"></div>
                <div class="h-16 w-1 bg-gray-200"></div>
            </div>
            <div>
                <div class="bg-white flex flex-col items-center rounded-lg border-dashed  border-2 shadow p-8" style="background:#fff8e9a3">
                    <div class="flex gap-24">
                        <div class="h-2 w-2 bg-yellow-500 rounded-full"></div>
                        <div class="h-2 w-2 bg-yellow-500 rounded-full"></div>
                    </div>
                    <span class="pl-8 pr-8 pt-8 text-xl text-bold text-primary">How it works</span>
                </div>
            </div>
        </div>
        <div class="bg-wheat grid grid-cols-2 rounded-xl -mt-8 border" id="how-it-works">
            <div class="flex flex-col gap-8 p-8 pt-24">
                <div>
                    <div class="flex gap-8">
                        <button class="w-24 h-32 rounded-full border-black border-2 text-xl text-bold">1</button>
                        <div>
                            <h3 class="text-bold text-2xl">Send & Receive Money</h3>
                            <h6 class="opacity-50">Easily send and receive money from anywhere in the world. With a onefi tag, sending money takes seconds</h6>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex gap-8">
                        <button class="w-24 h-32 rounded-full border-black border-2 text-xl text-bold">2</button>
                        <div>
                            <h3 class="text-bold text-2xl">Transact Offline</h3>
                            <h6 class="opacity-50">Easily send and receive money from anywhere in the world. With a onefi tag, sending money takes seconds</h6>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex gap-8">
                        <button class="w-24 h-32 rounded-full border-black border-2 text-xl text-bold">3</button>
                        <div>
                            <h3 class="text-bold text-2xl">Pay Bills</h3>
                            <h6 class="opacity-50">Easily send and receive money from anywhere in the world. With a onefi tag, sending money takes seconds</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-gray-50 flex items-center justify-center p-8">
                <img class="w-3/6 object-fit" src="@/static/images/screen-iphone/iphone.png" />
            </div>
        </div>
    </div>
</template>

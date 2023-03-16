<template>
    <section class="main p-12 pt-6 pb-4"> 
        <navbar></navbar>
        
        <div class="mt-8"> 
            <slot name="content">
                Content
            </slot>
        </div>
    </section>
</template>

<script>
import Navbar from "@/components/Layouts/Navbar.vue"

export default {
    components: {Navbar}
}
</script>

<style lang="scss" scoped>
.main {
    // background: blue;
}
</style>
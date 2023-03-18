<template>
  <layout>
    <div slot="content">
      <router-view></router-view>
      <main-cta></main-cta>
      <features></features>
      <join></join>
      <footer-m></footer-m>
    </div>
  </layout>
</template>

<script>
import Layout from "@/components/Layouts/Home.vue"
import MainCta from "@/components/Layouts/Main.vue"
import Features from "@/components/Layouts/Features.vue"
import Join from "@/components/Layouts/Join.vue"
import FooterM from "@/components/Layouts/Footer.vue"
export default {
  name: 'IndexPage',
  title: 'Join waitlist - MyOneFi',
  components: {Layout, MainCta,Features, Join, FooterM}
}
</script>

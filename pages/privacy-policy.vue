<template>
  <div class="privacy-policy container py-8">
  
    <h1 class="text-3xl font-bold mb-6">Privacy Policy</h1>
    
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">1. Information We Collect</h2>
      <p class="mb-4">We collect information that you provide directly to us, including:</p>
      <ul class="list-disc ml-6 mb-4">
        <li>Name and contact information</li>
        <li>Account credentials</li>
        <li>Payment information</li>
        <li>Communications with us</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
      <p class="mb-4">We use the information we collect to:</p>
      <ul class="list-disc ml-6 mb-4">
        <li>Provide and maintain our services</li>
        <li>Process your transactions</li>
        <li>Send you service-related communications</li>
        <li>Improve our services</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">3. Information Sharing</h2>
      <p class="mb-4">We do not sell your personal information. We may share your information with:</p>
      <ul class="list-disc ml-6 mb-4">
        <li>Service providers</li>
        <li>Legal authorities when required by law</li>
        <li>Business partners with your consent</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">4. Security</h2>
      <p class="mb-4">We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or destruction.</p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">5. Contact Us</h2>
      <p class="mb-4">If you have questions about this Privacy Policy, please contact us at:</p>
      <p>Email: privacy@shagital.com</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PrivacyPolicy',
  head() {
    return {
      title: 'Privacy Policy - Shagital',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Privacy Policy for Shagital - Learn how we collect, use, and protect your personal information.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.privacy-policy {
  max-width: 800px;
  margin: 0 auto;
}
</style>
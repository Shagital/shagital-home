<template>
  <div class="terms container py-8">
    <h1 class="text-3xl font-bold mb-6">Terms of Service</h1>
    
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
      <p class="mb-4">By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">2. Use License</h2>
      <ul class="list-disc ml-6 mb-4">
        <li>Permission is granted to temporarily download one copy of the materials for personal, non-commercial transitory viewing only.</li>
        <li>This is the grant of a license, not a transfer of title.</li>
        <li>You may not modify or copy the materials.</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">3. Disclaimer</h2>
      <p class="mb-4">The materials on Shagital's website are provided on an 'as is' basis. Shagital makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">4. Limitations</h2>
      <p class="mb-4">In no event shall Shagital or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Shagital's website.</p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">5. Revisions</h2>
      <p class="mb-4">The materials appearing on Shagital's website could include technical, typographical, or photographic errors. Shagital does not warrant that any of the materials on its website are accurate, complete or current.</p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">6. Contact</h2>
      <p class="mb-4">If you have any questions about these Terms of Service, please contact us at:</p>
      <p>Email: legal@shagital.com</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Terms',
  head() {
    return {
      title: 'Terms of Service - Shagital',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Terms of Service for Shagital - Read our terms and conditions for using our services.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.terms {
  max-width: 800px;
  margin: 0 auto;
}
</style>
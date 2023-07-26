<template>
  <div>
    <NuxtLayout name="default">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>

useHead({
  title: 'Project By Ami | Toko Buket Tangerang',
  
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1',
  meta: [
    { name: 'description', content: 'Project By Ami adalah toko buket online di Tangerang yang melayani Pembuatan Buket Snack, Bunga, Foto dan Rokok. ' },
    { name: 'author', content: 'Project By Ami' },
    { name: 'viewport', content: 'width=device-width, initial scale=1' },
    { name: 'google-site-verification', content: 'O6jTaHlgnI4elkK4qaS-WdNhB3p4u52p0enHvCDx7GM' },
    { name: 'keywords', content: "Project By Ami, Buket Tangerang, Buket Bunga, Buket Snack, Buket Foto, Buket Rokok" },
    { name: 'robots', content: "index, follow" }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [{ innerHTML: 'console.log(\'Hello world\')' }]
})
</script>
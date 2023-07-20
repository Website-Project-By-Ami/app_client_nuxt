<template>
    <div class="box">
        <img class="foto" v-bind:src="img" alt="" />
        <hr>
        <p class="nama">{{ nama }}</p>
        <p class="harga">{{ harga }}K</p>
        <button class="button">ORDER</button>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    nama: {
        type: String,
        default: ''
    },
    counter: {
        type: Number,
        default: ''
    },
    img: {
        type: String,
        default: ''
    },
    harga: {
        type: Number,
        default: ''
    }
})

function getImageUrl() {
  return new URL(`../assets/products/${props.img}`, import.meta.url)
}
</script>
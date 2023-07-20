<template>
    <div class="box">
        <img class="foto" v-bind:src="img" alt="" />
        <hr>
        <p class="nama">{{ nama }}</p>
        <p class="harga">{{ harga }}K = {{ counter }}</p>
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

// PAKAI BAWAH KALAU ISI DATA Product_1.svg TAPI KALAU REFERESH FOTO HILANG HEHE :0
// <img class="foto" :src="getImageUrl()" alt="" />

// PAKAI BAWAH KALAU ISI DATA /assets/products/Product_1.svg
// <img class="foto" v-bind:src="img" alt="" />
</script>
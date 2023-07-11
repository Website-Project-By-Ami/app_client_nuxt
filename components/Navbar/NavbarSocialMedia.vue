<!-- ivan | 11 Agustus 2023 -->
<script setup lang="ts">
const props = defineProps({
    href: {
        type: String,
        default: ''
    },
    active: {
        type: Boolean,
        default: false
    },
    src: {
        type: String,
        default: false
    },
})
</script>

<template>
    <a :href="href">
        <img :src="src" alt="Logo" />
    </a>
</template>

<style scoped>
a {
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 50px;
    border: 0.5px solid #B5ABAA;
    background: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
}

image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
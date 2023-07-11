<!-- ivan | 11 Agustus 2023 -->
<script setup>
import { useMediaQuery } from '@vueuse/core';
const mediaQuery = useMediaQuery('(min-width: 1000px)').value;
</script>

<template>
    <div v-if="mediaQuery === true">
        <NavbarDesktop />
    </div>
    <div v-else-if="mediaQuery === false">
        <NavbarMobile />
    </div>
</template>



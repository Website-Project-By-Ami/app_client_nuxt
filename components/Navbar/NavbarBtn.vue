<!-- ivan | 11 Agustus 2023 -->
<template>
  <NuxtLink type="button" :class="active ? 'active' : ''" class="button" :to="to">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  to: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700;800&display=swap");

.button {
  color: #595758;
  font-family: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  width: fit - content;
  font-family: 'Noto Sans', sans-serif !important;

  &.active {
    border-bottom: 3px solid #f3a195;
    font-weight: 700;
  }
}
</style>

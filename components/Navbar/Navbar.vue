<!-- ivan | 11 Agustus 2023 -->
<script setup>
// import { useMediaQuery } from "@vueuse/core";
// const mediaQuery = useMediaQuery("(min-width: 1000px)").value;
</script>

<template>
  <div id="dekstop" class="nav">
    <NavbarDesktop />
  </div>
  <div id="mobile" class="nav">
    <NavbarMobile />
  </div>
</template>

<style scoped lang="scss">
#mobile {
  display: none;

  @media (max-width: 700px) {
    display: block;
  }
}

#dekstop {
  display: block;

  @media (max-width: 700px) {
    display: none;
  }
}

.nav {
  position: relative;
  z-index: 10;
}
</style>
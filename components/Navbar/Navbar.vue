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
  <div id="gap">

  </div>
</template>

<style scoped lang="scss">
#gap {
  height: 79px;
}

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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
}
</style>
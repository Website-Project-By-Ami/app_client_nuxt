<!-- ivan | 11 Agustus 2023 -->
<script setup>
import logo from '@/assets/image/Logo.svg';
const route = useRoute().path;

</script>

<template>
    <nav class="bg-slate-500 h-24 w-full">
        <div class="left">
            <NuxtLink to="/">
                <img id="logo" :src="logo" alt="logo" class="h-16 w-16">
            </NuxtLink>
        </div>
        <div class="center flex gap-14">
            <NuxtLink to="/" :active="route === '/' ? true : false">
                Home
            </NuxtLink>
            <NuxtLink to="/products" :active="route === '/products' ? true : false">
                Product
            </NuxtLink>
            <NuxtLink to="/customorder" :active="route === '/customorder' ? true : false">
                Custom Order
            </NuxtLink>
        </div>
        <div class="right">
            <button class="shop_now_btn">
                Shop now
            </button>
        </div>
    </nav>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700;800&display=swap');


.router-link {
    color: #595758;
    font-family: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: none;
    width: fit - content;
    font-family: 'Noto Sans', sans-serif !important;

    &:hover {
        opacity: 0.5;
    }

}

.router-link-active {
    font-weight: 700;
    border-bottom: 3px solid #f3a195;
}


nav {
    background-color: #FEEECC;
    box-shadow: 0px 0px 0px 0px rgba(236, 121, 121, 0.07), 0px 3px 7px 0px rgba(236, 121, 121, 0.07), 0px 13px 13px 0px rgba(236, 121, 121, 0.06), 0px 29px 17px 0px rgba(236, 121, 121, 0.04), 0px 51px 20px 0px rgba(236, 121, 121, 0.01), 0px 80px 22px 0px rgba(236, 121, 121, 0.00);
    height: 129px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #595758;
    font-family: 'Noto Sans', sans-serif !important;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-inline: 7%;
}

.shop_now_btn {
    display: flex;
    width: 148px;
    height: 59px;
    padding: 11px 32px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 24px;
    background: #F63866;
    color: rgba(255, 255, 255, 1);
    font-family: 'Noto Sans', sans-serif !important;
    font-weight: 700;
    transition: filter 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        filter: brightness(0.5);
    }
}

#logo {
    width: 100%;
    object-fit: cover;
}
</style>
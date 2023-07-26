<!-- ivan | 11 Agustus 2023 -->
<script setup>
import logo from '@/assets/image/Logo.svg';
import Instagram from '@/assets/image/Instagram.svg';
import Whatsapp from '@/assets/image/Whatsapp.svg';
import Shopee from '@/assets/image/Shopee.svg';


const route = useRoute().path;

const isCrossed = useState('isCrossed', () => false)

function toggleCross() {
    isCrossed.value = !isCrossed.value;
    console.log(isCrossed.value);
}
</script>

<template>
    <nav>
        <div class="left">
            <button v-if="isCrossed === false" id="nav-icon" @click="toggleCross">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M5.94043 24H41.5804" stroke="#666666" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M5.94043 12H41.5804" stroke="#666666" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M5.94043 36H41.5804" stroke="#666666" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </button>
            <button v-else id="nav-icon" @click="toggleCross">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <rect x="5.84961" y="4.72498" width="36" height="1.575" transform="rotate(45 5.84961 4.72498)"
                        fill="#131313" />
                    <rect x="4.5" y="30.375" width="36" height="1.575" transform="rotate(-45 4.5 30.375)" fill="#131313" />
                </svg>
            </button>
        </div>
        <div class="center flex gap-14">
            <img :src="logo" alt="logo" id="logo" />
        </div>
        <div class="right">
            <span class="opacity-0">
                <button id="nav-icon">
                </button>
            </span>
        </div>
    </nav>
    <div v-if="isCrossed === true" id="dropdown">
        <div id="dropdown_content">
            <NuxtLink @click="toggleCross" to="/" :active="route === '/' ? true : false">
                Home
            </NuxtLink>
            <NuxtLink @click="toggleCross" to="/products">
                Product
            </NuxtLink>
            <NuxtLink @click="toggleCross" to="/customorder">
                Custom Order
            </NuxtLink>
            <button @click="toggleCross" class="shop_now_btn">
                Shop now
            </button>
            <div class="social_media flex gap-4">
                <NavbarSocialMedia href="https://www.instagram.com/ivanbagus_/" :src="Whatsapp"
                    alt="Link Whatsapp Project By Ami" />
                <NavbarSocialMedia href="https://www.instagram.com/ivanbagus_/" :src="Instagram"
                    alt="Link Instagram Project By Ami" />
                <NavbarSocialMedia href="https://www.instagram.com/ivanbagus_/" :src="Shopee"
                    alt="Link Shopee Project By Ami" />
            </div>
        </div>
    </div>
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
    width: fit-content;
}


#dropdown {
    background-color: rgba(255, 255, 255, 1);
    position: fixed;
    top: 79px;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
}


#dropdown_content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 40px 0px 20px 30px;
    width: fit-content;
}

.shop_now_btn {
    display: flex;
    width: fit-content;
    height: 49px;
    padding: 0px 22px 0px 22px !important;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 24px;
    background: #F63866;
    color: rgba(255, 255, 255, 1);
    font-family: 'Noto Sans', sans-serif !important;
    font-weight: 500;
    font-size: 14px;
}

nav {
    background-color: #FEEECC;
    box-shadow: 0px 0px 0px 0px rgba(236, 121, 121, 0.07), 0px 3px 7px 0px rgba(236, 121, 121, 0.07), 0px 13px 13px 0px rgba(236, 121, 121, 0.06), 0px 29px 17px 0px rgba(236, 121, 121, 0.04), 0px 51px 20px 0px rgba(236, 121, 121, 0.01), 0px 80px 22px 0px rgba(236, 121, 121, 0.00);
    height: 79px;
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



#nav-icon {
    width: 47.52px;
    height: 48px;
    flex-shrink: 0;
    position: relative;
    margin: 50px auto;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
}

#nav-icon span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: rgba(102, 102, 102, 1);
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
}

#nav-icon span:nth-child(1) {
    top: 0px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
}

#nav-icon span:nth-child(2) {
    top: 18px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
}

#nav-icon span:nth-child(3) {
    top: 36px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
}

#nav-icon.open span:nth-child(1) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    top: -3px;
    left: 8px;
}

#nav-icon.open span:nth-child(2) {
    width: 0%;
    opacity: 0;
}

#nav-icon.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: 39px;
    left: 8px;
}
</style>
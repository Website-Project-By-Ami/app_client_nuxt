<script setup lang="ts">
    import { ref } from "vue";
    import 'swiper/css/pagination';
    import { Pagination } from 'swiper/modules';

    // import images
    import image1 from "@/assets/HomeContent/gallery1.svg";
    import image2 from "@/assets/HomeContent/gallery2.svg";
    import image3 from "@/assets/HomeContent/gallery3.svg";
    import image4 from "@/assets/HomeContent/gallery4.jpg";
    import image5 from "@/assets/HomeContent/gallery5.jpg";
    import image6 from "@/assets/HomeContent/gallery6.jpg";
    import image7 from "@/assets/HomeContent/gallery7.jpg";
    import image8 from "@/assets/HomeContent/gallery8.jpg";

    const swiper = useSwiper();
    const gallery = [
        {
        image: image1,
        nama: "FLOWER BOUQUET"
        },
        {
        image: image2,
        nama: "FLOWER BOUQUET"
        },
        {
        image: image3,
        nama: "FLOWER BOUQUET"
        },
        {
        image: image4,
        nama: "FLOWER BOUQUET"
        },
        {
        image: image5,
        nama: "FLOWER BOUQUET"
        },
        {
        image: image6,
        nama: "FLOWER BOUQUET"
        },
        {
        image: image7,
        nama: "FLOWER BOUQUET"
        },
        {
        image: image8,
        nama: "FLOWER BOUQUET"
        }
    ]


</script>

<template>
    <div id="gallery">
        <div class="gallery_section">
            <div class="gallery_headline">
                <h1>Photo Gallery</h1>
                <p>Kumpulan foto-foto produk kami yang sudah laku terjual.
                    Kalau ada produk yang kamu suka, bisa langsung hubungi
                    kami saja dan akan kami buatkan khusus untuk kamu!
                </p>
            </div>
            <div class="swiper_desktop">
                <Swiper
                :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]"
                :pagination="{
                    clickable: true,
                }"
                :slides-per-view=3
                :creative-effect="{
                    prev: {
                    shadow: false,
                    translate: ['-20%', 0, -1]
                    },
                    next: {
                    translate: ['100%', 0, 0]
                    }
                }"
                >
                    <SwiperSlide v-for="array in gallery">
                        <div class="gallery_card">
                            <img :src="array.image" class="gallery_image">
                            <p class="gallery_desc">{{ array.nama }}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperControl/>
                </Swiper>
            </div>
            <div class="swiper_tablet">
                <Swiper
                :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]"
                :pagination="{
                    clickable: true,
                }"
                :slides-per-view=2
                :creative-effect="{
                    prev: {
                    shadow: false,
                    translate: ['-20%', 0, -1]
                    },
                    next: {
                    translate: ['100%', 0, 0]
                    }
                }"
                >
                    <SwiperSlide v-for="array in gallery">
                        <div class="gallery_card">
                            <img :src="array.image" class="gallery_image">
                            <p class="gallery_desc">{{ array.nama }}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperControl/>
                </Swiper>
            </div>
            <div class="swiper_mobile">
                <Swiper
                :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]"
                :pagination="{
                    clickable: true,
                }"
                :space-between="30"
                :slides-per-view=1
                :creative-effect="{
                    prev: {
                    shadow: false,
                    translate: ['-20%', 0, -1]
                    },
                    next: {
                    translate: ['100%', 0, 0]
                    }
                }"
                >
                    <SwiperSlide v-for="array in gallery">
                        <div class="gallery_card">
                            <img :src="array.image" class="gallery_image">
                            <p class="gallery_desc">{{ array.nama }}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperControl/>
                </Swiper>
            </div>
        </div>
    </div>
</template>

<style>

    .gallery_section{
        width:100%;
        margin:15vh auto 0;
        padding-top: 50px;
        padding-bottom: 50px;
    }

    #gallery{
        background-color: #FFEEF2;
    }
    .gallery_headline{
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 7vh;
    }

    .gallery_headline h1, p{
        font-family: 'Noto Serif';
    }
    .gallery_headline h1{
        font-size: 36px;
    }
    .gallery_headline p{
        align-self: center;
        width:45%;
        text-align: end;
        font-size: 14px;
    }
    .swiper-pagination{
        padding-top: 3vw;
        position:relative !important;
    }

    .swiper{
        position:relative;
        margin:auto;
        width:85vw;
    }

    .gallery_desc{
        font-family: 'Noto Sans';
        padding:auto !important;
    }
    .gallery_image{
        height:70vw !important;
        width:80vw !important;
        max-width: 300px !important;
        max-height:480px !important;
        /* margin-right: 20px; */
        /* margin:auto !important; */
        
    }  

    .swiper-wrapper{
        margin:auto;
    }

    .swiper_desktop{
        display: block;
    }

    .swiper_mobile{
        display:none;
    }

    .swiper-slide{
        display: flex;
        justify-content: center;
    }

    .swiper_tablet{
        display:none;
    }
    @media  screen and (max-width:800px) {
        #gallery{
            margin-top: 5vh;
        }
        .gallery_headline{
           flex-direction: column;
            justify-content: center;
            margin-bottom: 7vh;
            text-align: center;
        }

        .gallery_headline p{
            display:none
        }
        .swiper_desktop{
            display: none;
        }

        .swiper_mobile{
            display:none;
        }

        .swiper_tablet{
            display:block;
        }

        @media screen and (max-width:500px){
            .swiper_desktop{
                display: none;
            }

            .swiper_mobile{
                display:block;
            }

            .swiper_tablet{
                display:none;
            }
        }
    }
</style>
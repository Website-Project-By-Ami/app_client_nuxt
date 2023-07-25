<script setup lang="ts">
import image1 from "@/assets/HomeContent/Produk1.png";
import image2 from "@/assets/HomeContent/Produk2.png";
import image3 from "@/assets/HomeContent/Produk3.png";
import image4 from "@/assets/HomeContent/Produk4.png";
import image5 from "@/assets/HomeContent/Produk5.png";
import image6 from "@/assets/HomeContent/Produk6.png";


const data_product =[
  {
    id: 1,
    image: image1,
    nama: "Buket Wisuda",
    harga: "110K",
    link: "#"
  },
  {
    id: 2,
    image: image2,
    nama: "Buket Wisuda",
    harga: "110K",
    link: "#"
  },
  {
    id: 3,
    image: image3,
    nama: "Buket Wisuda",
    harga: "110K",
    link: "#"
  },
  {
    id: 4,
    image: image4,
    nama: "Buket Wisuda",
    harga: "110K",
    link: "#"
  },
  {
    id: 5,
    image: image5,
    nama: "Buket Wisuda",
    harga: "110K",
    link: "#"
  },
  {
    id: 6,
    image: image6,
    nama: "Buket Wisuda",
    harga: "110K",
    link: "#"
  }
]

</script>

<template>
    
    <div class=" _row headline">
        <h1>Langsung Saja Pilih Produk Kami yang Kamu Suka</h1>
        <a href="/products" class="_row headline_right">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 136 136" fill="none">
              <path d="M77 51L60 68M60 68L77 85M60 68L105.333 68" stroke="white" stroke-width="5"/>
          </svg>
          <p>Lihat Semua Produk</p>
        </a>
    </div>
    <div class="product_section">
        <div v-for="item in data_product" :key="item.id">
        <div class="product_card">
            <img :src="item.image"/>
            <div class="product_content">
            <hr/>
            <p class="product_name">{{ item.nama }}</p>
            <p class="product_price">{{ item.harga }}</p>
            <a href= "#">ORDER</a>
            </div>
        </div>
        </div>
    </div>
</template>

<style scoped>
 
  .headline{
    width:70vw;
    margin:auto;
  }

  .headline h1{
    font-size: 32px;
    font-family: 'Noto Serif', Serif;
    color:#2C2C2C;
  }
  ._row{
    display:flex;
    justify-content: space-between;
  }

  .headline_right{
    margin-right: -7.5vw;
    background-color: #191517;
    color:white;
    border-radius: 80px 0 0 80px;
    align-items: center;
    padding-right:3vw;
    width:fit-content;
    gap:1.5vw;
  }

  .product_card{
    display:flex;
    flex-direction: column;
    justify-content: center;
  }

  /* PRODUCT */

  .product_section{
    display:grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    gap:20px;
    width:70vw;
    margin-left:auto;
    margin-right: auto;
    padding-top:50px;
    padding-bottom: 100px;
  }

  .product_content{
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin:auto;
    text-align: center;
    width:60%;
    color:#2C2C2C;
  }

  .product_content hr{
    margin-top: 15px;
    margin-bottom: 10px;
    border:1px solid black
  }

  .product_content a{
    background-color: #F63866;
    padding-top:5px;
    padding-bottom: 5px;
    font-family: 'Noto Sans';
    color:white;
    font-weight: bold;
    width:100px;
    margin: 10px auto;
  }

  .product_name{
    font-family: 'Noto Serif';
    font-weight: bold;
  }

  .product_price{
    font-family: 'Noto Sans';

  }

 

  @media screen and (max-width: 800px){
    .product_section{
      grid-template-columns: auto auto;
      gap:7vh;
    }
    .headline{
      flex-direction: column;
    }

    .headline h1{
      text-align: center;
      margin-bottom: 5vh;
    }

    .headline_right{
      margin-right:-15vw;
      
      width:auto;
    }
  }

  @media screen and (max-width: 500px){
    /* HEADLINE  */
      .headline{
        flex-direction: column;
      }

      .headline h1{
        text-align: center;
        margin-bottom: 5vh;
      }

      .headline_right{
        margin-right:-15vw;
        
        width:auto;
      }

      /* PRODUCTS  */
      .product_section{
      grid-template-columns: auto;
      gap:7vh;
      }

    }
  </style>
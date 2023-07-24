<template>
<div class="custom_order_section">
    <img class="custom_left" src="@/assets/HomeContent/Custom.png"/>
    <div class="custom_right">
      <h1 class="custom_right_white">Jangan lupa kamu bisa</h1>
      <div class="flex">
          <h1 class="custom_right_pink">Custom Order</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="61" viewBox="0 0 96 97" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M48 97C47.904 70.2471 26.4506 48.5899 0 48.5899C26.5097 48.5899 48 26.8352 48 0C48.0956 26.7529 69.5494 48.4101 96 48.4101C69.4899 48.4101 48 70.1648 48 97Z" fill="#FFEEF2"/>
          </svg>
      </div>
      <p class="custom_right_text">Isi form berikut dengan barang apa saja yang ingin ada di bouquet, gift box atau hiasan apa saja di akrilikmu.</p>
      <a href="#">PESAN CUSTOM</a>
    </div>
</div>
</template>
<style scoped>
    .custom_order_section{
    display: flex;
    padding:0;
  }

  .custom_left{
    width:50%;
  }

  .custom_right{
    background-color: #1A1517;
    color:white;
    width:50%;
    padding:5vw;
    font-family: 'Noto Serif', Serif;
  }

  .custom_right_white{
    color:white;
    font-size: 28px;
  }

  .custom_right_pink{
    color:#FF92C2;
    font-size: 40px;
    font-weight: 700;
    margin-right: 12px;
  }

  .custom_right_text{
    font-size: 15px;
    font-weight: 100;
    margin-bottom: 30px;
    margin-top: 40px;
  }

  .custom_right>a{
    background-color:#F63866;
    color:white;
    padding:10px; 
  }
  @media screen and (max-width:850px){
    .custom_order_section{
      flex-direction: column;
    }
    .custom_left{
      width:100vw;
    }

    .custom_right{
      width:100vw;
      padding:15vw;
    }
  }
</style>
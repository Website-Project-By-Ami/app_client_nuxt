<template>
  <div id="testi">
    <div class="testi_section" id="testi">
        <div class="testi_left">
          <img  src="@/assets/HomeContent/Testimoni.png" class="image_testi" />
        </div>
        <div class="testi_right">
          <div class="testi_right_left">
              <img src="@/assets/HomeContent/Quote.svg" alt="petik" class="petik_besar"/>
              <div class="testi_title">
                <h1 class="testi_title_1">Testimoni dari para Customer</h1>
                <p class="testi_title_2">Servis bouquet dan gift box kami sudah di-review oleh banyak pelanggan baru dan pelanggan setia</p>  
              </div>
              <div class="testi_card_1">
                <div class="testi_card ">
                    <img src="@/assets/HomeContent/Quote.svg" alt="petik" class="petik_kecil"/>
                    <p class="testi_testi">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>  
                    <p class="testi_nama">John Wick</p>
                    <p class="testi_posisi">Mayat</p>
                </div>
              </div>
          </div>
          <div class="testi_right_right">
              <div class="testi_card">
                <img src="@/assets/HomeContent/Quote.svg" alt="petik" class="petik_kecil"/>
                <p class="testi_testi">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>  
                <p class="testi_nama">Hendie Jason</p>
                <p class="testi_posisi">Mahasiswa UMN</p>
              </div>
              <div class="testi_card">
                <img src="@/assets/HomeContent/Quote.svg" alt="petik" class="petik_kecil"/>
                <p class="testi_testi">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>  
                <p class="testi_nama">Steve Rogers</p>
                <p class="testi_posisi">Superhero Penyelamat Dunia</p>
              </div>
          </div>
        </div>
    </div>
    <div class="testi_lengkap_arrow">
      <p class="testi_lengkap">Lihat testimoni lengkap</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 136 136" fill="none">
        <path d="M58.9998 51L75.9998 68M75.9998 68L58.9998 85M75.9998 68L30.6665 68" stroke="white" stroke-width="5"/>
      </svg>
    </div>
  </div>
</template>

<style scoped>

  #testi{
    position: relative;
  }
  .testi_section{
    display: flex;
    width:85vw;
    margin-left: auto;
    margin-right: auto;
  }
  /* .testi_lengkap{
    position: absolute;
  } */

  .testi_lengkap_arrow{
    display: flex;
    position: absolute;
    top:50%;
    left:7.5%;
    background-color: black;
    z-index: 1;
    color:white;
    align-items: center;
    border-radius: 0 80px 80px 0;
    width:fit-content;
    padding-left: 6vw;
    padding-right: 1vw;
    gap:1.5vw;
    font-family: 'Noto Sans';
  }
  .testi_card{
    background-color: white;
    box-shadow: -3px 0px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1);
    font-family: 'Noto Sans';
    padding:20px;
    max-width: 400px;
    position: relative;
  }

  .testi_left{
    height:100%;
  }

  .testi_title{
    font-family: 'Noto Serif';
  }

  .testi_right{
    padding:10vw 50px;
    display: flex;
    gap:10px;
    width: 90%;
    height:100%;
  }

  .testi_right_left{
    display: flex;
    flex-direction: column;
    gap:15px;
    position:relative;
  }

  .testi_right_right{
    display: flex;
    flex-direction: column;
    gap:15px;
    margin-top: 50px;
  }
  
  .testi_card_1{
    align-self:flex-end;
    width:70%;
    margin-right: 0;
    height:40vh;
  }

  .testi_title_1{
    font-size: 36px;
  }

  .testi_title_2{
    font-size: 12px;
  }

  .testi_testi{
    font-size: 12px;
    padding-top: 20px;
  }

  .testi_nama{
    font-size: 14px;
    font-weight: bold;
    padding-top: 20px;
  }

  .testi_posisi{
    font-size: 10px;
    color:#969BAB;
    padding:5px 0 20px;
  }

  .petik_besar{
    position: absolute;
    opacity: 0.30000001192092896;
    z-index: 0;
    top:-5%;
    left:-5%;
    width:100px;
    height:auto;
  }

  .petik_kecil{
    position: absolute;
    opacity: 0.30000001192092896;
    z-index: 0;
    top:10%;
    left:7%;
    width:20px;
  }

  @media screen and (max-width: 1000px){

    #testi{
      margin-bottom: 15vh;
    }
    .image_testi{
      display:none;
    }

    .testi_right{
      flex-direction: column;
      text-align: center;
      padding-right:0;
      padding-left:0;
      margin:auto;
      padding-bottom: 50px;
    }

    .testi_card{
      width:100%;
      margin:auto;
      text-align: left;
    }

    .testi_section{
      margin:auto;
    }
    .testi_card_1{
      align-self:flex-end;
      width:100%;
      margin-right: 0;
      height:100%;
    }
    .testi_right_right{
      margin-top: 0;
    }

    .testi_lengkap_arrow{
      top:98%;
      left:0%;
      height:fit-content;
      /* margin-bottom: 10vh; */
    }
    .petik_besar{
      left:45%;
      top:-15%;
    }
  }
</style>
<template>
    <div class="container">
  
  <div class="overlay" v-if="overlay"></div>
  
  
  <div class="menumobil">
  <div class="INER">
  <div class="openclose">
    <img src="@/public/images/icon-close.svg" alt="" v-if="toogleMenu" @click="changeMenuState();changeListeState();changeoverlay()"
    >
  
   
  
  
  
  
    <img src= "@/public/images/icon-menu.svg" alt=""  v-else @click="changeMenuState();changeListeState();changeoverlay()"  >
    <!-- <img src="@/public/images/icon-close.svg" alt=""  v-else  > -->
    <!-- <img src="@/public/images/icon-menu.svg" alt="" v-if="toogleMenu"> -->
   
  </div>  
  
  <div class="logo">
  <img src="@/public/images/logo.svg" alt="">
  </div>
  </div>
  
  
  
  
  
  <div class="droite">
    <div v-for="product in cart" :key="product.id" class="iconecontainer">
      <p > {{ product.quantity }} </p> 
    </div>
  <img src="@/public/images/icon-cart.svg" alt="" @click="changeStateproductPage"> 
  <img src="@/public/images/image-avatar.png" alt="">
  
  </div>
  
   <div class="listemenumobile" v-if="listMenumobile"  >
    <img src="@/public/images/icon-close.svg" alt="" 
  
  @click="changeMenuState();changeListeState();changeoverlay()"
    >
  
  
  
  
  <ul>
      <li>Collections</li>
      <li>Men</li>
      <li>Women</li>
      <li>About</li>
      <li>Contact</li>
  </ul>
  </div> 
  
  </div>
  
  
  <div class="menuu">
  <div class="gauche">
  <div class="logo">
  <img src="@/public/images/logo.svg" alt="">
  </div>
  
  <div class="listemenu">
  <ul>
      <li>Collections</li>
      <li>Men</li>
      <li>Women</li>
      <li>About</li>
      <li>Contact</li>
  </ul>
  </div>
  </div>
  
  <div class="droite" >
    <div v-for="product in cart" :key="product.id" class="iconecontainer">
      <p > {{ product.quantity }} </p> 
    </div>
   
  <img src="@/public/images/icon-cart.svg" alt="" @click="changeStateproductPage" > 
  <img src="@/public/images/image-avatar.png" alt="">
  
  </div>
  </div>
  
  
  
   <productpage class="chek" v-if="productPage" /> 
  
    </div>
  </template>
  
  <script setup>
  const overlay =ref(false);
  
  function changeoverlay(){
    overlay.value=!overlay.value
  }
  
  
  const  counterStore=useUserStore();
   const cart = counterStore.cart
  
  
  
  
  
  
  
  const toogleMenu=ref(false);
  
  function changeMenuState(){
    toogleMenu.value=!toogleMenu.value;
  }
  
  const listMenumobile =ref(false);
  function changeListeState(){
    listMenumobile.value=!listMenumobile.value;
  }
  const productPage = ref(false);

function changeStateproductPage(){

  productPage.value=!productPage.value

}
  </script>
  
  <style  lang="scss" scoped>
  /* #FE7D18 orange */
     /* #CCCCCC grise */
     /* div img:first-child {
      border: 2px solid red; 
    } */
  // menuMOBILE----------------------------------------
  








  .chek{
top: 75PX;
position:fixed;
right:50px;
width: 20%;
border-radius: 5px ;
box-shadow: 5px 5px  5PX 5px rgba(0, 0, 0, 0.2);
z-index: 10;
}


@media (max-width:720px){
.chek{
  width: 92%;
  right:20px;
  z-index:1;
  background-color:#ffffff;
}
}

@media (max-width:1024px){
.chek{
  width: 40%;
  right:20px;
  z-index:1;
  background-color:#ffffff;
}
}

  .overlay{
    background-color: rgba(0, 0, 0, 0.5); /* Overlay noir semi-transparent */
    position: absolute;
    top:0;
    height:100vh;
    width:100% ;
    z-index:0;
  
  }
  
  
    .listemenumobile{
      img{
        margin-top: 40px;
        width:8%;
        margin-left:20px;
      }
  position:fixed;
  // padding:90px  9px;
  top:0px;
  left: 0;
  
  width:70% ;
  font-weight: bold;
  background-color: #ffffff;
  height: 100VH;
  
      ul{
  margin-top:25px;
  padding: 0 15PX;
   display: flex;
   flex-direction: column;
   gap:20px;
   color:black;
   font-size:25px;

  
   list-style: none;
  
  
  
  }
    }
  
  
  
    .menumobil{
      display:flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 20px;
      width:100%;
       position:fixed;
       z-index:5;
      // padding:20px;
      // left:0;
      // width:50% ;
      // height:100VH;
      // background-color: RED;
  
    .INER{
      display: flex;
      align-items:center;
   
      gap:20px;
    }
  }
  
    .container{
      display: flex;
     
      justify-content: CENTER;
    }
  .menuu{
    font-size: calc(16px + 0.3vw);
      border-bottom: 1PX solid grey;
      display: flex;
      padding: 1%;
      justify-content: space-between;
      align-items: center;
      cursor:pointer;
      width: min(100%,1500PX);
     
  }
  .gauche{
      display: flex;
      gap:60px;
    //  background-color: green;
   width:90% ;
  }
  .droite img:first-child {
    height: 25PX;
    width:25px ;
    } 
  .droite{
    .iconecontainer{
      position: relative;
    }
   
      display: flex;
      align-items: center;
      gap:20PX;
      img{
        height: 30PX;
        width:30px ;
        cursor:pointer;
      }
      p{
        background-color:#FE7D18;
        color:#ffffff;
        position:absolute;
        padding:9px;
        left: 38px;
        top:-14px;
     font-size: 12px;
        height: 20PX;
        width:20px ;
        border-radius:50%;
        z-index:1;
        display: flex;
        justify-content: center;
        align-items:center;
      }
  }
  
  .listemenu{
    width:60% ;
  ul{
   
    color:grey;
    display: flex;
    list-style: none;
    // background-color: red;
    justify-content: space-between;


li{  
  position:relative;
  &::after{
  content: '';
  position: absolute;
  top: 45PX;
  height: 4px;
  opacity: 0;
  left: 0;
  width:100%;
  background-color: #FE7D18;
 
}
    &:hover::after{
      opacity:  1 ;
    }
}
  }
  }
  
  
  
  // --------------------mediaqueries---------------------------
  
  @media (max-width:720px){
    .menuu{
      display: none;
    }
    .menumobil{
      background-color: #ffffff;
    }
  }
  @media (min-width:720px){
    .menumobil{
      display: none;
    }
    .overlay{
      display:none;
    }
  }  
  
  
  
  
  
  
  </style>
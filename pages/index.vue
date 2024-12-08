<template>
    <div class="container">
   <div class="overlay"  v-if="overlay"       ></div>
  <div class="gauche">
  
<!-- <orignminiature  class="originmoni"   @click="changpopsata"    /> -->


<div class="imagecontainer">
    <div class="product-gallery">
    <!-- Image principale -->
    <div class="main-image">
      <img :src="activeImage.large" alt="Image principale"  @click="changpopsata();changeoverlaystate()"/>
    </div>



<!-- Miniatures -->
    <div class="thumbnails">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image.thumbnail"
        alt="Miniature"
        :class="{active: image.large === activeImage.large }"
        @click="updateActiveImage(image)"
      />
    </div>

    <!-- &:hover {
    background-color: darkblue;
    color: lightgray;
  } -->

</div>
</div>









   <div class="close" v-if="overlay">   <img src="@/public/images/icon-close.svg" alt=""  @click="changpopsata();changeoverlaystate()" ></div>
  <popupimg class="popupimg" v-if="afficherpopup" />  
  </div>
  <carrousel class="carou"/> 
  
  <div class="droite"  v-for="product in counterStore.products"  :key="product.id">
  
   <div class="dynamique">
  <p>SNEAKER COMPANY</p>
<p class="titleproduct" >
    {{ product.name }}      <br>    {{ product.namee }} 
</p>    


  <p class="description">
    {{ product.description }} 
  </p>
  <div class="flexxx">
  <p class="price" >${{product.price }}.00  <span>50%</span></p>
  <p><s>$250.00</s></p></div>



</div> 





  <div class="pricesec">
  <div class="bouton">
  
  <button class="cooleu" @click="handledecrement (product.id)" ><svg width="12" height="4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a"/></defs><use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#a"/></svg></button>
  
  

  
  <button>{{ product.quantity }}</button>    
  <button  class="cooleu"  @click="handleIncrement(product.id)"><svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b"/></defs><use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#b"/></svg></button>     
  </div>
  
  <div class="card" >

      <button  @click="counterStore.addToCart(product)" >  <img src="@/public/images/icon-cart.svg" alt="">   <span> Add to cart</span></button>
  </div>
  

  </div>
  
  

  
  </div>
  
  

  
    </div>
  </template>
  
  
  
  <script setup>
    // import { ref} from 'vue';
   import { useUserStore  } from '@/stores/shop';
   const  counterStore=useUserStore();
   const productPage = ref(false);
   
// Appel de l'action pour incrémenter
const handleIncrement = (id) => {
    counterStore.incrementQuantity(id);
};

// Appel de l'action pour decrémenter
const handledecrement = (id) => {
    counterStore.decrementQuantity(id);
};

const afficherpopup=ref(false);
const overlay= ref(false);

function changeoverlaystate(){
  overlay.value=!overlay.value
}
function changpopsata (){
  afficherpopup.value=!afficherpopup.value
}





 
const images = ref([
      {
        thumbnail: '/images/image-product-1-thumbnail.jpg',
        large: '/images/image-product-1.jpg'
      },
      {
        thumbnail: '/images/image-product-2-thumbnail.jpg',
        large: '/images/image-product-2.jpg'
      },
      {
        thumbnail: '/images/image-product-3-thumbnail.jpg',
        large: '/images/image-product-3.jpg'
      },
      {
        thumbnail: '/images/image-product-4-thumbnail.jpg',
        large: '/images/image-product-4.jpg'
      },
    ]);

 // Image active : par défaut, le premier objet
    const activeImage = ref(images.value[0]);

    // Fonction pour changer l'image principale
    const updateActiveImage = (image) => {
      activeImage.value = image;

// on peut utuliser aussi la destructuration  ce qui allait donner activeImage.value={...image}ce qui veut dire qu'on copie tout les propriétes de image(celui sur lequel on est actuellement) dans activeImage.value. et on peut  accéder dans le template en faisant a
//activeImage.value.large si on veut atteindre l'image large
      // activeImage.value = image; Tu dis à Vue : "Change la valeur contenue dans la référence réactive activeImage."
    };

  </script>
  
  
  
  
  <style lang="scss" scoped>


.popupimg{
  z-index: 9;
}
.close{
  z-index: 9;
}

@media (max-width:1051px){
  
  // .product-gallery{
  // width:20%;
  // background-color: red;
      
  .originmoni{
     
    
        
       
       }
      
  // }
  
  
  
  
  
  
  
  
       
    }
  
  
  .main-image{
  
      display: flex;
    cursor: pointer;
       justify-content: center;
      
  }
  
  .product-gallery{
   
      img{
          width:50% ;
          border-radius: 9PX;
      }
  }
  .thumbnails{
      margin-top:9px ;
      display: flex;
      gap:26px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      img{
          width:10% ;
          &.active {
          border: 4px solid #FE7D18; /* Bordure bleue pour l'image active */
         opacity: 0.7;
        }
      }
  
  
  
  }

.popupimg{
  position: fixed;
  top:24%;
  right: 40%;
  width:25% ;
   
}

.close{
  position: fixed;
  top:21%;
  right: 16%;
  width:25% ;
  cursor: pointer;


  img{
    &:hover{
 background-color: red; 
  
}
  }

}
   .originmoni{
  
      
     }
@media (max-width:1051px){
     .droite{
    
      width:60% ;
     }
  
     
  }

    @media (min-width:720px){
      .container{
    .carou{
      display: none;
    }
  }

}
  $primary-color: grey; 
  $secondary-color:#FE7D18; 
  $text-color:black; 
  .chek{
background-color:#ffffff;
    position:fixed;
    right:50px;
    width: 20%;
    border-radius: 5px ;
    box-shadow: 5px 5px  5PX 5px rgba(0, 0, 0, 0.2);
  }

  .container{
    position:relative;
     display: flex;
    justify-content: center;
     align-items: center;
    // flex-wrap:wrap ;
    height: 90vh;

    .overlay{
    background-color: rgba(0, 0, 0, 0.7); /* Overlay noir semi-transparent */
    position: fixed;
    top:0;
    height:100vh;
    width:100% ;
    z-index:1;
  
  }










    .gauche{
       display: flex;
     
       flex-direction: column;
     
       width:45%;
      
    }
  
    .droite{
      width:45%;
    
      //  padding: 100PX 0;
      p{
        color:$primary-color;
        
      }

      .dynamique{
     
        width: 70%;
      > :nth-child(2) {
     color:$text-color;
     font-size: calc(16px + 2vw);
     font-weight: bold;
    }
}
 
  
  
  
      .description{
        padding: 15PX 0;
        font-weight: 500;
      }
      .price{
        display: flex;
        align-items: CENTER;
        gap:5px;
        color: $text-color;
        font-weight: bold;
        font-size: calc(16px + 0.5vw);
        span{
          background-color:$text-color;
          color: #ffffff;
          border-radius: 9px;
          font-size:  13px;
          padding: 3PX;
        }
      }
  
      .pricesec{
        display: flex;
        margin-top: 9PX;
        // border:1PX SOLID black;
       justify-content: space-between;
       width: 70%; ;
       align-items: center;
       gap: 9PX;
        .bouton{
          
          padding:9px;
          width:30% ;
          background-color: #CCCCCC;
          border-radius:7px;
          display:flex;
          justify-content: space-between;
          align-items: center;
           button{
            cursor:pointer;
            display:flex;
          justify-content: space-between;
          align-items: center;
            border: none;
            font-weight: bold;
            font-size: 20px;
           
            background-color: transparent;
           }
  
           .cooleu{
            color:$secondary-color;
            font-size: 23PX;
            
       
           }
        }
  
        .card{
          width:70% ;
          display:flex;
          cursor:pointer;
          align-items: center;
          button{
            cursor:pointer;
            gap: 5PX;
            border: none;
            font-weight: bold;
            width:100% ;
            background-color:$secondary-color;
            color:black;
            border-radius:7px;
            display: flex;
            align-items:center;
            justify-content: CENTER;
            padding:10px;
            font-weight: bolder;
            font-size: calc(14px + 0.4vw);
          }
        }
      }
    }
    
   
  }
  
  @media (max-width:720px){
    .container{
    flex-direction:column;
    .originmoni{
display: none;

    }
    .carou{
      display: block;
      margin-top: 230PX;
    }
    .droite{
      // background-color: RED;
      
      width:100% ;
      width:90%;
      .flexxx{
        display: flex;
        justify-content: space-between;
      }
    .pricesec{
      flex-direction:column;
      // background-color: yellow;
      width: 100%;
  .bouton{
  width: 100%;
  
  
  }
  .card{
    width: 100%;
    margin-bottom: 30px;
  
  }
  }


  .dynamique{
     
     width: 100%;
   > :nth-child(2) {
  color:$text-color;
  font-size: calc(16px + 2vw);
  font-weight: bold;
 }
}


















    }
 
  }
  
  
  }
  @media (min-width:720px){
    .carou{
      display: none;
    }
  }
  </style>
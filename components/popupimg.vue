<template>
    
    <div class="carousel">
        
      <!-- Image principale -->
      <div class="carousel-image">
        <img :src="images[currentImageIndex]" alt="Carrousel Image" class="chois" />
        <!-- <button > <img src="@/public/images/icon-previous.svg" alt="" class="previous"></button> -->

        <img src="@/public/images/icon-previous.svg" alt="" class="previous" @click="goToPreviousImage" >

        <img src="@/public/images/icon-next.svg" alt="" class="next"  @click="goToNextImage" >

        
      </div>
  
        <div class="thumbnails">
       <img
        v-for="(imag, index) in image"
        :key="index"
        :src="imag.thumbnail"
        alt="Miniature"
        :class="{ active: imag.large === activeImage.large }"
        @click="updateActiveImage(imag)"
      />
    </div>   














    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  

  const image = ref([
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
    const activeImage = ref(image.value[0]);

    // Fonction pour changer l'image principale
    const updateActiveImage = (imag) => {
      activeImage.value = imag;
    };
































  // Liste des images du carrousel
  const images = [
   '/images/image-product-1.jpg',
   '/images/image-product-2.jpg',
    '/images/image-product-3.jpg',
    '/images/image-product-4.jpg',
  ];
  
  // Index de l'image actuellement affichée
  const currentImageIndex = ref(0);
  
  // Calculer si nous sommes sur la première ou la dernière image
  const isFirstImage = computed(() => currentImageIndex.value === 0);
  const isLastImage = computed(() => currentImageIndex.value === images.length - 1);
  
  // Fonction pour aller à l'image précédente
  const goToPreviousImage = () => {
    if (currentImageIndex.value > 0) {
      currentImageIndex.value--;
    }
  };
  
  // Fonction pour aller à l'image suivante
  const goToNextImage = () => {
    if (currentImageIndex.value < images.length - 1) {
      currentImageIndex.value++;
    }
  };
  </script>
  
  <style lang="scss" scoped>


@media (min-width:720px){
   
    

    
  }
  .carousel {
     display: flex;
  flex-direction: column;
  
    width: 30%;
        
   }
  
  .carousel-image  {
  

    
  }
  .chois{
    border-radius: 10PX;
img{ 
    
 }
    width: 100%;
  }




  .carousel-image {
    position: relative;
    max-width: 100%;
    height: auto;
  
    border-radius: 10px;
  }

  
  button {
     background-color: transparent;

    border: none;
    border-radius: 5px;
    cursor: pointer;
   
  }
  .next{
    position: absolute;
    top: 50%;
    right: 0;
   margin-right: 5PX;
   padding: 2PX;
    background-color: #FFFFFF;
  
  }



  .previous{
    position: absolute;
    top: 50%;
    left: 0;
    padding: 2PX;
    margin-left: 5PX;
    background-color: #FFFFFF;
  }
  button:disabled {
   
    cursor: not-allowed;
  }




   @media (max-width:720px){
     .carousel-image{
        
       
         
    }
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
        border-radius: 5px;
          width:15% ;
          &.active {
          border: 4px solid #FE7D18; /* Bordure bleue pour l'image active */
         opacity:1;
            
        }
      }
  
  
  
  }
  
























  </style>
  
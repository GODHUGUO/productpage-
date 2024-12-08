<template>
    <div class="carousel">
      <!-- Image principale -->
      <div class="carousel-image">
        <img :src="images[currentImageIndex]" alt="Carrousel Image" class="chois" />
        <!-- <button > <img src="@/public/images/icon-previous.svg" alt="" class="previous"></button> -->

        <img src="@/public/images/icon-previous.svg" alt="" class="previous" @click="goToPreviousImage" :disabled="isFirstImage">

        <img src="@/public/images/icon-next.svg" alt="" class="next"  @click="goToNextImage" :disabled="isLastImage">

        
      </div>
  
    
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
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
    .carousel{
        display: none;
      }
    
      .carousel-image{
        display: none;
      }
    
  }
  .carousel {
     display: flex;
  
  
    width: 100%;
        
   }
  
  .carousel-image  {
  

    
  }
  .chois{
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
  </style>
  
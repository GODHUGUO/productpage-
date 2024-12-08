<template>

<div class="imagecontainer">
    <div class="product-gallery">
    <!-- Image principale -->
    <div class="main-image">
      <img :src="activeImage.large" alt="Image principale" />
    </div>



<!-- Miniatures -->
    <div class="thumbnails">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image.thumbnail"
        alt="Miniature"
        :class="{ active: image.large === activeImage.large }"
        @click="updateActiveImage(image)"
      />
    </div>

    <!-- &:hover {
    background-color: darkblue;
    color: lightgray;
  } -->

</div>
</div>
</template>


<style lang="scss" scoped>



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
        width:10% ;
        &.active {
        border: 4px solid #FE7D18; /* Bordure bleue pour l'image active */
       opacity: 0.7;
      }
    }



}



</style>

<script setup>
import {ref} from 'vue';


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
    };

</script>
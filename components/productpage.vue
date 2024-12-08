<template>


<div class="che">
  <h3>Cart</h3> <hr>
<div v-if="cart.length > 0"         class="bg"      >

<div class="emglobe">


 <div v-for="product,id in cart" :key="product.id"   class="description">
  
  <div class="chaussure">
    <img :src="product.image"/>
 </div> 

  
 <div><p> {{ product.name }} {{ product.namee }}</p> ${{product.price}}*{{ product.quantity }}  <span> ${{ product.price * product.quantity }}</span>


  
</div>

 <button  @click="counterStore.removeCartElement(id)"><img src="@/public/images/icon-delete.svg" alt="logo menu" ></button> 
     
  
    
</div>

<div>

</div>
<button class="chekbtn">Checkout</button>
</div>

</div>
<div v-else class="cartstyle" > 
  <p >  Your cart is empty</p>
  
 
</div>
</div>
</template>

<script setup>

  import { useUserStore  } from '@/stores/shop';
   const  counterStore=useUserStore();

   const cart = counterStore.cart
  //  console.log(counterStore.cart);

    
     const  removeCartElement = (id) => {
     counterStore.removeCartElement(id);
   }



  


 
</script>


<style  lang="scss" scoped>
h3{
  padding: 5px;
}
.chekbtn{


    background-color: #FE7D18;
    border: none;
    font-weight: bold;
    padding: 5px;
    border-radius:7px;
    width:100%;
     margin-top:5px;

}






.bg{
  background-color:#FFFFFF;
display: flex;
justify-content: center;
align-items: center;
padding: 9px;


}

.cartstyle{

display: flex;
justify-content: center;
align-items: center;
height: 200px;

}


.description{

 display: flex;
 align-items: center;
 gap:30px;
  button{
     background-color: transparent;
    border:none;
  }
span{
  font-weight: bold;
  display:inline;
}
}
.chaussure{
  img{
    height: 35px;
    width:35px ;
    border-radius: 5px;
  }
}

</style>
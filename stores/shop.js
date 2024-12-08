import { defineStore } from 'pinia';

export const useUserStore = defineStore('cart',{
state:()=>({

 // Liste des produits disponibles sur le site
products:[
    {
      id: 1,
      image: '/images/image-product-1.jpg',
      name: "Fall Limited Edition",
      namee:"  Sneakers",
      description: "Lorem, ipsum dolor sit amet  consectetur minima voluptates et.  Ipsam in repellat aperiam, consequuntur ritatis consectetur minima voluptates et.  Ipsam in repellat aperiam, consequuntur ritati im magni, culpa mollitia",
      price:125.00,
      quantity: 1, // Quantité en stock  
    }  
],
// Contenu du panier
cart: [],



}),

getters: {
  
  },
actions:{
    incrementQuantity(id) {
        // Trouver le produit par son id
        const product = this.products.find((item) => item.id === id);
        if (product) {
          product.quantity++; // Incrémenter la quantité
        }
      },

      decrementQuantity(id) {
        // Trouver le produit par son id
        const product = this.products.find((item) => item.id === id);
        if (product && product.quantity>1) {
          product.quantity--; // decrémenter la quantité
        }
      },


  

       removeCartElement(id){
         this.cart.splice(id,1)
       },


         

     // Action pour ajouter un produit au panier
     addToCart(product){
  

 for (let i = 0; i < this.cart.length; i++) {
  if(this.cart[i].id ===product.id){
   
// faire la verification ici    
       this.cart[i].quantity += product.quantity;
   return;

  }

 }




  this.cart.push({
 id:product.id,
 name:product.name,
 namee:product.namee,
description:product.description,
 price:product.price,
 quantity:product.quantity,
 image:product.image

  })

product.quantity=1

}

//   Sinon, elle ajoute le produit au panier avec une propriété initiale quantity: 1.
//   this.cart.push({ ...product, quantity: 1 }); 
       
      // },
 },



})
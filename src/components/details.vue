<template> 
<div class="details"> 
 <div class="container">  
  <h1 class="text-primary text-center">{{title}}</h1> 
   <div class="col-md-12" v-for="(product,index) in products" :key="index">  
          <div v-if="proId == product.productId">     
               <h1>{{product.productTitle}}</h1>    
     <img :src="product.image" class="img-fluid">    
      </div>  
        </div>

  <h2>Product id is:{{this.$route.params.Pid}}</h2> 
  </div>
   </div>
   </template>
   <script> 
   export default{  
   	name:'details', 
   	 data(){  
             return{
           title:"details",
             proId:this.$route.params.Pid,
             products:[
                     {
                        productTitle:"ABCN",
                        image: require('../assets/images/product1.png'),
                        productId:1
                      },

                      {
                        productTitle:"KARMA",
                        image: require('../assets/images/product2.png'),
                        productId:2
                      },

                      {
                         productTitle:"Tino",
                         image : require('../assets/images/product3.png'),
                         productId:3
                      },
                      
                      {
                         productTitle:"EFG",
                         image: require('../assets/images/product4.png'),
                         productId:4
                      },

                      {
                         productTitle:"MLI",
                         image: require('../assets/images/product5.png'),
                         productId:5
                      },
      
                      {
                         productTitle:"Banans",
                         image: require('../assets/images/product6.png'),
                         productId:6
                      }
                    ]
             
             
             
             
             
        }
        
   	} 
   }
   </script>
<template>
  <div class="home">   
     <h1>Hello</h1>
     <h1>{{msg}}</h1>
     <!-- <h3 @click="goTodetail()" >{{data.productTitle}}</h3> -->
     <div class="row">      
        <div class="col-md-4 col-lg4" v-for="(data,index) in products" :key="index">       
            <img :src="data.image" class="img-fluid">  
             <h3 @click="goTodetail(data.productId)" >{{data.productTitle}}</h3>       
            <!-- <h3>{{data.productTitle}}</h3>   -->    
        </div>    
      </div>
  </div>
</template>


 <script>
    export default { 
       name: 'home',
       data ()
        {  

          return {      msg: 'Welcome to home page', 
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
        },
        methods:{ 
            goTodetail(proId) {
                this.$router.push({name:'details',params:{Pid:proId}})
                  // this.$route.params.Pid

                  }
           }}


 </script>

   <!-- Add "scoped" attribute to limit CSS to this component only --><style scoped>

   </style>


<template>
    <div class="container">
     <div class="row mb-4">
             <!-- <div class="col"> <FilterComp @apply-filter="newdataDisplay"></FilterComp></div>
             <div class="col"><SortComp @apply-sort="newdataDisplay"></SortComp></div> -->
             
         </div>
         
         <div class="flex-container" v-if="outputData.length>0" id="procard">
             <div class="card mb-5" v-for="product of outputData " :key="product.prodID">
                 <div class="card-body animate__backOutDown">
                     <img :src="product.imageUrl">
                     <h3 class="mt-2 fw-bold">{{product.prodName}}</h3>
                     <p class="fw-bold">Price: R {{product.price}}</p>
                     <router-link class="btn" :to="{ name:'product', params: {id: product.prodID}}">View More</router-link>
                     <router-link class="btn" :to="{ name:'product', params: {id: product.prodID}}">Add to Cart</router-link>
                 </div>
             </div>
 
         </div>
         <div class="flex-container" v-else-if="products" id="procard">
             <div class="card mb-5" v-for="product of products" :key="product.prodID">
                 <div class="card-body">
                     <img :src="product.imageUrl">
                     <h3 class="mt-2">{{product.prodName}}</h3>
                     <p>Price: R {{product.price}}</p>
                     <router-link class="btn btn-primary" :to="{ name:'product', params: {id: product.prodID}}">View More</router-link>
                     <router-link class="btn" :to="{ name:'product', params: {id: product.prodID}}">Add to Cart</router-link>
                 </div>
             </div>
         </div>
         <div v-else>
         <SpinnerComp/>
         </div>
    </div>
 </template>
 
 <script>
     import SpinnerComp from '@/components/SpinnerComp.vue';
    //  import FilterComp from '@/components/FilterComp.vue';
    //  import SortComp from '../components/SortComp.vue';
 
     export default{
     components: { SpinnerComp}, 
     data(){
         return{
             outputData:[],
             disDt:[]
         }
     },
     computed: {
         products() {
             return this.$store.state.products;
         },
     },
     mounted() {    
         this.$store.dispatch("getProducts")
        
     },
    
     methods:{
         newdataDisplay(data){
            this.outputData=data;
          
         },
         
 
        
     },
    
        
     }
 </script>
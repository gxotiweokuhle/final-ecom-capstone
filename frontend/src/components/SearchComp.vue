<template>
    <div class="InputContainer p-2">
 
         <input placeholder="Search.." id="input" v-model="searchInput" class="input" name="text" type="text">
   
     </div>
 </template>
 <script>
   export default{
     data(){
           return{
              // sData:null
              searchInput: "",
           }
       },

       computed: {
           products() {
               return this.$store.state.products;
           },
           filteredProducts() {
                  if (this.searchInput.toLowerCase() !=" ") {
                    return this.products.filter(
                    (product) =>
                      product.prodName.toLowerCase().includes(this.searchInput.toLowerCase()) ||
                      product.category.toLowerCase().includes(this.searchInput.toLowerCase())
                  ); 
                  } 
            },
          },
       watch:{
        filteredProducts(data){
           this.$emit("apply-search", data)
         }
     
       },
      
       mounted() {
           this.$store.dispatch("getProducts");
       }
   
  }

 </script>
 <style scoped>
     .InputContainer {
   width: 210px;
   height: 50px;
   display: flex;
   align-items: center;
   justify-content: center;
   background: linear-gradient(to bottom,rgb(200, 160, 4),rgb(11, 1, 1));
   border-radius: 30px;
   overflow: hidden;
   cursor: pointer;
   box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.075);
 }
 
 .input {
   width: 200px;
   height: 40px;
   border: none;
   outline: none;
   caret-color: rgb(255, 81, 0);
   background-color: rgb(255, 255, 255);
   border-radius: 30px;
   padding-left: 15px;
   letter-spacing: 0.8px;
   color: rgb(19, 19, 19);
   font-size: 13.4px;
 }
 
 
 </style>
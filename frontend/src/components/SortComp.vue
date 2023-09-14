<template>
   
        <div class="row">
            <div class="col-sm-4 mb-2 p-md-3">
                <label for="Names" class="my-1 fw-bold fs-4 text-black">Sort by: Name</label>
                <select v-model="sName" id="pName" name="Names" class="mx-2">
                    <option value="A-Z" class="text-black fs-4 fw-bold">A-Z</option>
                    <option value="Z-A"  class="text-black fs-4 fw-bold">Z-A</option>
                </select>
            </div>
            <div class="col-2">
                <label  class="text-black fs-4 fw-bold">OR</label>
            </div>
            <div class="col-sm-4">
                <label for="Price" class="my-1 fw-bold fs-4 text-black">Sort by: Price</label>
                <select v-model="sPrice" id="amount" name="Price" class="mx-2">
                    <option value="Low-High" class="text-black fs-4 fw-bold">Low-High</option>
                    <option value="High-Low" class="text-black fs-4 fw-bold">High-Low</option>
                  
                </select>
            </div>
            <div class="col-sm-2 mt-1 mb-3">
                <button class="fw-bold" @click="sortData(products)">Sort</button>
            </div>
        </div>
    
</template>
<script>
export default{
    data(){
        return{
            sName: null,
            sPrice: null 
            
        }
    },
    computed: {
        products() {
            return this.$store.state.products;
        }
        
    },
    methods:{ 
        // sortData(data){
        //     if (this.sName) {
        //         if(this.sName=="A-Z"){
        //           const sData =  data.sort(function(a,b){
        //            if(b.prodName > a.prodName){
        //             return -1
        //             }
        //           })
        //             this.$emit("apply-sort", sData)
        //         }else if(this.sName=="Z-A"){
        //             const sData = data.sort()
        //             this.$emit("apply-sort", sData)
        //         }
        //     } else if(this.sPrice){
        //         if(this.sPrice="Low-High"){
        //             const sData = data.sort((a,b)=>{return b.amount-a.amount})
        //             this.$emit("apply-sort", sData)
        //         }else if(this.sPrice="High-Low"){
        //             const sData = data.sort()
        //             this.$emit("apply-sort", sData)
        //         } 
        //     }
           
         
        // } 
            //sort

            sortData() {
      let sortedData = [...this.products]; // Create a copy of products array to avoid mutating the original data

      if (this.sName) {
        this.sPrice = " "
        if (this.sName == "A-Z") {
          sortedData.sort((a, b) => a.prodName.localeCompare(b.prodName));
          console.log(sortedData);
        } else if (this.sName == "Z-A") {
            console.log(sortedData);
          sortedData.sort((a, b) => b.prodName.localeCompare(a.prodName));
        }
      } else if (this.sPrice) {
        this.sName = " "
        if (this.sPrice == "Low-High") {
          sortedData.sort((a, b) => a.price.localeCompare(b.price));
        } else if (this.sPrice == "High-Low") {
          sortedData.sort((a, b) => b.price.localeCompare(a.price));
        }
      }

      this.$emit("apply-sort", sortedData);
    },





    },
    mounted() {
        this.$store.dispatch("getProducts");
    }

}

</script>
<style scoped>
select,label{
    font-family: 'REM', sans-serif;
}
button{
    padding: 0.5rem;
    background:black;
    color:white;
    border-radius: 1rem;
    font-family: 'REM', sans-serif;
}
button:hover{
  background: rgb(200,160,4);
  padding: 0.5rem;
  
}
</style>
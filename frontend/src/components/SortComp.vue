<template>
    <div class="col">
        <div class="row">
            <div class="col-sm-4">
                <label for="Names" class="my-1">Sort by: Name</label>
                <select v-model="sName" id="pName" name="Names">
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
            </div>
            <div class="col">
                <label>OR</label>
            </div>
            <div class="col-sm-4">
                <label for="Price" class="my-1">Sort by: Price</label>
                <select v-model="sPrice" id="amount" name="Price">
                    <option value="Low-High">Low-High</option>
                    <option value="High-Low">High-Low</option>
                  
                </select>
            </div>
            <div class="col">
                <button class="fw-bold" @click="sortData(products)">Sort</button>
            </div>
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
        if (this.sName === "A-Z") {
          sortedData.sort((a, b) => a.prodName.localeCompare(b.prodName));
        } else if (this.sName === "Z-A") {
          sortedData.sort((a, b) => b.prodName.localeCompare(a.prodName));
        }
      } else if (this.sPrice) {
        if (this.sPrice === "Low-High") {
          sortedData.sort((a, b) => a.price - b.price);
        } else if (this.sPrice === "High-Low") {
          sortedData.sort((a, b) => b.price - a.price);
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
    background:#2c3e50;
    color:white;
    border-radius: 1rem;
    font-family: 'REM', sans-serif;
}
button:hover{
  background: rgb(200,160,4);
  padding: 1rem;
  color:#2c3e50
}
</style>
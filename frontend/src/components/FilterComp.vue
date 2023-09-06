<template>
    <div class="col">
        <div class="row">
            <div class="col-sm-4 mx-1">
                <div class="row">
                    <label for="Categories" class="my-1">Filter by: Artist</label>
                </div>
                <div class="row">
                    <select v-model="artist" id="categories" name="Categories">
                    <option value="Cinga Samson">Cinga Samson</option>
                    <option value="Mary Sibande">Mary Sibande</option>
                    <option value="Sanele Matsolo">Sanele Matsolo</option>
                </select>
                </div>
                
                
            </div>
            <div class="col-sm-5">
                <div class="row">
                    <label for="Type" class="my-1">Filter by: Art Type</label>
                </div>
                <div class="row">
                    <select v-model="category" id="categories" name="Type">
                    <option value="Painting">Painting</option>
                    <option value="Sculpting">Sculpting</option>
                    <option value="Photography">Photography</option>
                </select>
                </div>   
            </div>
            <div class="col-sm-2 mt-4">
                <button class="fw-bold" @click="filter(products)">Filter</button>
            </div>
        </div>

        

    </div>
</template>
<script>
export default{
    data(){
        return{
            category: null,
            artist: null 
        }
    },
    computed: {
        products() {
            return this.$store.state.products;
        }
        
    },
    methods:{
        filter(data){
            if(this.category && this.artist){
               const dt = data.filter(item => item.category.includes(this.category) && item.artist.includes(this.artist))
                this.$emit("apply-filter", dt)
            }else if(this.category){
               const dt = data.filter(item => item.category.includes(this.category) )
                this.$emit("apply-filter", dt)
            }else if( this.artist){
               const dt = data.filter(item => item.artist.includes(this.artist))
                this.$emit("apply-filter", dt)
            }
            
        }
      
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
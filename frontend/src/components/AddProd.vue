<template>
    <div class="container">
      <!-- Modal -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Products" data-bs-whatever="@mdo">Add</button>


      <div class="modal fade" id="Products" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Add Product</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" @submit.prevent="addProduct">
              <form>
                <div class="mb-3">
                  <label for="prodName" class="col-form-label">Product name:</label>
                  <input type="text"  v-model="payload.prodName" class="form-control" id="prodName"  placeholder="Product Name" required>
                </div>
                <div class="mb-3">
                  <label for="category" class="col-form-label">Category:</label>
                  <input type="text"  v-model="payload.category" class="form-control" id="category"  placeholder="Category" required>
                </div>
                <div class="mb-3">
                  <label for="price" class="col-form-label">Price:</label>
                  <input type="text"  v-model="payload.price" class="form-control" id="price"  placeholder="Price" required>
                </div>
                <div class="mb-3">
                  <label for="brand" class="col-form-label">Artist:</label>
                  <input type="text"  v-model="payload.artist" class="form-control" id="brand"  placeholder="artist" required>
                </div>
                <div class="mb-3">
                  <label for="quantity" class="col-form-label">Quantity:</label>
                  <input type="text"  v-model="payload.quantity" class="form-control" id="quantity"  placeholder="Quantity" required>
                </div>
                <div class="mb-3">
                  <label for="desc" class="col-form-label">Description:</label>
                  <input type="text"  v-model="payload.details" class="form-control" id="desc"  placeholder="Product Description" required>
                </div>
                <div class="mb-3">
                  <label for="image" class="col-form-label">Image:</label>
                  <input type="text"  v-model="payload.imageUrl" class="form-control" id="image"  placeholder="Product Image url" required>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button class="btn btn-success "  @click="addProduct" data-bs-dismiss="modal"> Add Product </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
    export default {
      data(){
        return{
          payload:{
            prodName:"",
            quantity:null,
            price:null,
            category:"",
            artist:"",
            details:"",
            imageUrl:""
          }
        }
      },
      methods: {
        addProduct(){
          this.$store.dispatch("addProduct",this.payload)
        } 
      },
    };
  </script>
  <style scoped>
  button{
    margin: 0.5rem;
    padding: 0.5rem;
    background:#2c3e50;
    color:white;
    border-radius: 1rem;
    font-family: 'REM', sans-serif;
}
button:hover{
  background: rgb(200,160,4);
  color:#2c3e50
}
  .modal-body {
    display: flex;
    flex-direction: column;
  }
  </style>
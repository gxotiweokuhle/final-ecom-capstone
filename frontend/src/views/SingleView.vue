<template>
    <div v-if="product" class="product-details" :key="product.prodID" id="single">
      <div class="jack">
      <div class="whole hole">
        <div class="cont-fluid animate__animated animate__zoomInLeft">
          <div class="row img1">
            <div class="colu1">
              <div class="view-image">
                <div class="smaller">
                  <img class="small" :src="product.imageUrl" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cont-fluid1 animate__animated animate__zoomInRight">
          <div class="row desc1">
            <div class="col card">
              <div class="card-body">
                <div class="name">
                  <h5>{{ product.prodName }}</h5>
                </div>
                <div class="description">
                  <p class="fw-bold">Made by: {{ product.artist }}</p>
                  <p class="fw-bold">Description: {{ product.details }}</p>
                  <p class="fw-bold">Category: {{ product.category }}</p>

                </div>
                <div class="price">
                  <p class="fw-bold">Price: R {{ product.price }}</p><br>
                  <button class="mb-3 btn fw-bold" @click="addItem(product.prodID, 1)">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from 'sweetalert2'
export default {
  // props: ["id"],
  computed: {
    product() {
      return this.$store.state.product;
      
    },
    id() {
      return this.$route.params.id
    }
  },
  mounted() {
    console.log(this.id);
    this.$store.dispatch("getProduct", this.$route.params.id);
  },
  methods:{
    addItem(prodID, quantity){
      this.$store.dispatch("addItem", {prodID, quantity});
   
      Swal.fire({
        icon: 'success', // Set the icon (success, error, warning, etc.)
        title: 'Item Added to Cart',
        text: 'The item has been successfully added to your cart.',
        confirmButtonText: 'OK',
      });
   
    }
  }
  
};

</script>
<style scoped>
  
  img{
        max-width: 300px;
        margin-top: 15px;
    }
    /* #single{
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-content: center;
      flex-wrap: wrap;
    } */
    .btn :hover{
      background-color: black;
    }
    * {
margin: 0;
padding: 0;
box-sizing: border-box;
}
h5, p, button{
font-family: 'REM', sans-serif;
}
/* button:hover{
background: rgb(200,160,4);
padding: 1rem;
color:#2c3e50
} */
button{
  padding: 0.5rem;
}
.cont-fluid {
width: 50%;
display: flex;
justify-content: center;
align-items: center;
max-height: 100%;
}
.cont-fluid1 {
width: 50%;
display: flex;
justify-content: center;
align-items: center;
float: right;
/* margin-bottom: 3rem; */
}
.whole {
display: flex;
justify-content: center;
/* align-items: center; */
}
.view-image img {
height: 30rem;
/* margin-left: 8rem; */
/* max-width: 40rem; */
max-height: 30rem;
border-radius: 29% 71% 23% 77% / 77% 19% 81% 23%;
border: 2px solid black;
}

.rig {
float: right;
}
.desc1 {
/* height: 30rem; */
max-height: 100%;
}
.name {
display: flex;
justify-content: center;
align-items: center;
margin-top: 1rem;
margin-bottom: 2rem;
border-bottom: 2px solid rgb(200, 160,4);
}
.name h5 {
font-size: 25px;
}
/* .img1 {
display: flex;
justify-content: center;
align-items: center;
border: 3px solid black;
} */

@media screen and (max-width: 768px) {
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.jack {
  display: flex;
  justify-content: center;
  align-content: center;
}
.hole {
  display: inline-block;
  justify-content: center;
  align-content: center;
}
.view-image img {
  width: 14rem;
  height: 18rem;
  border-radius: 5px;
  border: 2px solid black;
}
.cont-fluid {
  width: 150px;
  height: 300px;
  max-height: 100%;
}
.cont-fluid1 {
  width: 150px;
  height: 300px;
  max-height: 100%;
}
.sing {
  display: block;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  max-height: 100%;
}
.card {
  width: 22rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.heading {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
}
.heading h1 {
  font-size: 20px;
  text-align: center;
}

.desc1 {
  margin-bottom: 3rem;
}
/* edit img on single view border */
.smaller img {
  width: 22rem;
  height: 18rem;
  border-radius: 5px;
  border: 2px solid black;
}
}
@media screen and (max-width: 650px) {
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.jack {
  display: flex;
  justify-content: center;
  align-content: center;
}
.hole {
  display: inline-block;
  justify-content: center;
  align-content: center;
}
.view-image img {
  width: 14rem;
  height: 18rem;
  border-radius: 5px;
  border: 2px solid black;
}
.cont-fluid {
  width: 150px;
  height: 300px;
  max-height: 100%;
}
.cont-fluid1 {
  width: 150px;
  height: 300px;
  max-height: 100%;
}
.sing {
  display: block;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  max-height: 100%;
}
.card {
  width: 14rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.heading {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
}
.heading h1 {
  font-size: 20px;
  text-align: center;
}
.btn{
  /* width: 100px; */
  background: rgb(200,160,4);
box-shadow: 0 0 25px rgb(200,160,4);
}

.desc1 {
  margin-bottom: 3rem;
}
}
</style>
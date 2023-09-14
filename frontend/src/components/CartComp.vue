<template>
    <div class="cart-table">
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.cartID">
            <td><img :src="item.imageUrl" class="rounded-circle" ></td>
            <td>{{ item.prodName }}</td>
            <td>{{ item.price }}</td>
            <td>
              <input type="number" v-model="item.quantity" min="1" @input="updateTotal()" />
            </td>
            <td>R {{ item.quantity * item.price }}</td>
            <td></td>
            <td>
              <button  v-if="item.cartID"  @click="removeItem(item.cartID)">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="cart-summary">
        <p>Total: {{ cartTotal }}</p>
      </div>
      <div>
        <button><a href="/orders">Proceed to Checkout</a></button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props:["cart"],
    computed: {
        items() {
            return this.$store.state.items;
            },
        // userData() {
        // return this.$store.state.userData; // Assuming you have a state named userData
        cartTotal() {
          return this.items.reduce((total, item) => {
        return total + item.quantity * item.price;
      }, 0);
    }, 
    },
    mounted() {
        this.$store.dispatch("getItems");
    },
    methods: {

      addToCart() {
      // Call the setToCart mutation with the desired prodID and quantity
      this.$store.commit('setToCart', { prodID: '123', quantity: 3 });
    },
   
      removeItem(cartID){
        this.$store.dispatch("removeItem", cartID);
        console.log(cartID);
      }
      // updateQuantity(item){
      //   this.$store.dispatch('updateQuantity', {
      //     cartID: item.cartID,
      //     prodID: item.prodID,
      //     quantity: item.quantity,
      //   })
      // }
  }
}
  </script>
  
  <style scoped>
  img{
    max-width: 50px;
  }
  .cart-table {
    max-width: 100%;
    overflow-x: auto;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  .cart-summary {
    margin-top: 20px;
    text-align: right;
  }
  </style>
  
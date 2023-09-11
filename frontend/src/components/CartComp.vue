<template>
    <div class="cart-table ">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.cartID">
            <td>{{ item.prodName }}</td>
            <td>{{ item.price }}</td>
            <td>
              <input type="number" v-model="item.quantity" min="1" @input="updateTotal(item)" />
            </td>
            <td>R {{ item.quantity * item.price }}</td>
            <td></td>
            <td>
              <button @click="removeItem(item.cartID)">Remove</button>
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
   
    computed: {
        items() {
            return this.$store.state.items;
            },
        // userData() {
        // return this.$store.state.userData; // Assuming you have a state named userData
          
    },
    mounted() {
        this.$store.dispatch("addItem");
    },
    methods: {

    //     addItem(prodID) {
    //   // Ensure the user is logged in
    //   if (this.userData && this.userData.userID) {
    //     // Call the addToCart action with userID and prodID
    //     this.$store.dispatch('addItem', {
    //       userID: this.userData.userID,
    //       prodID,
    //     });
    //   } else {
    //     // Handle the case where the user is not logged in, prompt for login, etc.
    //   }
    // },
  }
}
  </script>
  
  <style scoped>
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
  
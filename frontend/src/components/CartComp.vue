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
          <tr v-for="item in items" :key="item.prodID">
            <td>{{ item.prodName }}</td>
            <td>{{ item.price }}</td>
            <td>
              <input type="number" v-model="item.quantity" min="1" @input="updateTotal()" />
            </td>
            <td>{{ item.quantity * item.price }}</td>
            <td>
              <button @click="removeItem(index)">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="cart-summary">
        <p>Total: {{ cartTotal }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cartItems: [
          { name: "Product 1", price: 10, quantity: 2 },
          { name: "Product 2", price: 15, quantity: 1 },
          // Add more items as needed
        ],
      };
    },
    computed: {
      cartTotal() {
        return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    },
    methods: {
      removeItem(index) {
        this.cartItems.splice(index, 1);
        this.updateTotal();
      },
      updateTotal() {
        // Recalculate cart total when quantity changes
        // You can also add any other logic here, e.g., updating a server-side cart
      },
    },
  };
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
  
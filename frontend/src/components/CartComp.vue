<template>
    <div class="cart-table bg-light mt-4">
      <table>
        <thead>
          <tr>
            <th class="fs-4 text-black">Image</th>
            <th class="fs-4 text-black">Product</th>
            <th class="fs-4 text-black">Price</th>
            <!-- <th>Quantity</th> -->
            <!-- <th>Total</th> -->
            <th class="fs-4 text-black">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.cartID">
            <td><img :src="item.imageUrl" class="rounded-circle" ></td>
            <td class="fs-5 fw-bold text-black">{{ item.prodName }}</td>
            <td class="fw-bold text-black">{{ item.price }}</td>
            <!-- <td>
              <input type="number" v-model="item.quantity" min="1" @input="updateTotal()" />
            </td> -->
            <!-- <td>R {{ item.quantity * item.price }}</td> -->
         
            <td>
              <button  v-if="item.cartID"  @click="removeItem(item.cartID)" class="mb-3 btn fw-bold text-white">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- <div class="cart-summary">
        <p>Total: {{ cartTotal }}</p>
      </div> -->
      <div class="mb-3 mt-2">
        <button><a href="/orders" class="text-black fw-bold fs-6 pro">Proceed to Checkout</a></button>
      </div>
    </div>
  </template>
  
  <script>
  import Swal from 'sweetalert2'
  export default {
    props:["cart"],
    computed: {
        items() {
            return this.$store.state.items;
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
        console.log("Deleting:", cartID);

        Swal.fire({
        title: 'Remove Item',
        text: 'Are you sure you want to remove this item from your cart?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, remove it',
        cancelButtonText: 'No, keep it',
      }).then((result) => {
        if (result.isConfirmed) {
          // If the user confirms, remove the item from the cart
          this.$store.dispatch("removeItem", cartID);
          console.log("Deleted:", cartID);

          // Show a success message
          Swal.fire('Item Removed', 'The item has been removed from your cart.', 'success');
          window.location.reload();
        }
      });

      }
      // updateQuantity(item){
      //   this.$store.dispatch('updateQuantity', {
      //     cartID: item.cartID,
      //     prodID: item.prodID,
      //     quantity: item.quantity,
      //   })
      // }
  }
};
  </script>
  
  <style scoped>
  img{
    max-width: 50px;
  }
  .cart-table {
    max-width: 100%;
    overflow-x: auto;
  }
  a{
    text-decoration: none;
    color: black;
    font-family: 'REM', sans-serif;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    font-family: 'REM', sans-serif;
  }
  
  th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  .btn{
 
  background: rgb(200, 4, 4);

}

button{
 
  background: rgb(18, 235, 36);
}
  </style>
  
<template>
  <div class="container">
    
    <div class="mainscreen">
   
      <div class="">
        <p class="fs-5 fw-bold text-black">Your Orders:</p>
        <table class="bg-light">
          <thead>
            <tr>
              <th class="fs-5 fw-bold text-black">Products</th>
              <th class="fs-5 fw-bold text-black">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.cartID">
              <td class="fs-5 fw-bold text-black">{{ item.prodName }}</td>
              <td class="fs-5 fw-bold text-black">{{ item.price }}</td>
            </tr>
          </tbody>
        </table>
        <!-- <div class="cart-summary">
        <p>Total: </p>
      </div> -->


        <div class="rightside mt-5">

          <form action="" @submit="submitPayment">
            <h2 class="fs-5 fw-bold text-black">Billing Address:</h2>
              <div class="form mb-2">
                <input class="inputbox" placeholder="Type your address" required="" type="text">
                <span class="input-border"></span>
             </div>
            
            <h2 class="fs-5 fw-bold text-black">Payment Information:</h2>
          
            <p class="fs-5 fw-bold text-black mt-5">Cardholder Name</p>
            <input type="text" class="inputbox" name="name" placeholder="card owner" required />
            <p class="fs-5 fw-bold text-black">Card Number</p>
            <input type="number" class="inputbox" name="card_number" id="card_number" placeholder="type your card number"    required />

            <p class="fs-5 fw-bold text-black">Card Type</p>
            <select class="inputbox" name="card_type" id="card_type" required>
              <option value="" class=" fw-bold text-black">--Select a Card Type--</option>
              <option value="Visa" class=" fw-bold text-black" >Visa</option>
              <option value="RuPay" class=" fw-bold text-black">RuPay</option>
              <option value="MasterCard" class=" fw-bold text-black">MasterCard</option>
            </select>
          <div class="expcvv">

            <p class="expcvv_text fw-bold text-black">Expiry</p>
            <input type="date" class="inputbox semi-bold text-black" name="exp_date" id="exp_date" required />

            <p class="expcvv_text2 fw-bold text-black">CVV</p>
            <input type="password" class="inputbox" name="cvv" id="cvv" required />
          </div>
            
            <button type="submit" class="button">Pay</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from 'sweetalert2'
import router from '@/router';
  export default{
    computed:{
      items() {
            return this.$store.state.items;
            },
    },

    mounted() {
      this.$store.dispatch("getItems");
    },

    methods: {
  submitPayment(event) {
    event.preventDefault();

    const paymentSuccessful = true; 

    if (paymentSuccessful) {
     
      Swal.fire({
        icon: 'success',
        title: 'Payment Successful',
        text: 'Thank you for your payment!',
      }).then(() => {
        // Redirect to the products page
        router.push('/products'); 
      });
    } else {
   
      Swal.fire({
        icon: 'error',
        title: 'Payment Failed',
        text: 'Sorry, there was an issue processing your payment. Please try again.',
      });
    }
  },
},


  };

</script>
<style scoped>
  body {
   
	margin:0;
	padding:0;
	box-sizing: border-box;
}
img{
    max-width: 50px;
  }
  
  table, p , h2{
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



.rightside {
    background-color: #ffffff;
	width: 35rem;
	border-bottom-right-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
    padding: 1rem 2rem 3rem 3rem;
}

p{
    display:block;
    font-size: 1.1rem;
    font-weight: 400;
    margin: .8rem 0;
}

.inputbox
{
    color:#030303;
	  width: 70%;
    padding: 0.5rem;
    border: none;
    border-bottom: 1.5px solid #ccc;
    margin-bottom: 1rem;
    border-radius: 0.3rem;
    font-family: 'Roboto', sans-serif;
    color: #615a5a;
    font-size: 1.1rem;
    font-weight: 500;
  outline:none;
}

.expcvv {
    display:flex;
    justify-content: space-between;
    padding-top: 0.6rem;
}

.expcvv_text{
    padding-right: 1rem;
}
.expcvv_text2{
    padding:0 1rem;
}

.button{

    padding: 12px;
    border: none;
    border-radius: 50px;
    background: rgb(200, 160, 4);
    font-weight: 200;
    font-size: 1.2rem;
    margin-top: 10px;
    width:60%;
    letter-spacing: .11rem;
    outline:none;
}

.button:hover
{
	transform: scale(1.05) translateY(-3px);
    box-shadow: 3px 3px 6px #38373785;
}

@media only screen and (max-width: 1000px) {
    .card{
        flex-direction: column;
        width: auto;
      
    }

   

    .rightside{
        width:auto;
        border-bottom-left-radius: 1.5rem;
        padding:0.5rem 3rem 3rem 2rem;
      border-radius:0;
    }
}

</style>
<template>
  <div class="container">
    
    <div class="mainscreen">
   
      <div class="">
        <p>Your Orders:</p>
        <table>
          <thead>
            <tr>
              <th>Products</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.cartID">
              <td>{{ item.prodName }}</td>
              <td>{{ item.price }}</td>
            </tr>
          </tbody>
        </table>
        <div class="cart-summary">
        <p>Total: </p>
      </div>


        <div class="rightside">

          <form action="">
            <h2>Billing Address:</h2>
            <p></p>
            <h2>Payment Information</h2>
            <p>Cardholder Name</p>
            <input type="text" class="inputbox" name="name" required />
            <p>Card Number</p>
            <input type="number" class="inputbox" name="card_number" id="card_number" required />

            <p>Card Type</p>
            <select class="inputbox" name="card_type" id="card_type" required>
              <option value="">--Select a Card Type--</option>
              <option value="Visa">Visa</option>
              <option value="RuPay">RuPay</option>
              <option value="MasterCard">MasterCard</option>
            </select>
          <div class="expcvv">

            <p class="expcvv_text">Expiry</p>
            <input type="date" class="inputbox" name="exp_date" id="exp_date" required />

            <p class="expcvv_text2">CVV</p>
            <input type="password" class="inputbox" name="cvv" id="cvv" required />
          </div>
            <p></p>
            <button type="submit" class="button">Pay</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    computed:{


      mounted() {
        this.$store.dispatch("getItems");
    },
    }
  }

</script>
<style scoped>
  body {
    /* font-family: 'Roboto', sans-serif!important; */
	margin:0;
	padding:0;
	box-sizing: border-box;
}
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
/* .mainscreen
{
	min-height: 100vh;
	width: 100%;
	display: flex;
    flex-direction: column;
   
  
    color:#963E7B;
} */


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
	width: 100%;
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
    background: linear-gradient(
135deg
, #753370 0%, #298096 100%);
    padding: 15px;
    border: none;
    border-radius: 50px;
    color: white;
    font-weight: 400;
    font-size: 1.2rem;
    margin-top: 10px;
    width:100%;
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
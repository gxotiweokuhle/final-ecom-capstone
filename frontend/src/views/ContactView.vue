<template>
  <section class="info">
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d105751.33827428608!2d18.346393321858468!3d-34.076452401007636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x1dcc41e2b6cade59%3A0x7d001e7f80e9aeb1!2s4%20Steenberg%20Rd%2C%20Tokai%2C%20Cape%20Town%2C%207945!3m2!1d-34.076479899999995!2d18.4287945!5e0!3m2!1sen!2sza!4v1693571822757!5m2!1sen!2sza" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      <div class="contact-sec">
        <!-- contact section -->

        <div class="row mt-3 text-white">
          
            <div class="col-md-12">
                <section class="registration">
                    <div class="col-md-12">
                        <p class="p-2 text-black fw-semibold fs-4">Vist our Gallery in partnership with Norval Foundation
                            as seen from the Map above. <br>
                            We host our Art auctions, workshops and other network events at the pinned location. <br>
                            If you want to join us in upcoming events or to venture into Business with us 
                            leave your details below and you will be contacted.
                        </p>
                    </div>

                    <form class="form" action="https://formspree.io/f/mvojaave" method="POST">
                        <p class="title">Leave your Details</p>
                        <div class="flex">
                            <label>
                                <input placeholder="" type="text" class="input">
                                <span>Firstname:</span>
                            </label>
                            <label>
                                <input placeholder="" type="text" class="input">
                                <span>Lastname:</span>
                            </label>
                        </div>
                        <label>
                            <input placeholder="" type="email" class="input fw-semibold">
                            <span>Email:</span>
                        </label>
                        <label class="text-black fw-semibold">
                            <span>Message:</span>
                            <textarea name="message" class="input"></textarea>
                        </label>
                        <button class="submit">Submit</button>
                    </form>
                </section>
            </div>
        </div>
      </div>
      <div class="mt-5">
        <Footer/>
      </div>
  </section>
</template>
<script>
import Footer from '../components/Footer.vue'

    export default{
        components:{
          Footer
        }
    }
</script>
<style scoped>
.info{
    background: rgb(200, 160, 4);
}
    p{
        font-family: 'REM', sans-serif; 
    }
    iframe {
        width: 100%;
        height: 400px;
    }
    .registration{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        /* min-height: 100vh; */
      /* background-color:#eaeaea; */
      }
      .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    gap: 10px;
    max-width: 350px;
    background-color: black;
    padding: 20px;
    border-radius: 20px;
    position: relative;
   
  }
  button:hover{
  background:#2c3e50  ;
  padding: 1rem;
  color:rgb(200,160,4);
}
  .title {
    font-size: 28px;
    color: white;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }
  
  .title::before,.title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background: rgb(200,160,4);
  }
  
  .title::before {
    width: 18px;
    height: 18px;
    background-color: black;
  }
  
  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }
  
  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }
  
  .form label {
    position: relative;
  }
  
  .form label .input {
    width: 100%;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
  }
  
  .form label .input + span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: grey;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }
  
  .form label .input:placeholder-shown + span {
    top: 15px;
    font-size: 0.9em;
  }
  
  .form label .input:focus + span,.form label .input:valid + span {
    top: 30px;
    font-size: 0.7em;
    font-weight: 600;
  }
  
  .form label .input:valid + span {
    color:black;
  }
  
  .submit {
    border: none;
    outline: none;
    background: rgb(200,160,4);
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: .3s ease;
  }
  
  .submit:hover {
    background-color: black;
  }
  
  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }
  
    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }
</style>
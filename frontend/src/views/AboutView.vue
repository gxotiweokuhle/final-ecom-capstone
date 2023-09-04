<template>
  <div class="about">

    <div class="bio p-2">
        <h2 class="display-5 text-black fw-bold">About Us</h2>
        <p class="fw-bold text-black fs-4"><span>ArtStudio</span> was founded in 2023 in partnership with Top South African Artists to sell artwork and empower upcoming fellow artists to bring forth their Talent into Business.</p>
        <h2 class="fw-bold fs-4 text-black">Our purpose</h2>
        <p class="fs-4 fw-bold text-black">The main goal is to provide a platform for local Artists who need to sell their craft ranging from different categories such as Sculpture, Painting and Photography with many more others.
          <br> At our organization we offer online services to help manage Artist's Brand in reaching their target audience,
          setup social events to showcase their talent and build network. We believe in strengthening the relationship between artist and customer in providing secure payments, delivery and quality product.
        </p>
    </div>


    <h2 class="display-5 fw-bold text-black" >Meet our Founder:</h2>
    <div class="founders">
        
        <div class="text-center">
            <img src="https://i.postimg.cc/zv1g1RvS/C12-Okuhle-Gwotiwe-1.jpg" class="img-thumbnail rounded-circle mt-5" >
            <p class="name mx-5 fs-5 mt-1 fw-bold text-black">CEO of <span>ArtStudio</span> | Fullstack Dev <br>
            Okuhle Gxotiwe</p>
            
        </div>
    
    </div>
    <div class="mt-5">
      <Footer/>
    </div>
  </div>
</template>
<script>
import Footer from '../components/Footer.vue'


export default{
    components:{Footer}
}

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
  span{
    font-family: 'Pacifico', cursive;
  }
  h2,p{
    font-family: 'REM', sans-serif; 
  }
  .founders{
        font-family: 'REM', sans-serif;
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: center;
    }
    img{
        max-width: 150px;
    }
</style>
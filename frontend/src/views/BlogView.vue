<template>
    <div class="blog">
        <!-- cinga's blog -->
        <section id="cinga" class="text-center">
           
            <div>
                <h2 class="text-black fw-bold animate__animated animate__fadeInTopLeft">An Artist Who doesn't want to feed Western Fantasies about Africa</h2>
                <img src="https://i.postimg.cc/LXxxjhn4/Cinga-Samson-Portrait-croppedjpg.jpg" class="img-thumbnail rounded-circle animate__animated animate__bounceInRight">
                <p class="fw-bold text-black">Cinga Samson</p>
            </div>
        </section>
        <!-- bio info -->
        <div class="text mb-4">
            <div>
                <p class="fw-bold text-black p-2 fs-4 animate__animated animate__fadeInUp">
                    Born in 1986 and raised in townships and villages in the Mthatha area of the Eastern Cape, a region of rolling hills and wide vistas, Samson identified a connection with art early on. “I realized I could draw Snoop Dogg, Tupac and Mandela better than my friends,” he recalls. In his early 20s, he joined Isibane, a collective of artists in Cape Town from whom he gleaned support, resources and what he describes as “a manual for being an artist.” Working for nearly four years at the group’s studio, under the guidance of older painters, he forged a vision of his own, as well as an unwavering devotion to the task of making art itself.
                </p>
            </div>
            <div class="stud">
                <img src="https://i.ibb.co/72n17b9/cinga-pose.jpg" class="animate__animated animate__fadeInDown">
            </div>

        </div>
        <!-- mary sibande -->
      <section>
        <div>
            <h2 class="text-black fw-bold">A Sculptor who creates living memories and outstanding Artistry</h2>
            <img src="https://i.ibb.co/HCP1djv/Zanele-Muholi-Photo-of-the-artist-Image-via-eye-500.jpg" class="img-thumbnail rounded-circle">
            <p class="fw-bold text-black">Mary Sibande</p>
        </div>
      </section>
      <!-- mary bio -->
      <div class="mb-4">
        <div>
            <p class="text-black fw-bold p-2 fs-4">Mary Sibande is a South African sculptor, painter, and installation artist whose work interrogates the intersections of race, gender, and labor in South Africa, while actively rewriting her own family’s legacy of forced domestic work under the Apartheid state.
            Sibande employs the human form as a vehicle for her focused critiques of stereotypical depictions of Black women in South Africa. Understanding the body as a site where history is contested and where an artist’s fantasies can play out, Sibande constructs counter-historical narratives in which her alter-ego, a persona by the name of Sophie, is the central protagonist.</p>
        </div>
        <div class="stud">
            <img src="https://i.ibb.co/6HxT2nP/mary-pose.jpg" class="">
        </div>
      </div>
      <!-- sanele -->
      <section>
        <h2 class="text-black fw-bold"> A self-taught filmmaker and photographer hailing from Soweto, South Africa. With a keen eye for merging tradition and modernity.</h2>
        <img src="https://i.ibb.co/jyGQDMK/Untitled-Project.jpg" class="img-thumbnail rounded-circle">
      </section>
      <div>
        <!-- sanele bio -->
        <div>
            <p class="text-black fw-bold p-2 fs-4">Sanele started his journey originally as a photographer but was introduced to graphic design a couple years back. At first he just decided to use the these skills in order to touch up his photography but as clients request became more radical he begun to completely transform his photos into a hybrid of photography and an abomina…. nah I’m kidding, he transformed his photo’s into works that would not feel out of place in a art museum. His work has collection of African elements as a center piece with surreal elements to create something unique. Building on what sees in his day to day life in a African community and being proud to be considered a African artist, believing that being African means being bold and naturally expressing yourself and your culture through artworks, molding or chanting, expressing your individuality but being accepted into a group which makes us more united.</p>
        </div>
        <div class="stud">
            <img src="https://i.ibb.co/f8pmQRW/s-pose.jpg" alt="">
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
  /* .founders{
        font-family: 'REM', sans-serif;
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: center;
    } */
    .blog{
      background: rgb(200, 160, 4);
    }
    img{
        max-width: 200px;
    }
    .stud{
      background-image: url(https://i.postimg.cc/YSKFy7J6/african-tribal-black-and-white-abstract-ethnic-geometric-pattern-design-for-background-or-wallpaper.jpg);
      background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
    }
</style>
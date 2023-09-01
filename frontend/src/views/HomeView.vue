<template>
  <div class="container-fluid p-0 home">
       <!--hero-->
       <section class=" overflow-x-hidden hero m-0 align-content-sm-start">
              <div class="hero-inner text-center">
                    <a href="/products" class="btn mb-2 text-white">Shop Now!</a>
              </div>
            </section>

  <!----featured info-->
              <section id="featured" class="mt-3">
              <div>
                <h2 class="text-black fw-bold">Featured Categories</h2>
                <p class="text-black fw-bold">We offer our Art Collection in different categories of craftmanship.</p>
              </div>
            </section>

    <!--categories--->
          
               
    <div class="container mb-4 categories">

        <div class="row">
        
          <div class="column">
            <div class="card">
              <div class="content">
                <div class="front">
                  <img class="profile" width="100%" src="https://i.postimg.cc/85sNDgSc/artstudio-bg-667.jpg">
                  <h2 class="mt-4 text-white fw-bold">Painting</h2>
                </div>
                <div class="back from-left">  
                  <p class="des fw-semibold p-2 mt-4">
                      View our painting collection made by our top South African Artist and shop quality art.
                  </p>
                  <button class="shadow__btn">
                    <a href="/products" >Shop Now!</a>
                  </button>
                </div>
              </div>
          </div>
        </div>


          <div class="column">
            <div class="card">
              <div class="content">
                <div class="front">
                  <img class="profile" width="100%" src="https://i.postimg.cc/tCRQHHNj/scul-p.jpg">
                  <h2 class="mt-4 text-white fw-bold">Sculpting</h2>
                </div>
                <div class="back from-bottom">
                  <p class="des fw-semibold p-2 mt-4">
                    View our sculpting collection made by our top South African Artist and shop quality statues.
                  </p>
                  <button class="shadow__btn">
                    <a href="/products" >Shop Now!</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
  
  
        <div class="column">
          <div class="card">
            <div class="content">
              <div class="front">
                <img class="profile" width="100%" src="https://i.postimg.cc/TwrJc9Qc/man-on-horse-cropped-66667pg.jpg" >
                <h2 class="mt-4 text-white fw-bold">Photography</h2>
              </div>
              <div class="back from-right">
                <p class="des fw-semibold p-2 mt-4">
                  View our photography collection made by our top South African and shop quality artwork.
                </p>
                <button class="shadow__btn">
                  <a href="/products">Shop Now!</a>
                  </button>
              </div>
            </div>
          </div>
        </div>

       </div>
    </div>


    <!-- featured info -->
    <section id="featured" class="mt-3">
              <div>
                <h2 class="text-black fw-bold">Featured Artists</h2>
                <p class="text-black fw-bold">Get to know more about our fellow Artists and what inspired them.</p>
              </div>
            </section>

            <div class="container mb-4 artists">

    <!-- featured artists -->
<div class="row">

  <div class="column">
    <div class="card">
      <div class="content">
        <div class="front">
          <img class="profile" width="100%" src="https://i.postimg.cc/LXxxjhn4/Cinga-Samson-Portrait-croppedjpg.jpg">
          <h2 class="mt-4 text-white fw-bold">Cinga Samson</h2>
        </div>
        <div class="back from-left">  
          <p class="des fw-semibold p-2 mt-4">
          Get to know what inspired him to push boundaries with his craft.
          </p>
          <button class="btn_read">
            <a href="/blog" >Read Article</a>
          </button>
        </div>
      </div>
  </div>
</div>


  <div class="column">
    <div class="card">
      <div class="content">
        <div class="front">
          <img class="profile" width="100%" src="https://i.postimg.cc/Pxg3KJmm/Zanele-Muholi-Photo-of-the-artist-Image-via-eye-500.jpg">
          <h2 class="mt-4 text-white fw-bold">Mary Sibande</h2>
        </div>
        <div class="back from-bottom">
          <p class="des fw-semibold p-2 mt-4">
            Get to know the mind behind the outstanding creativity and hardwork.
          </p>
          <button class="btn_read">
            <a href="/blog" >Read Article</a>
          </button>
        </div>
      </div>
    </div>
  </div>


<div class="column">
  <div class="card">
    <div class="content">
      <div class="front">
        <img class="profile" width="100%" src="https://i.postimg.cc/HLH70gcV/Untitled-Project.jpg" >
        <h2 class="mt-4 text-white fw-bold">Sanele Matsolo</h2>
      </div>
      <div class="back from-right">
        <p class="des fw-semibold p-2 mt-4">
          Get to know the mind behind capturing and story of photography art.
        </p>
        <button class="btn_read">
          <a href="/blog">Read Article</a>
          </button>
      </div>
    </div>
  </div>
</div>

</div>
</div>

<!-- footer -->
  <div class="mt-5" id="footer">
    <Footer/>
  </div>

  </div>
</template>

<script>
import Footer from '../components/Footer.vue'


export default {
  components:{
    Footer
  }
}
</script>
<style scoped>
.home{
  background: rgb(200, 160, 4);
}
.footer{
  margin-top: 40%;
}
      .hero {
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-image: url(https://i.postimg.cc/SRh2Df3m/mybg.png);
background-size: cover;
background-position: center center;
background-repeat: no-repeat;
background-attachment: fixed;
font-weight: 600;
font-size: 50px;
font-family: 'REM', sans-serif;


}
.hero{
  width: auto;
}
.container{
  
  background-image: url(https://i.postimg.cc/YSKFy7J6/african-tribal-black-and-white-abstract-ethnic-geometric-pattern-design-for-background-or-wallpaper.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.hero-inner{
font-size: 25px;
color: black;
}
* {
  box-sizing: border-box;
}
a{
  text-decoration: none;
  color: black;
}
h2, p {
 font-family: 'REM', sans-serif; 
  
}
.container{
  width:900px;
  margin:0px auto;
  font-size: 50px;

}
/* Float three columns side by side */
.column {
  float: left;
  width: 33.33%;
  padding: 0 10px;
}

/* Remove extra left and right margins, due to padding */
.row {margin: 0 -5px;}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive columns */
@media screen and (max-width: 700px) {
  
 .container{
  width: 100%;
 
}
  
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 5px;
  text-align: center;
  background-color: black;
  border-radius:10px;
  cursor:pointer;
  height: 400px;
  text-align: center;
}
.card .profile{
   border-radius:10px;
   transition: 0.2s;
   max-width: 400px;
}
.card:hover .profile{
  transform:scale(1.4);
  border-top-right-radius:50px;
  border-top-left-radius:50px;
}

.card .content{
  width:100%;
  height:100%;
  position:relative;
  overflow:hidden;
}
.card .content .back{
  position:absolute;
  width:100%;
  height:100%;
  background-color: #f1f1f1e6;
  transition:1s;
  
  z-index:1;
  padding:10px;
}

.from-left{
  top:0;
  left:-100%;
}
.card:hover .content .from-left {
   left:0%;
}

.from-bottom{
  top:100%;
  left:0;
}
.card:hover .content .from-bottom {
   top:0%;
}

.from-right{
  top:0%;
  right:-100%;
}
.card:hover .content .from-right {
   right:0;
}

.card .content .back h3{
  font-size:15px;
  letter-spacing:2px;
}
.card .content .back .tem-img{
  border-radius:100%;
}

.card .content .back .des{
  font-size:13px;
  padding:20px 0px;
}
.card .content .back{
  list-style:none;
  margin:0px;
  padding:0px;
}
.card .content .back  li{
  display:inline-block;
}

.card .content .back  li a{
  display:block;
  background:#333;
  color:#fff;
  width:40px;
  height:40px;
  text-align:center;
  line-height:40px;
  border-radius:100%;
}

.shadow__btn {
  padding: 10px 20px;
  border: none;
  font-size: 17px;
  color: #fff;
  border-radius: 7px;
  letter-spacing: 4px;
  font-weight: 700;
  text-transform: uppercase;
  transition: 0.5s;
  transition-property: box-shadow;
}
button:hover{
  background: rgb(200,160,4);
  color:white
}
.shadow__btn {
  background: white

 
}
.btn{
  background: black;
  padding: 10px 20px;
  border: none;
  font-size: 17px;
  color: #fff;
  border-radius: 7px;
  letter-spacing: 4px;
  font-weight: 700;
}
.btn_read{
  background-color:  #837c67;;
  padding: 10px 20px;
  border: none;
  font-size: 17px;
  color: #fff;
  border-radius: 7px;
  /* letter-spacing: 4px; */
  font-weight: 700;
 
}
.shadow__btn:hover {
  box-shadow: 0 0 5px rgb(0,140,255),
              0 0 25px rgb(200, 160, 4),
              0 0 50px rgb(200, 160, 4),
              0 0 100px rgb(200,160,4);
}

</style>
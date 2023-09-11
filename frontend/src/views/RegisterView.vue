<template>
  <section class="reg">

    <div class="container mt-5 p-2">
        <form class="form bg-black" @submit.prevent="registerUser">
                    <p class="title">Register </p>
                    <p class="message text-white fs-4">Signup now and get full access to our app. </p>
                    <div class="flex">
                        <label>
                            <input required="" placeholder="" type="text" class="input" v-model="firstName">
                            <span>Firstname</span>
                        </label>

                        <label>
                            <input required="" placeholder="" type="text" class="input" v-model="lastName">
                            <span>Lastname</span>
                        </label>
                    </div>  
                    <label>
                            <input required="" placeholder="" type="text" class="input" v-model="gender">
                            <span>Gender</span>
                        </label>
                        <label>
                            <input required="" placeholder="" type="text" class="input" v-model="userDOB">
                            <span>Date of Birth</span>
                        </label>
                        <label>
                            <input required="" placeholder="" type="text" class="input" v-model="profileUrl">
                            <span>ProfileUrl</span>
                        </label>
                   
                    <label>
                        <input required="" placeholder="" type="email" class="input" v-model="emailAdd">
                        <span>Email</span>
                    </label> 
                        
                    <label>
                        <input required="" placeholder="" type="password" class="input" v-model="userPass">
                        <span>Password</span>
                    </label>
                    <label>
                        <input required="" placeholder="" type="text" class="input" v-model="Role">
                        <span>Role</span>
                    </label>
                    <button class="submit fs-4">Submit</button>
                    <p class="signin text-white fs-5">Already have an account ? <a href="/user/login" class="fs-4">Signin</a> </p>
</form>

    </div>
    <div class="mt-5">
      <Footer/>
    </div>
  </section>
</template>
<script>
import router from '../router/index'
import Swal from 'sweetalert2';
import Footer from '../components/Footer.vue';
export default{
     data() {
        return {
            firstName: "",
            lastName: "",
            gender: "",
            userDOB: "",
            Role: "",
            emailAdd: "",
            userPass: "",
            profileUrl: ""
           
          
     
        };
      },
      methods: {
        async registerUser(){
          
            try{
                const respond = await this.$store.dispatch("registerUser", {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    gender: this.gender,
                    emailAdd: this.emailAdd,
                    userDOB:this.userDOB,
                    userPass: this.userPass,
                    Role: this.Role,
                    profileUrl: this.profileUrl,
                });
                
                if(respond && respond.success){
                   await Swal.fire({
                        icon: "success",
                        title: "Registration successful",
                        text: "You are now registered, please log in",
                    })
                    
                    router.push("/user/login");
                    
                } else if (respond && respond.error){
                   await Swal.fire({
                        icon: "error",
                        title: "Registration failed",
                        text: respond.error || "Unexpected error",
                    });
                }
                
            } catch(e){
                console.error("Registration error: ", e);
            }
            
        },
        components:{
    Footer
  }
   
}
};
</script>
<style scoped>
        .form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 350px;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  position: relative;
}
a{
  text-decoration: none;
  
}
.reg{
  background: rgb(200, 160, 4);
}
.container{
    display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */

  font-family: 'REM', sans-serif; 
}
.title {
  font-size: 28px;
  color: rgb(200,160,4);
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

.message, .signin {
  color: rgba(88, 87, 87, 0.822);
  font-size: 14px;
}

.signin {
  text-align: center;
}

.signin a {
  color: royalblue;
}

.signin a:hover {
  text-decoration: underline royalblue;
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
  background-color:black;
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
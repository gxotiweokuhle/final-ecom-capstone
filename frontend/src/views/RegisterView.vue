<template>

    <div class="container mt-5">
        <form class="form bg-black" @submit.prevent="registerUser">
                    <p class="title">Register </p>
                    <p class="message">Signup now and get full access to our app. </p>
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
                    <button class="submit">Submit</button>
                    <p class="signin">Already have an acount ? <a href="/user/login">Signin</a> </p>
</form>
<!-- <p v-if="registrationError" class="error">{{ registrationError }}</p> -->
    </div>
</template>
<script>
import swal from 'sweetalert';
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
            // validation:{
            //     firstName:{
            //         isValid: true,
            //         message:"Please fill out your Name."
            //     },
            //     lastName:{
            //         isValid: true,
            //         message:"Please fill out your Surname."
            //     },
            //     gender:{
            //         isValid: true,
            //         message:"Please fill out your identity."
            //     },
            //     userDOB:{
            //         isValid: true,
            //         message:"Please fill out your Date of Birth."
            //     },
            //     Role:{
            //         isValid: true,
            //         message:"Please fill specify your role to gain access."
            //     },
            //     userPass:{
            //         isValid: true,
            //         message:"Please enter your password."
            //     },
            //     profileUrl:{
            //         isValid: true,
            //         message:"Please enter your url."
            //     }

            // }
          
     
        };
      },
      methods: {
        async registerUser(){
            const isFormValid = this.validateForm();
            if(isFormValid){
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
                    // this.$router.push("/user/login");
                    if(respond && respond.success){
                       await swal.fire({
                            icon: "success",
                            title: "Registration successful",
                            text: "You are now registered, please log in",
                        })
                        // .then(() => {
                        // this.$router.push("/user/login");
                        // });
                        router.push("/user/login");
                        
                    } else {
                       await swal.fire({
                            icon: "error",
                            title: "Registration failed",
                            text: respond.error || "Unexpected error",
                        });
                    }
                    // this.$router.push("/user/login");
                } catch(e){
                    console.error("Registration error: ", e);
                }
                // form validation


            }
            else{
               await swal.fire({
                        icon: "error",
                        title: "Invalid input",
                        text: "Please correct the form errors and try again.",
                });
            }
        },
    validateForm(){
        let isFormValid = true;

        if (!this.firstName) {
        this.validation.firstName.isValid = false;
        this.validation.firstName.message = "Firstname is required";
        isFormValid = false;
      } else {
        this.validation.firstName.isValid = true;
       
      }

      if (!this.lastName) {
        this.validation.lastName.isValid = false;
        this.validation.lastName.message = "Lastname is required";
        isFormValid = false;
      } else {
        this.validation.lastName.isValid = true;
       
      }

      if (!this.gender) {
        this.validation.lastName.isValid = false;
        this.validation.lastName.message = "gender is required";
        isFormValid = false;
      } else {
        this.validation.lastName.isValid = true;
        this.validation.lastName.message = "";
      }


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
.container{
    display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'REM', sans-serif; 
}
.title {
  font-size: 28px;
  color: royalblue;
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
  background-color: royalblue;
}

.title::before {
  width: 18px;
  height: 18px;
  background-color: royalblue;
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
  color: green;
}

.submit {
  border: none;
  outline: none;
  background-color: royalblue;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transform: .3s ease;
}

.submit:hover {
  background-color: rgb(56, 90, 194);
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
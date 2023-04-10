import React, { useState } from "react";
import "./register.css";
import image from "../assets/food_clothing_bank.jpg";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

export const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setCpassword] = useState("");

  // const registerFunc = async () => {
  //   try {
  //     const user = await createUserWithEmailAndPassword(
  //       auth,
  //        email,
  //        password
  //     );
  //     console.log(user)
  //   } catch (error) {
  //     console.log(error.message);
  //   }
    
  // };

  /*const validatePassword = () => {
    let isValid = true
    if (password !== '' && confirmPassword !== ''){
      if (password !== confirmPassword) {
        isValid = false
        alert('Passwords did not match.')
      }
    }
    return isValid
  }
  */
  
  // const handleSubmit = async (fname, lname, email, password, confirmPassword) => {
  //   if(validatePassword()) {
  //     try {
  //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  //       const user = userCredential.user;
  //       await addDoc(collection(db, "users"), {
  //         uid: user.uid,
  //         firstName: user.fname,
  //         lastName: user.lname,
  //         email: user.email,
  //       });
  //       return true;
  //       // catch (error:any) {
  //       //   //     if (error.code === 'auth/email-already-in-use') {
  //       //   //       alert('Email already exists!')
  //       //   //     }
  //     } catch (error) {
  //       return {error: error.message}
        
  //     }

  //   }

  // };

  const handleSubmit = (e) => {

  }

  return (
    <div className="wholePage">
      <section>
        <div className="authorizeForm">
          <div className="leftColumn">
            <h1>Register</h1>
            {/* <p className="mottoPhrase" >no gesture is too small</p> */}
            <form
              id="form"
              className="flex flex-column"
              //onSubmit={registerFunc}
              name="registrationForm"
            >
              <label for="fname">First Name</label>
              <input
                value={fname}
                required
                onChange={(e) => setFname(e.target.value)}
                type="text"
                placeholder="John"
                name="fname"
              />

              <label for="lname"> Last Name</label>
              <input
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                type="text"
                placeholder="Doe"
                name="lname"
              />

              <label for="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="abc123@example.com"
                name="email"
              />

              <label for="password">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="**********"
                name="password"
              />

              <label for="confirmPassword">Confirm Password</label>
              <input
                value={confirmPassword}
                onChange={(e) => setCpassword(e.target.value)}
                type="password"
                placeholder="**********"
                name="confirmPassword"
              />

              <button onClick={handleSubmit} className="btn registerButton" /*type="submit"*/ >
                Register
              </button>
              <div class="signInLink">
                {" "}
                Already have an account? <a href="./Login">Sign in</a>
              </div>
            </form>
          </div>
          <div className="rightColumn">
            <img src={image} alt="People sorting donations" />
          </div>
        </div>
      </section>
    </div>
  );
};

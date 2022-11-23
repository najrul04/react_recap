import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Register.css";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    //  const agree = event.target.terms.checked;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });

    console.log("Updated Profile");
    navigate("/home");
    // createUserWithEmailAndPassword(email, password)
  };

  const navigateLogin = () => {
    navigate("/login");
  };
  if (user) {
    console.log("user", user);
  }
  if (loading || updating) {
    return <Loading></Loading>;
  }
  /*     if(user){
        navigate('/home')
    } */
  return (
    <div className="register-form">
      <PageTitle title="Login" />
      <h2 style={{ textAlign: "center" }}>Please Register</h2>
      <form onSubmit={handleRegister}>
        <input type="tnpm startext" name="name" id="" placeholder="Your Name" />

        <input
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
          required
        />

        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
        />
        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />
        {/* <label className={agree ? 'ps-2 text-primary': 'ps-2 text-danger'} htmlFor="terms"> Accept Terms and Conditions</label> */}
        <label className={`ps-2 ${agree ? "" : "text-danger"}`} htmlFor="terms">
          {" "}
          Accept Terms and Conditions
        </label>
        {/* <input type="submit" value="Register" /> */}
        {/* <button type='submit'>Register</button> */}
        {/* <Button className='register_button' variant="primary w-50 mx-auto d-block mb-2 mt-2" type="submit">
          Register
        </Button> */}
        <input
          disabled={!agree}
          className="w-50 mx-auto btn btn-dark mt-2"
          type="submit"
          value="Register"
        />
      </form>
      <p>
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-primary pe-auto text-decoration-none"
          onClick={navigateLogin}
        >
          Please Login
        </Link>{" "}
      </p>
      <SocialLogin />
    </div>
  );
};

export default Register;

import React from "react";
import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  console.log("Inside Req Auth", user);
  const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (!user.emailVerified) {
    return <div>
        <h3 className="text-danger text-center">Your Email is not Verified!!</h3>
        <h5 className="text-success text-center">Please Verify Your Email address</h5>
        <button
        className="btn btn-primary"
        onClick={async () => {
          const success = await sendEmailVerification();
          if (success) {
            toast('Sent email');
          }
        }}
      >
        Send Verification Email Again
      </button>
      <ToastContainer></ToastContainer>
    </div>;
  }
  return children;
};

export default RequireAuth;

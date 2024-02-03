import React from 'react'
import { Link } from 'react-router-dom';
import SignInmain from '../SIGNIN/SigninMain';

 const Homepage = () => {
  return (
    <div>
      <Link to="/SignInmain" ><p>Sign In</p></Link>
    </div>
  )
};
export default Homepage;

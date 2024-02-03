import React, { useState, useRef } from 'react';


const SignInmain = () => {
  const [beamDegrees, setBeamDegrees] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const passwordInputRef = useRef(null);

  const handleMouseMove = (e) => {
    let rect = document.getElementById("beam").getBoundingClientRect();
    let mouseX = rect.right + rect.width / 2;
    let mouseY = rect.top + rect.height / 2;
    let rad = Math.atan2(mouseX - e.pageX, mouseY - e.pageY);
    let degrees = rad * (180 / Math.PI) * -1 - 350;
    setBeamDegrees(degrees);
  };

  const handleEyeClick = () => {
    setShowPassword(!showPassword);
    if (passwordInputRef.current) {
      passwordInputRef.current.type = showPassword ? "password" : "text";
      passwordInputRef.current.focus();
    }
  };

  return (
    <>
      <h1 style={{ color: "white" }}>Welcome to the Homepage</h1>
      <h2 style={{ color: "white" }}>Sign in to be able to use the features.</h2>
      <div style={{ marginTop: "0px" }}>
        <div className={`App ${showPassword ? 'show-password' : ''}`} onMouseMove={handleMouseMove}>
          <form onSubmit={(e) => e.preventDefault()}>
            <div style={{ textAlign: "center" }} className="homepage-container">
            </div>
            <div style={{ textAlign: "center" }} className="signin-info">
              <div className="form-item">
                <label htmlFor="username">Username</label>
                <div className="input-wrapper">
                  <input type="text" id="username" required name="username" spellCheck="false" data-lpignore="true" />
                </div>
              </div>
              <div className="form-item">
                <label htmlFor="password">Password</label>
                <div className="input-wrapper">
                  <input
                    style={{ color: showPassword ? "black" : "white" }}
                    required
                    type={showPassword ? "text" : "password"}
                    id="password"
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    data-lpignore="true"
                    ref={passwordInputRef}
                  />
                  <button type="button" id="eyeball" onClick={handleEyeClick}>
                    <div className="eye"></div>
                  </button>
                  <div id="beam" style={{ transform: `rotate(${beamDegrees}deg)` }}></div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <p style={{ color: "white" }}>
          Don't have an account? <span style={{ color: "red" }}>Sign in</span>
        </p>
      </div>
    </>
  );
};

export default SignInmain;

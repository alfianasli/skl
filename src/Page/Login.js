import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import Footer from "../Component/Footer";
import { supabase } from "../SupaClient.js";

const Login = () => {
  const [emailclient, setEmailClient] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  async function SignIn(e) {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email: emailclient,
      password: pass,
    });

    if (!error) {
      alert("selamat Datang");
      navigate("/home");
    } else {
      alert("Email dan Password Anda Gagal");
    }
  }

  return (
    <div id="card">
      <div id="card-content">
        <div id="card-title">
          <h2>Login</h2>
        </div>
        <form class="form" onSubmit={SignIn}>
          <label for="user-email">&nbsp;email</label>
          <input
            id="user-email"
            class="form-content"
            type="email"
            name="email"
            autocomplete="on"
            required
            value={emailclient}
            onChange={(e) => setEmailClient(e.target.value)}
          />
          <div class="form-border"></div>
          <label for="user-password">&nbsp;Password</label>
          <input
            id="user-password"
            class="form-content"
            type="password"
            name="password"
            required
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />

          <div class="form-border"></div>
          <input id="submit-btn" type="submit" name="submit" value="Login" />

          <Link to={`/register`} id="signup">
            do you have not account? signUp
          </Link>
        </form>
        <Footer />
      </div>
    </div>
  );
};

export default Login;

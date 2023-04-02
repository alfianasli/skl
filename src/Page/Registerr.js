import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Footer from "../Component/Footer";
import { supabase } from "../SupaClient.js";

const Registerr = () => {
  const [emailclient, setEmailClient] = useState("");
  const [pass, setPass] = useState("");
  const [nama, setNama] = useState("");

  async function SignUp(e) {
    e.preventDefault();
    const { data } = await supabase.auth.signUp({
      email: emailclient,
      password: pass,
      options: {
        data: {
          user_name: nama,
        },
      },
    });
    //
    if (data) {
      alert("anda berhasil terdaftar");
    } else {
      alert("gagal register");
    }
  }

  return (
    <div id="card">
      <div id="card-content">
        <div id="card-title">
          <h2>Register</h2>
          <div class="underline-title"></div>
        </div>
        <form onSubmit={SignUp} class="form">
          <label for="username">&nbsp;Username</label>
          <input
            id="username"
            class="form-content"
            type="username"
            name="username"
            required
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
          <div class="form-border"></div>
          <label for="user-email">&nbsp;Email</label>
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
          <input id="submit-btn" type="submit" name="submit" value="Register" />

          <Link to={`/`} id="signup">
            already have an account? Sign in.
          </Link>
        </form>
        <Footer />
      </div>
    </div>
  );
};

export default Registerr;

<template>
  <div>
    <section class="loginform">
      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-md-2 ">
            <div class="alert alert-primary" role="alert">
              Don't have an account? <a href="/users/register">Click Here</a> to
              register.
            </div>
          </div>

          <div class="col-md-12 text-center">
            <h1>Login</h1>
          </div>

          <div class="col-md-8 offset-md-2 ">
            <div class="form-group">
              <label>Email</label>
              <input type="email" v-model="email" class="form-control" />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" v-model="password" class="form-control" />
            </div>
            <small id="emailHelp" class="form-text text-muted"
              >Forget password? <a href="">Click Here</a> to reset your
              password.</small
            >
            <button @click="login" type="submit" class="btn btn-primary">
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      frontendurl: process.env.frontendurl,
      backendurl: process.env.backendurl,
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapMutations({
      setUser: "auth/setUser",
    }),
    async login() {
      const response = await this.$axios
        .$post(process.env.backendurl + "/api/auth/local", {
          identifier: this.email,
          password: this.password,
        })
        .then((r) => {
          console.log(r);
          this.setUser(r.jwt);
          window.location = process.env.frontendurl;
        })
        .catch((err) => {
          console.log(err);
          alert("Error!");
        });
    },
  },
};
</script>

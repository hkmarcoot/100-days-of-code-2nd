<template>
  <div>
    <section class="loginform">
      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-md-2 ">
            <div class="alert alert-primary" role="alert">
              Already have an account? <a href="/users/signin">Click Here</a> to
              login.
            </div>
          </div>

          <div class="col-md-12 text-center">
            <h1>Register</h1>
          </div>

          <div class="col-md-8 offset-md-2 ">
            <p v-if="loading && !finishsubmit">
              Submitting your information...
            </p>
            <p v-if="finishsubmit">
              Your information have been submitted. Please check your email.
            </p>
            <div v-if="!loading && !finishsubmit">
              <div class="form-group">
                <label>Your Email</label>
                <input type="email" v-model="email" class="form-control" />
              </div>
              <div class="form-group">
                <label>Password</label>
                <input
                  type="password"
                  v-model="password"
                  class="form-control"
                />
              </div>
              <small id="emailHelp" class="form-text text-muted"
                >*You accept our <a href="">terms and conditions</a> once you
                click on the register button.</small
              >
              <button @click="register" type="submit" class="btn btn-primary">
                Register
              </button>
            </div>
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
      loading: false,
      finishsubmit: false,
    };
  },
  methods: {
    ...mapMutations({
      setUser: "auth/setUser",
    }),
    async register() {
      this.loading = true;
      const response = await this.$axios
        .$post(process.env.backendurl + "/api/auth/local/register", {
          username: this.email,
          email: this.email,
          password: this.password,
        })
        .then((r) => {
          console.log(r);
          this.finishsubmit = true;
        })
        .catch((err) => {
          console.log(err);
          alert("Error!");
        });
    },
  },
};
</script>

<template>
  <div>
    <section class="loginform">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1>Reset Password</h1>
          </div>

          <div class="col-md-8 offset-md-2 ">
            <div class="alert alert-primary" role="alert">
              You have verified your email! Please reset password.
            </div>
            <div class="form-group">
              <label>Password</label>
              <input v-model="password" type="password" class="form-control" />
            </div>
            <div class="form-group">
              <label>Password Conformation</label>
              <input
                v-model="passwordConfirmation"
                type="password"
                class="form-control"
              />
            </div>
            <button
              type="submit"
              @click="resetpassword"
              class="btn btn-primary"
            >
              Submit
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
      password: "",
      passwordConfirmation: "",
      loading: false,
      finishsubmit: false,
    };
  },
  methods: {
    ...mapMutations({
      setUser: "auth/setUser",
    }),
    async resetpassword() {
      this.loading = true;
      const response = await this.$axios
        .$post(process.env.backendurl + "/api/auth/reset-password", {
          code: this.$route.query.code,
          password: this.password,
          passwordConfirmation: this.passwordConfirmation,
        })
        .then((r) => {
          console.log(r);
          alert("Your password is reset! Please login again");
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

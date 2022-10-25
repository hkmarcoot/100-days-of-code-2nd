<template>
  <div>
    <section class="loginform">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1>Forget Password</h1>
          </div>

          <div class="col-md-8 offset-md-2 ">
            <div class="alert alert-primary" role="alert">
              Please input your email. We will send you a link to let you
              reconfigure your password.
            </div>
            <div class="form-group">
              <label>Your Email</label>
              <input type="email" v-model="email" class="form-control" />
            </div>

            <button
              @click="forgetpassword"
              type="submit"
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
      email: "",
      loading: false,
      finishsubmit: false,
    };
  },
  methods: {
    ...mapMutations({
      setUser: "auth/setUser",
    }),
    async forgetpassword() {
      this.loading = true;
      const response = await this.$axios
        .$post(process.env.backendurl + "/api/auth/forgot-password", {
          email: this.email,
        })
        .then((r) => {
          console.log(r);
          alert("We have sent you an email to reset your password");
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

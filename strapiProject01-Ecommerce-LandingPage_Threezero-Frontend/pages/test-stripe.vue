<template>
  <div id="app">
    {{ jwt }}
    <div>
      <h1>Please give us your payment details:</h1>
      <card
        class="stripe-card"
        :class="{ complete }"
        stripe="pk_test_51LwdmyA4VzUUN6ljD6oHlsmNIbJTqOVhFiRBubPsB1FvgA3sMBzAnEyL0Wrgu07kzyD3wrbdHLOn4lM8vjPwfkvr00n7gr8joB"
        :options="stripeOptions"
        @change="complete = $event.complete"
      />
      <button
        v-if="!loading"
        class="pay-with-stripe"
        @click="pay"
        :disabled="!complete"
      >
        Pay with credit card
      </button>
      <p v-if="loading">Please wait...</p>
    </div>
  </div>
</template>

<script>
import { Card, createToken } from "vue-stripe-elements-plus";

export default {
  data() {
    return {
      complete: false,
      jwt: this.$store.getters["auth/getuserjwt"],
      stripeOptions: {
        // see https://stripe.com/docs/stripe.js#element-options for details
      },
      loading: false,
    };
  },

  components: { Card },

  methods: {
    async pay() {
      // createToken returns a Promise which resolves in a result object with
      // either a token or an error key.
      // See https://stripe.com/docs/api#tokens for the token object.
      // See https://stripe.com/docs/api#errors for the error object.
      // More general https://stripe.com/docs/stripe.js#stripe-create-token.

      this.loading = true;

      let token;
      await createToken().then((data) => {
        console.log(data.token);
        token = data.token.id;
      });
      if (token) {
        const response = await this.$axios
          .$post(
            process.env.backendurl + "/api" + "/orders",
            {
              data: {
                amount: 4,
                product: "some product",
                address: "hong kong",
                token,
              },
            },
            {
              headers: {
                Authorization: this.$store.getters["auth/getuserjwt"],
              },
            }
          )
          .then((r) => {
            console.log(r);
            alert("paid!");
          })
          .catch((error) => {
            console.log(error);
            alert(
              "Error! Your card cannot be charged! Please try again with a correct card info!"
            );
          });
      }
    },
  },
};
</script>

<style>
.stripe-card {
  width: 300px;
  border: 1px solid grey;
}
.stripe-card.complete {
  border-color: green;
}
</style>

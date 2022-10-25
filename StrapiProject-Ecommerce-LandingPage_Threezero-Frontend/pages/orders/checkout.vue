<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in items" :key="idx">
          <td>{{ item.title }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.quantity }}</td>
        </tr>
      </tbody>
    </table>

    <p>Total: GBP{{ price }}</p>

    <h1>Please give us your payment details:</h1>
    Address: <input type="text" v-model="address" /><br />

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
</template>

<script>
import { Card, createToken } from "vue-stripe-elements-plus";
import { mapMutations } from "vuex";

export default {
  middleware: "authenticated",
  data() {
    return {
      complete: false,
      jwt: this.$store.getters["auth/getuserjwt"],
      stripeOptions: {
        // see https://stripe.com/docs/stripe.js#element-options for details
      },
      address: "HKHK HK",
      loading: false,
    };
  },

  components: { Card },

  computed: {
    items() {
      return this.$store.getters["cart/items"];
    },
    price() {
      return this.$store.getters["cart/price"];
    },
  },

  methods: {
    ...mapMutations({
      emptyList: "cart/emptyList",
    }),
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
              amount: this.$store.getters["cart/price"],
              product: this.$store.getters["cart/items"],
              address: this.address,
              token,
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
            this.emptyList();
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

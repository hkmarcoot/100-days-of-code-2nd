<template>
  <div>
    <button @click="emptyList">emptylist</button>
    <div v-if="price > 0">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in items" :key="idx">
            <td>{{ item.title }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.quantity }}</td>
            <td>
              <a @click="addToCart(item)">+</a>
              <a @click="removeFromCart(item)">-</a>
            </td>
          </tr>
          <!-- <tr v-for="(item, idx) in items" :key="idx">
            <td>{{ item.attributes.title }}</td>
            <td>{{ item.attributes.price }}</td>
            <td>{{ item.attributes.quantity }}</td>
            <td>
              <a @click="addToCart(item)">+</a>
              <a @click="removeFromCart(item)">-</a>
            </td>
          </tr> -->
        </tbody>
      </table>

      <button @click="goToCheckout">
        Process to checkout ({{ price }}USD)
      </button>
    </div>
    <br />
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      addToCart: "cart/add",
      removeFromCart: "cart/remove",
      emptyList: "cart/emptyList",
    }),
    goToCheckout() {
      // Redirect to signin page if not logged in.
      const isConnected = this.$store.getters["auth/getuserjwt"];
      if (!isConnected) {
        this.$router.push("/users/signin");
        return;
      }
      this.$router.push("/orders/checkout");
    },
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    items() {
      return this.$store.getters["cart/items"];
    },
    price() {
      return this.$store.getters["cart/price"];
    },
    numberOfItems() {
      return this.$store.getters["cart/numberOfItems"];
    },
  },
};
</script>

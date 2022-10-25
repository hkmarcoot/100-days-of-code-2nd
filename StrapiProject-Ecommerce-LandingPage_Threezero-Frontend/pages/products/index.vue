<template>
  <div>
    <cart />

    <div v-for="(product, idx) in filteredproducts" :key="idx">
      {{ product.title }}<br />
      Price: {{ product.price }}<br />
      ID: {{ product.id }}<br />
      <button @click="addToCart(product)">Add to Cart</button>
      <!-- <div v-for="(product, idx) in products" :key="idx">
      {{ product.attributes.title }}<br />
      Price: {{ product.attributes.price }}<br />
      ID: {{ product.id }}<br />
      <button @click="addToCart(product.attributes)">Add to Cart</button> -->

      <br /><br />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import cart from "~/components/cart.vue";

export default {
  data() {
    return {
      backendurl: process.env.backendurl,
      frontendurl: process.env.frontendurl,
    };
  },
  async asyncData({ $axios, store }) {
    const productsContent = await $axios.$get(
      process.env.backendurl + "/api" + "/products"
    );
    let products = productsContent.data;
    return { products };
  },
  components: {
    cart,
  },
  methods: {
    ...mapMutations({
      addToCart: "cart/add",
      removeFromCart: "cart/remove",
    }),
  },
  computed: {
    // filteredproducts() {
    //   return this.products.map(({ id, title, price }) => ({
    //     id,
    //     title,
    //     price,
    //   }));
    // },
    filteredproducts() {
      return this.products.map((product) => ({
        id: product.id,
        title: product.attributes.title,
        price: product.attributes.price,
      }));
    },
  },
};
</script>

<template>
  <div>
    <header>
      <div class="container">
        <div>
          <b-navbar toggleable="lg">
            <b-navbar-brand
              ><nuxt-link to="/"
                ><img src="/pictures/logo2.png" width="155"/></nuxt-link
            ></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item><nuxt-link to="/">Home</nuxt-link></b-nav-item>
                <b-nav-item
                  ><nuxt-link to="/property">Search</nuxt-link></b-nav-item
                >
                <b-nav-item><nuxt-link to="/blog">Blog</nuxt-link></b-nav-item>
                <b-nav-item><nuxt-link to="/faq">FAQ</nuxt-link></b-nav-item>
                <b-nav-item
                  ><nuxt-link to="/contact">Contact</nuxt-link></b-nav-item
                >
              </b-navbar-nav>

              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown right class="mt8" v-if="getuserjwt">
                  <!-- Using 'button-content' slot -->
                  <template v-slot:button-content>
                    My Account
                  </template>
                  <b-dropdown-item
                    ><nuxt-link to="/users/my-account"
                      >My Account</nuxt-link
                    ></b-dropdown-item
                  >
                  <b-dropdown-item @click="logout">Logout</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item v-if="!getuserjwt" class="mt8"
                  ><nuxt-link to="/users/signin"
                    ><svg
                      class="someright"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path
                        d="M13.033 2v-2l10 3v18l-10 3v-2h-9v-7h1v6h8v-18h-8v7h-1v-8h9zm1 20.656l8-2.4v-16.512l-8-2.4v21.312zm-3.947-10.656l-3.293-3.293.707-.707 4.5 4.5-4.5 4.5-.707-.707 3.293-3.293h-9.053v-1h9.053z"
                      />
                    </svg>
                    Login</nuxt-link
                  ></b-nav-item
                >
                <b-nav-item
                  ><nuxt-link class="btn btnnew" to="/users/createproperty"
                    >To Let</nuxt-link
                  ></b-nav-item
                >
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  computed: {
    getuserjwt() {
      return this.$store.getters["auth/getuserjwt"];
    },
  },
  methods: {
    ...mapMutations({
      logout: "auth/logout",
    }),
  },
};
</script>

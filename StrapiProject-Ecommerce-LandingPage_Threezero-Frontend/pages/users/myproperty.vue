<template>
  <div>
    <section class="dashboard">
      <div class="container-fluid">
        <div class="row">
          <nav
            id="sidebarMenu"
            class="col-md-3 col-lg-2 d-md-block  sidebar collapse"
          >
            <div class="sidebar-sticky pt-3">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <nuxt-link class="nav-link active" to="/users/my-account">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"
                      />
                    </svg>
                    My Account
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link class="nav-link" to="/users/myproperty">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.707 13.946l-1.035 1.054h-.672v1h-1v1h-3v-2.292l3.146-3.185c.496 1.111 1.419 1.988 2.561 2.423zm5.293-4.279c0 2.025-1.642 3.667-3.667 3.667-2.024 0-3.666-1.642-3.666-3.667s1.642-3.667 3.666-3.667c2.025 0 3.667 1.642 3.667 3.667zm-1.375-1.375c0-.506-.41-.917-.917-.917s-.916.411-.916.917.409.917.916.917.917-.411.917-.917z"
                      /></svg
                    >My Rentals
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </nav>

          <main role="main" class="col-md-9 ml-sm-auto col-lg-10">
            <div>
              <h3>My Rentals</h3>

              <ul class="list-group">
                <li
                  v-for="(property, idx) in properties"
                  :key="idx"
                  class="list-group-item"
                >
                  <nuxt-link :to="'/users/updateproperty/' + property.id">
                    {{ property.title }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </main>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  middleware: "authenticated",
  async asyncData({ $axios, params, store }) {
    const user = await $axios.$get(process.env.backendurl + "/api/users/me", {
      headers: {
        Authorization: store.getters["auth/getuserjwt"],
      },
    });
    const properties = await $axios.$get(
      process.env.backendurl +
        "/api/properties?users_permissions_user_eq=" +
        user.username,
      {
        headers: {
          Authorization: store.getters["auth/getuserjwt"],
        },
      }
    );
    return { user, properties };
  },
};
</script>

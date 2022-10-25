<template>
  <div>
    <section id="latest">
      <div class="container">
        <div class="row thehead">
          <div class="col-md-8 text-left">
            <h3>Search For Rent</h3>
            <p class="lead">Zero Commission Fees</p>
          </div>
          <div class="col-md-4 text-right">
            <p><a href="#">Home</a> > <a href="#">Search For Rent</a></p>
          </div>
        </div>
        <div class="row searchproperties">
          <div class="col-md-8 text-center">
            <div class="row sortingwrapper">
              <select class="form-control" v-model="sort" id="sorting">
                <option value="rentlow">Default Ordering</option>
                <option value="rentlow">Price (Low to High)</option>
                <option value="renthigh">Price (High to Low)</option>
                <option value="arealow">Area (Low to High)</option>
                <option value="areahigh">Area (High to Low)</option>
              </select>
            </div>
            <div class="row">
              <div
                v-for="(property, idx) in filteredproperties"
                :key="idx"
                class="col-md-6 text-left"
              >
                <div class="outer">
                  <a
                    :href="
                      frontendurl + '/property/' + property.attributes.slug
                    "
                  >
                    <div class="upper">
                      <img
                        v-if="property.attributes.thumbnail.data != null"
                        :src="
                          backendurl +
                            property.attributes.thumbnail.data.attributes.url
                        "
                      />
                      <img
                        v-if="property.attributes.thumbnail.data == null"
                        src="pictures/inner.png"
                      />
                      <div class="innertext">
                        <span v-if="!property.attributes.status">Letting</span>
                        <span v-if="property.attributes.status">Rented</span>
                        <h4>GBP £{{ property.attributes.rent }} / week</h4>
                      </div>
                    </div>
                    <div class="lower">
                      <h3>{{ property.attributes.title }}</h3>
                      <span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"
                          />
                        </svg>
                        {{ property.attributes.address }}</span
                      >
                    </div>

                    <div class="listing-features">
                      <div class="row">
                        <div class="col-md-4">
                          <strong>Area </strong><br />{{
                            property.attributes.area
                          }}
                          m²
                        </div>
                        <div class="col-md-4">
                          <strong>Room </strong><br />{{
                            property.attributes.room
                          }}
                        </div>
                        <div class="col-md-4">
                          <strong>Living Room </strong><br />{{
                            property.attributes.livingroom
                          }}
                        </div>
                      </div>
                    </div>

                    <div class="lastdate">
                      <div class="row">
                        <div class="col-md-6">
                          Date of publication:
                        </div>
                        <div class="col-md-4 text-right">
                          {{ property.attributes.date }}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <!-- end row -->

            <button @click="showmore" v-if="totalblog > showing">
              Show More
            </button>
          </div>
          <div class="col-md-4">
            <h3 class="font24">Search Condition</h3>
            <form>
              <div class="form-group">
                <label for="exampleFormControlInput1"
                  >Address/Street/Building</label
                >
                <input
                  type="text"
                  v-model="filtereddata.title"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Example: X1 Town Hall"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect1">District</label>
                <select
                  class="form-control"
                  v-model="filtereddata.district"
                  id="exampleFormControlSelect1"
                >
                  <option value="all"> All </option>
                  <option value="dis1">District 1</option>
                  <option value="dis2">District 2</option>
                  <option value="dis3">District 3</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      frontendurl: process.env.frontendurl,
      backendurl: process.env.backendurl,
      filtereddata: {
        title: "",
        district: "all",
      },
      sort: "rentlow",
      showing: 2,
      totalblog: "",
    };
  },
  async asyncData({ $axios }) {
    const propertiesContent = await $axios.$get(
      process.env.backendurl + "/api/properties" + "?populate=thumbnail"
    );
    const properties = propertiesContent.data;
    // console.log(properties);
    return { properties };
  },
  methods: {
    showmore() {
      this.showing = this.showing + 2;
    },
  },
  computed: {
    filteredproperties() {
      let temp = "";
      if (this.filtereddata.district == "all")
        temp = this.properties.filter((x) =>
          x.attributes.title.toLowerCase().includes(this.filtereddata.title)
        );
      else
        temp = this.properties.filter(
          (x) =>
            x.attributes.title
              .toLowerCase()
              .includes(this.filtereddata.title) &&
            x.attributes.district == this.filtereddata.district
        );

      this.totalblog = temp.length;
      /* sorting alog */

      if (this.sort == "rentlow") {
        temp.sort((a, b) => {
          return a.attributes.rent - b.attributes.rent;
        });
      }
      if (this.sort == "renthigh") {
        temp.sort((a, b) => {
          return b.attributes.rent - a.attributes.rent;
        });
      }
      if (this.sort == "arealow") {
        temp.sort((a, b) => {
          return a.attributes.area - b.attributes.area;
        });
      }
      if (this.sort == "areahigh") {
        temp.sort((a, b) => {
          return b.attributes.area - a.attributes.area;
        });
      }

      return temp.slice(0, this.showing);
    },
  },
};
</script>

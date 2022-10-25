<template>
  <div>
    <section id="intro">
      <div
        v-if="property.attributes.thumbnail.data != null"
        class="jumbotron jumbotron2"
        :style="
          'background-image: url(' +
            backendurl +
            property.attributes.thumbnail.data.attributes.url +
            ') '
        "
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12"></div>
          </div>
        </div>
      </div>
    </section>
    <section id="singlecontent">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h1>
              {{ property.attributes.title }}
              <span v-if="!property.attributes.status" class="thetag"
                >Letting</span
              >
              <span v-if="property.attributes.status" class="thetag"
                >Rented</span
              >
            </h1>
            <h5>GBP £{{ property.attributes.rent }}/ week</h5>
            <p>
              Address: {{ property.attributes.address }}<br />
              Area: {{ property.attributes.area }} m²<br />
              Room: {{ property.attributes.room }}<br />
              Living Room: {{ property.attributes.livingroom }}<br />
              Date of publication: {{ property.attributes.date }}
            </p>
            <h4>Introduction</h4>
            <div
              v-if="property.attributes.content"
              v-html="$md.render(property.attributes.content)"
            ></div>
          </div>
          <div class="col-md-4">
            <div class="apply">
              <h5><i class="far fa-calendar-check"></i> Contact The Owner</h5>
              <hr />
              <p>Sign in to read the information.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.property.attributes.title + " - Threezero Site",
    };
  },
  data() {
    return {
      frontendurl: process.env.frontendurl,
      backendurl: process.env.backendurl,
    };
  },
  async asyncData({ $axios, params }) {
    const properties = await $axios.$get(
      process.env.backendurl +
        "/api/properties?filters[slug][$eq]=" +
        params.slug +
        "&populate=thumbnail"
    );
    let property = properties.data[0];
    return { property };
  },
};
</script>

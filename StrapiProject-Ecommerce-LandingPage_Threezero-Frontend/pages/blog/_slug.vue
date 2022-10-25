<template>
  <div>
    <section id="latest">
      <div class="container">
        <div class="row thehead">
          <div class="col-md-12 text-center">
            <h1>{{ blog.attributes.title }}</h1>
            <i class="category">{{ blog.attributes.category }}</i>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8 offset-md-2 text-left">
            <div
              v-if="blog.attributes.content"
              v-html="$md.render(blog.attributes.content)"
            ></div>
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
    };
  },
  async asyncData({ $axios, params }) {
    const blogs = await $axios.$get(
      process.env.backendurl + "/api/blogs?filters[slug][$eq]=" + params.slug
    );
    let blog = blogs.data[0];
    return { blog };
  },
};
</script>

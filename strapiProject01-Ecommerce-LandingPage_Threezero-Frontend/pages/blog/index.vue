<template>
  <div>
    <section id="latest">
      <div class="container">
        <div class="row thehead mb30">
          <div class="col-md-8 text-left">
            <h3>Blog {{ x }}</h3>
          </div>
          <div class="col-md-4 text-right">
            <p><a href="#">Home</a> > <a href="#">Blog</a></p>
          </div>
        </div>

        <div class="row articles">
          <div class="col-md-12 text-center">
            <div class="row">
              <div
                v-for="(blog, idx) in blogs"
                :key="idx"
                class="col-md-4 text-left"
              >
                <div class="outer">
                  <a :href="frontendurl + '/blog/' + blog.attributes.slug">
                    <div class="upper">
                      <img
                        v-if="blog.attributes.thumbnail.data != null"
                        :src="
                          backendurl +
                            blog.attributes.thumbnail.data.attributes.url
                        "
                      />
                    </div>

                    <div class="lower">
                      <h3>{{ blog.attributes.title }}</h3>
                      <span>{{ blog.attributes.date }}</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            class="row text-center thepage"
            v-if="maxpage != 1 && maxpage != 0"
          >
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li v-if="currentPage != 1" class="page-item">
                  <a v-bind:href="backlink" class="page-link">Previous</a>
                </li>
                <span v-for="id in maxpage" v-bind:key="id">
                  <li
                    v-if="id - currentPage >= 1 && id - currentPage < 3"
                    class="page-item"
                  >
                    <a :href="gopage(id)" class="page-link">{{ id }}</a>
                  </li>
                  <li v-if="id == currentPage" class="page-item">
                    <a :href="gopage(id)" class="page-link">{{ id }}</a>
                  </li>
                </span>
                <li v-if="currentPage != maxpage" class="page-item">
                  <a v-bind:href="nextlink" class="page-link">Next</a>
                </li>
              </ul>
            </nav>
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
      backendurl: process.env.backendurl,
      frontendurl: process.env.frontendurl,
      noofpost: 1,
      x: "",
    };
  },
  async asyncData({ $axios, query }) {
    let thepage = 0;
    let noofpost = 1;
    if (query.page) thepage = (query.page - 1) * noofpost;
    const blogsContent = await $axios.$get(
      process.env.backendurl +
        "/api/blogs?_limit=" +
        noofpost +
        "&_start=" +
        thepage +
        "&_sort=date:DESC" +
        "&populate=thumbnail"
    );
    const blogcount = await $axios.$get(
      process.env.backendurl + "/api/blogs/count/view"
    );
    // console.log(blogcount);
    // console.log(blogsContent);
    const blogs = blogsContent.data;
    return { blogs, blogcount };
  },
  methods: {
    gopage(para) {
      return "/blog?page=" + para;
    },
  },
  computed: {
    backlink() {
      let backpageno = parseInt(this.$route.query.page) - 1;
      return "/blog?page=" + backpageno;
    },
    nextlink() {
      let nextpageno = 2;
      if (this.$route.query.page)
        nextpageno = parseInt(this.$route.query.page) + 1;
      return "/blog?page=" + nextpageno;
    },
    maxpage() {
      if (this.blogcount % this.noofpost == 0)
        return parseInt(this.blogcount / this.noofpost);
      else return parseInt(this.blogcount / this.noofpost + 1);
    },
    currentPage() {
      if (this.$route.query.page) return this.$route.query.page;
      else return 1;
    },
  },
};
</script>

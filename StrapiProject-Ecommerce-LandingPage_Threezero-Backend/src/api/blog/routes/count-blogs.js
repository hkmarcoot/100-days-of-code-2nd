module.exports = {
  routes: [
    {
      // Path defined with a URL parameter
      method: "GET",
      path: "/blogs/count/view",
      handler: "blog.getCount",
    },
  ],
};

## Notes For Connecting Frontend to Backend

What are the responsibilities of a front-end developer compared to a back-end developer?

- Front-end developers build the visual features of an application that a user sees and directly interacts with. Back-end developers build the parts of an application that allow it to function, and store and retrieve data.

How do the front-end and the back-end of a website communicate with each other over HTTP?

- The front-end and back-end of a web app communicate via an HTTP request/response cycle.

What are some examples of data that the back-end sends as a response to the front-end?

- The back-end typically sends HTML documents, formatted data, and assets like stylesheets, JavaScript files, and images in its response to browser requests.

How does client-side rendering differ from server-side rendering?

- With client-side rendering, content is dynamically generated in the browser. With server-side rendering content is generated on the server, then sent to the browser to be rendered.

When is client-side rendering preferred and why?

- Client-side rendering is preferred for highly interactive web applications because of its quick rendering time after the initial page load.

What are the pros and cons of client-side rendering?

- The main advantage of client-side rendering is the fast speed, after the initial page load. The biggest disadvantages are poor SEO performance and the possibility of poor user experience on slower devices.

When is server-side rendering preferred and why?

- Server-side rendering is preferred for mostly static sites because the content is generated on the server and is quickly viewable after it is sent to the browser.

What are the pros and cons of server-side rendering?

- The main advantages of server-side rendering are that visual elements of the page load quickly, and it offers better SEO performance compared with client-side rendering. The primary disadvantage is the time it takes for interactive elements of the page to load can be slow and depends largely on factors outside of the developer's control.

## Let’s recap some key takeaways from this lesson:

- Front-end web development concerns all aspects of a web app that a user can see and directly interact with.

- Back-end web development concerns how a website functions, and the storage and retrieval of data.

- The front-end and back-end of a web app communicate via and HTTP request/response cycle. The types of data that servers send to the browser include HTML documents, JavaScript, static assets, and formatted data.

- Websites can be rendered on the client-side or server-side. Hybrid rendering combines both of these approaches.

- With client-side rendering, JavaScript dynamically generates all content in the browser as the user navigates the site. Content is rendered quickly, after the initial page load.

- Client-side rendering is ideal for dynamic sites, with rich JavaScript interactions.

- With server-side rendering, the server sends the content to the browser. Static content is quickly viewable in the browser, but rich site interactions can take longer to load.

- Server-side rendering is ideal for mostly static sites, where there is not a lot of user interaction.

- Hybrid rendering models attempt to optimize speed, performance, and SEO by combining aspects of client and server-side rendering.

## More Q&A

What is the difference between the front-end and the back-end of a website?

- The front-end of a website are the features that a user can see and directly interact with. The back-end of a website are the features that allow it to function, and store and retrieve data.

What are the respective roles of the browser and server in client-side rendering?

- The server sends a boilerplate HTML document to the browser, along with JavaScript code. The browser uses JavaScript sent from the server to dynamically generate content as the user navigates the site.

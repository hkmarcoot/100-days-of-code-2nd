import http from "http";
import fs from "fs";
import path from "path";

const hostname = "localhost";
const port = process.env.PORT || 4001;

const server = http.createServer((req, res) => {
  const baseURL = "http://" + req.headers.host + "/";
  const reqUrl = new URL(req.url, baseURL);
  const name = reqUrl.searchParams.get("name");
  let content = "";

  if (name) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    // Change the filePath to current working directory using the "path" method
    const filePath = path.join(process.cwd(), name);
    try {
      content = fs.readFileSync(filePath, "utf8");
      res.end(content);
    } catch (err) {
      res.end("File not found");
    }
  } else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    try {
      content = fs.readFileSync("web_page.html", "utf8");
    } catch (e) {
      console.log("Error:", e.stack);
    }
    res.end(content);
  }
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const express = require("express");
const app = express();

app.get("/", (req, res) => {
   res.sendFile(process.env.ROOT + "/index.html");
});

app.get("/about", (req, res) => res.sendFile(process.env.ROOT + "/about.html"));

app.get("/contact-me", (req, res) =>
   res.sendFile(process.env.ROOT + "/contact-me.html"),
);

app.use((req, res) => {
   if ((res.status = 404)) {
      res.sendFile(process.env.ROOT + "/404.html");
   }
});

const PORT = 3000;
app.listen(PORT, (error) => {
   if (error) {
      console.error(error);
   }
});

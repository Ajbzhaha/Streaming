const { Launcher } = require("@loybung/launcher");
const { resolve } = require("path");
const server = require("./server");

const app = new Launcher("https://loybung.vercel.app/api/project/streaming");

app.setPath(resolve(__dirname, "./app.js"));
app.setExpire(null);

app.Run().catch((err) => console.log(err.message));

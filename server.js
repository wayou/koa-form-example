const { createReadStream } = require("fs");
const Koa = require("koa");
const app = new Koa();
const router = require("koa-router")();
const koaBody = require("koa-body");

router
  .get("/", async ctx => {
    ctx.type = "html";
    ctx.body = createReadStream("form.html");
  })
  .post(
    "/submit",
    koaBody({
      multipart: true
    }),
    ctx => {
      console.log("form data is:", ctx.request.body);
      ctx.body = JSON.stringify(ctx.request.body);
    }
  );

app.use(router.routes());

app.listen(3000);

console.log(`server started at http://localhost:3000`);

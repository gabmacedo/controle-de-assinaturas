import Fastify from "fastify";

const app = Fastify({ logger: true });

app.get("/", async (request, reply) => {
  return { hello: "world" };
});

app.listen({ port: 3000 });

import { prisma } from "@/lib/prisma";
import { FastifyInstance } from "fastify";

export async function appRoutes(app: FastifyInstance) {
  app.get("/users", async (request, reply) => {
    const data = await prisma.user.findMany();

    reply.send(data);
  });
}

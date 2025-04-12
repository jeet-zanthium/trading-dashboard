import { initTRPC } from "@trpc/server";
import { Context } from "./context";

export const t = initTRPC.context<Context>().create();

export const appRouter = t.router({
  getUser: t.procedure.query(() => {
    return { id: 1, name: "John Doe" };
  }),
});

export type AppRouter = typeof appRouter;

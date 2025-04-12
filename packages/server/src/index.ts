import moduleAlias from "module-alias";

moduleAlias.addAliases({
  "@": __dirname,
});

import { createServer } from "node:http";
import { env } from "@/env";
import { app } from "@/app";

const PORT = env("PORT");

const server = createServer(app);

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

const cleanup = () => {
  console.log("Cleaning up...");

  // Close database connection
  //   prisma.$disconnect();

  console.log("Cleanup complete.");
};

const handleShutdown = (by: string, code = 0) => {
  console.log("Shutdown initiated... " + `(BY: ${by})`);
  cleanup();
  process.exit(code);
};

server.on("close", () => handleShutdown("Server Close"));
process.on("SIGINT", () => handleShutdown("SIGINT"));
process.on("SIGTERM", () => handleShutdown("SIGTERM"));

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception: " + err.message);
  handleShutdown("Uncaught Exception", 1);
});

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection: " + err);
  handleShutdown("Unhandled Rejection", 1);
});

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { addMocksToSchema, MockList } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { default as casual } from "casual";
import * as fs from "fs";

const mocks = {
  ID: () => casual.uuid,
  Int: () => casual.integer(),
  Float: () => casual.double,
  String: () => casual.word,
  Decimal: () => (casual.integer(1_000, 100_000) / 100).toString(),
  Date: () => casual.date('YYYY-MM-DD'),
  Datetime: () => `${casual.date('YYYY-MM-DD')}T${casual.time('HH:mm:ss')}`,

  HomePage: () => ({
      posts: () => new MockList(5),
  }),
};

const schemaFiles = fs.readdirSync("../schemas/");
const typeDefs = schemaFiles.map((file) =>
  fs.readFileSync(`../schemas/${file}`, { encoding: "utf-8" })
);

const server = new ApolloServer({
  schema: addMocksToSchema({
    schema: makeExecutableSchema({ typeDefs }),
    mocks,
  }),
});

async function start() {
  const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
  console.log(`🚀 Server listening at: ${url}`);
}

start();

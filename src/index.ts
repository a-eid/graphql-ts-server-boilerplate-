import "reflect-metadata"
import { GraphQLServer } from "graphql-yoga"
import { makeExecutableSchema } from "graphql-tools"
import { createConnection } from "typeorm"
import { importSchema } from "graphql-import"
import resolvers from "./resolvers"

async function main() {
  await createConnection().catch(error => console.log(error))

  const server = new GraphQLServer({
    schema: makeExecutableSchema({
      typeDefs: importSchema("src/schema.graphql"),
      resolvers,
    }),
  })

  console.log(`Connected to db successfully`)
  server.start(() => console.log("Server is running on localhost:4000"))
}

main()

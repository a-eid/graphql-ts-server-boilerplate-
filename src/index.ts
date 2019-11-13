import "reflect-metadata"
import { GraphQLServer } from "graphql-yoga"
import { createConnection } from "typeorm"

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`

const resolvers = {
  Query: {
    hello: (_: any, { name }: any) => `Hello ${name || "World"}`,
  },
}

async function main() {
  await createConnection().catch(error => console.log(error))
  const server = new GraphQLServer({ typeDefs, resolvers })
  console.log(`Connected to db successfully`)
  server.start(() => console.log("Server is running on localhost:4000"))
}

main()

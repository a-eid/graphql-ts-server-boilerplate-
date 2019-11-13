import { IResolvers } from "graphql-tools"

const resolvers: IResolvers = {
  Query: {
    hello: (_, { name }: GQL.IHelloOnQueryArguments) => `Hello ${name || "World"}`,
  },
  Mutation: {
    register: (_, { email, password }: GQL.IRegisterOnMutationArguments) => {
      console.log(email, password)
    },
  },
}

export default resolvers

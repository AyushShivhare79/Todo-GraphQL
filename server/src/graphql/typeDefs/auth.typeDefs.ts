const typeDefs = `#graphql
    type Book {
        name: String!
    }
    
    type User {
        id: ID!
        email: String!
        password: String!
    }

    type Query {
        book: [Book]
        user: [User]
    }



    type Mutation {
        signUp(email: String, password: String) : String
        signIn(email: String, password: String) : String
    }
`;

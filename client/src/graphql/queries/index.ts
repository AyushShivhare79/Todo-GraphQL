import { gql } from "@apollo/client";

export const Book = gql`
  query Book {
    book {
      name
    }
  }
`;

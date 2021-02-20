const { gql } = require('apollo-server-express');

exports.typeDefs = gql `
   type Hotel {
     id: ID!
     firstname: String!
     lastname: String!
     email: String!
     gender: String!
     city: String!
     designation: String!
     salary: Float!
   }

   type Query {
     getHotel: [Hotel]
     getHotelByID(id: ID!): Hotel
     getHotelByCity(city: String!): [Hotel]
   }

   type Mutation {
     addHotel(firstname: String!
        lastname: String!
        email: String!
        gender: String!
        city: String!
        designation: String!
        salary: Float!): Hotel

     updateHotel(id: String!,
        firstname: String!
        lastname: String!
        email: String!
        gender: String!
        city: String!
        designation: String!
        salary: Float!): Hotel

     deleteHotel(id: ID!): Hotel
   }
`

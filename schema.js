const { gql } = require('apollo-server-express');

exports.typeDefs = gql `
   type Hotel {
     id: ID!
     hotel_id: Int!
     hotel_name: String!
     street: String!
     city: String!
     postal_code: String!
     price: Float!
     email: String!
     user_id: Int!
   }

   type Query {
     getHotel: [Hotel]
     getHotelByID(id: ID!): Hotel
     getHotelByCity(city: String!): [Hotel]
   }

   type Mutation {
     addHotel(hotel_id: Int!
        hotel_name: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!
        user_id: Int!): Hotel

     updateHotel(id: String!,
        hotel_id: Int!
        hotel_name: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!
        user_id: Int!): Hotel

     deleteHotel(id: ID!): Hotel
   }
`

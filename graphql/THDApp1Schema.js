import { gql } from 'apollo-server';

const typeDefs = `
  type Query {
    getAppointments: [Appointment!]!
    getProducts: [Product!]!
    getCustomers: [Customer!]!
  }

  type Mutation {
    editApplyForFinance(input: EditApplyForFinanceInput!): ApplyForFinanceResponse!
  }

  type Appointment {
    id: ID!
    Work_Type: String!
    Status: String!
    Appointment_ID: String!
    products: [Product!]!
    customers: [Customer!]!
  }

  type Product {
    id: ID!
    Product: String!
    Product_ID: String!
  }

  type Customer {
    id: ID!
    Customer_name: String!
    Address: String!
    Mobile: String!
  }

  input EditApplyForFinanceInput {
    id: ID!
    Finance_amount: Float!
  }

  type ApplyForFinanceResponse {
    success: Boolean!
    message: String!
    appointment: Appointment
  }
`;

export default typeDefs;
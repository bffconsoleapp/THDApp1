const sampleAppointments = [
  {
    id: '1',
    Work_Type: 'Repair',
    Status: 'Scheduled',
    Appointment_ID: 'A123',
    products: [
      { id: '1', Product: 'Engine Oil', Product_ID: 'P001' }
    ],
    customers: [
      { id: '1', Customer_name: 'John Doe', Address: '123 Main St', Mobile: '555-1234' }
    ]
  }
];

const resolvers = {
  Query: {
    getAppointments: () => sampleAppointments,
    getProducts: () => sampleAppointments.flatMap(app => app.products),
    getCustomers: () => sampleAppointments.flatMap(app => app.customers),
  },
  Mutation: {
    editApplyForFinance: (_, { input }) => {
      const appointment = sampleAppointments.find(app => app.id === input.id);
      if (appointment) {
        // Placeholder code for editing finance application
        return {
          success: true,
          message: `Finance application for Appointment ID ${input.id} edited successfully.`,
          appointment
        };
      } else {
        return {
          success: false,
          message: `Appointment ID ${input.id} not found.`,
          appointment: null
        };
      }
    }
  }
};

export default resolvers;
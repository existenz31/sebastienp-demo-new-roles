// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Customers = sequelize.define('customers', {
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    stripeId: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
    avatar: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    rejectReason: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'customers',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  Customers.associate = (models) => {
    Customers.hasMany(models.customersSubscriptions, {
      foreignKey: {
        name: 'customerIdKey',
        field: 'customer_id',
      },
      as: 'customersSubscriptions',
    });
    Customers.hasMany(models.transactions, {
      foreignKey: {
        name: 'emitterCustomerIdKey',
        field: 'emitter_customer_id',
      },
      as: 'emitterCustomerTransactions',
    });
    Customers.hasMany(models.orders, {
      foreignKey: {
        name: 'customerIdKey',
        field: 'customer_id',
      },
      as: 'orders',
    });
    Customers.hasMany(models.customersDocuments, {
      foreignKey: {
        name: 'customerIdKey',
        field: 'customer_id',
      },
      as: 'customersDocuments',
    });
  };

  return Customers;
};

// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const CustomersDocuments = sequelize.define('customersDocuments', {
    type: {
      type: DataTypes.STRING,
      defaultValue: "KYC",
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'customers_documents',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  CustomersDocuments.associate = (models) => {
    CustomersDocuments.belongsTo(models.customers, {
      foreignKey: {
        name: 'customerIdKey',
        field: 'customer_id',
      },
      as: 'customer',
    });
    CustomersDocuments.belongsTo(models.documents, {
      foreignKey: {
        name: 'documentIdKey',
        field: 'document_id',
      },
      as: 'document',
    });
  };

  return CustomersDocuments;
};

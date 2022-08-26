import { Sequelize, DataTypes } from 'sequelize'

export const RoleModelAttributes = {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  // Model attributes are defined here
  createdAt: {
    type: 'timestamptz',
    defaultValue: Sequelize.literal('now()'),
    allowNull: true,
  },
  updatedAt: {
    type: 'timestamptz',
    defaultValue: Sequelize.literal('now()'),
    allowNull: true,
  },
  deletedAt: {
    type: 'timestamptz',
    allowNull: true,
  },
  roleName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  roleLevel: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}

export const RoleModelOptions = {
  underscored: true,
  tableName: 'role',
  deletedAt: 'deleted_at',
  timestamps: false,
}

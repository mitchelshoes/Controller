/**
 * @author elukashick
 */

import Sequelize from 'sequelize';
import sequelize from './../utils/sequelize';
import ElementInstance from './elementInstance'

const ElementInstanceStatus = sequelize.define('element_instance_status', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'ID'
    },
    status: {
        type: Sequelize.TEXT,
        field: 'status'
    },
    cpuUsage: {
        type: Sequelize.FLOAT,
        defaultValue: 0.000,
        field: 'cpu_usage'
    },
    memoryUsage: {
        type: Sequelize.BIGINT,
        defaultValue: 0,
        field: 'memory_usage'
    },
    containerId: {
        type: Sequelize.BIGINT,
        field: 'container_id'
    }
}, {
    // add the timestamp attributes (updatedAt, createdAt)
    timestamps: true,
    // disable the modification of table names
    freezeTableName: true,
    // don't use camelcase for automatically added attributes but underscore style
    // so updatedAt will be updated_at
    underscored: true
});

ElementInstanceStatus.belongsTo(ElementInstance, {
    foreignKey: 'element_instance_uuid'
});
export default ElementInstanceStatus;
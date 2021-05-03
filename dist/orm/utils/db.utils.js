"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cassandra_driver_1 = require("cassandra-driver");
exports.isUuid = (id) => id && id instanceof cassandra_driver_1.types.Uuid;
exports.uuid = (id) => {
    if (!id) {
        return cassandra_driver_1.types.Uuid.random();
    }
    if (typeof id === 'string') {
        return cassandra_driver_1.types.Uuid.fromString(id);
    }
    return id;
};
exports.isTimeUuid = (id) => id && id instanceof cassandra_driver_1.types.TimeUuid;
exports.timeuuid = (idOrDate) => {
    if (!idOrDate) {
        return cassandra_driver_1.types.TimeUuid.now();
    }
    if (typeof idOrDate === 'string') {
        return cassandra_driver_1.types.TimeUuid.fromString(idOrDate);
    }
    if (idOrDate instanceof Date) {
        return cassandra_driver_1.types.TimeUuid.fromDate(idOrDate);
    }
    return idOrDate;
};
//# sourceMappingURL=db.utils.js.map
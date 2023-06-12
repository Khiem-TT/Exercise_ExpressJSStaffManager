const baseModel = require('./base.model');

class StaffModel {
    static async addStaff(name, age, department, status, image) {
        const sql = `INSERT INTO staffs(name, age, department, status, image) VALUES('${name}', ${age}, '${department}', '${status}', '${image}')`;
        await baseModel.querySQL(sql);
    }

    static async getListStaff(limit, offset) {
        const sql = `SELECT * FROM staffs LIMIT ${limit} OFFSET ${offset};`;
        return await baseModel.querySQL(sql);
    }

    static async deleteStaff(id) {
        const sql = `DELETE FROM staffs WHERE id = ${id}`;
        await baseModel.querySQL(sql);
    }

    static async updateStaff(name, age, department, status, image, id) {
        const sql = `UPDATE staffs SET name = '${name}', age = ${age}, department = '${department}', status = '${status}', image = '${image}' WHERE id = ${id}`;
        await baseModel.querySQL(sql);
    }

    static async getUpdateStaff(id) {
        const sql = `SELECT * FROM staffs WHERE id = ${id}`;
        return await baseModel.querySQL(sql);
    }

    static async getAllStaff() {
        const sql = `SELECT * FROM staffs`;
        return await baseModel.querySQL(sql);
    }
}

module.exports = StaffModel;
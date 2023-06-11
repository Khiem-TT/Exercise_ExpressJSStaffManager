const StaffModel = require('../models/staff.model');

class StaffController {
    static getAddStaffPage(req, res) {
        res.render('addStaff');
    }

    static async addStaff(req, res) {
        const {name, age, department, status} = req.body;
        await StaffModel.addStaff(name, age, department, status).catch(err => {
            console.log(err.message);
        });
        res.redirect('/');
    }

    static async getListStaff(req, res) {
        let page = +req.query.page;
        page = page ? page : 1;
        let limit = 5;
        let offset = Math.ceil((page - 1) * limit);
        let staff = await StaffModel.getAllStaff();
        let totalPage = Math.ceil(staff.length / limit);
        let result = await StaffModel.getListStaff(limit, offset);
        res.render('listStaff', {data: result, numberPage: totalPage, currentPage: page, StaffOnPage: limit});
    }

    static async deleteStaff(req, res) {
        let idStaff = req.params.id;
        await StaffModel.deleteStaff(idStaff).catch(err => {
            console.log(err.message);
        });
        res.redirect('/');
    }

    static async updateStaff(req, res) {
        let idStaff = req.params.id;
        let {name, age, department, status} = req.body;
        await StaffModel.updateStaff(name, age, department, status, +idStaff).catch(err => {
            console.log(err.message);
        });
        res.redirect('/');
    }

    static async getUpdateStaffPage(req, res) {
        let idStaff = req.params.id;
        let result = await StaffModel.getUpdateStaff(idStaff);
        res.render('update', {staff: result[0]});
    }
}

module.exports = StaffController;
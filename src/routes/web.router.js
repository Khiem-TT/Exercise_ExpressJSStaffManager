const express = require('express');
const StaffController = require('../controllers/staff.controller');
const router = express.Router();

router.get('/staff/add', StaffController.getAddStaffPage);
router.post('/staff/add', StaffController.addStaff);
router.get('/', StaffController.getListStaff);
router.get('/staff/:id/delete', StaffController.deleteStaff);
router.get('/staff/:id/update', StaffController.getUpdateStaffPage);
router.post('/staff/:id/update', StaffController.updateStaff);

module.exports = router;
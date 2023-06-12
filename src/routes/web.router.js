const express = require('express');
const StaffController = require('../controllers/staff.controller');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './src/public/upload');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({storage: storage});

router.get('/staff/add', StaffController.getAddStaffPage);
router.post('/staff/add', upload.single('image'), StaffController.addStaff);
router.get('/', StaffController.getListStaff);
router.get('/staff/:id/delete', StaffController.deleteStaff);
router.get('/staff/:id/update', StaffController.getUpdateStaffPage);
router.post('/staff/:id/update', upload.single('image'), StaffController.updateStaff);

module.exports = router;
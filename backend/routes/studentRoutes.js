import express from 'express';

import {
    fetchStudents,
    createStudent,
    editStudent,
    removeStudent
} from '../controllers/studentController.js';

const router = express.Router();

router.get('/students', fetchStudents);
router.post('/students', createStudent);
router.put('/students/:id', editStudent);
router.delete('/students/:id', removeStudent);

export default router;
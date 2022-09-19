import express from 'express'
import { addUser, allUser,deleteUser,editUser } from '../controler/userControl.js'

const router=express.Router()

router.post('/add',addUser)
router.get('/all',allUser)
router.post('/:id',editUser)
router.delete('/:id',deleteUser)

export default router
//importo desde el modulo llamdo express e importo un modulo llamado router
const { Router } = require('express');

//objeto que me permite definir las rutas de mi serviddor
const router = Router();

//quienes son los controladores de mis rutas... 
const { getUsers, createUser, getUserById, deleteUser, updateUser } = require('../controllers/index.controller')

//defino rutas
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.delete('/users/:id', deleteUser);
//put es para decirle al servidor que voy a aactualizar algo
router.put('/users/edit/:id', updateUser);

module.exports = router;

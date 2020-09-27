const { Router } = require('express');
const router = Router();

const {
    obtenerJugadores,
    pintarForm,
    saveWinner
} = require('../controllers/google.controller');

router.get('/', obtenerJugadores);
router.get('/form', pintarForm);
router.post('/form', saveWinner);

module.exports = router;
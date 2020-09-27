let googleSheet = require('../spreadsheet');

const obtenerJugadores = async (req, res) => {
    registros = await googleSheet.accederGoogleSheet();
    res.render('index', { registros });

}

const pintarForm = (req, res) => {
    res.render('form', {});
}

const saveWinner = (req, res) => {
    googleSheet.saveWinner(req.body);
    res.redirect('/');
}

module.exports = {
    obtenerJugadores: obtenerJugadores,
    pintarForm: pintarForm,
    saveWinner: saveWinner

}
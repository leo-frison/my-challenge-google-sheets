const { GoogleSpreadsheet } = require('google-spreadsheet');

const credenciales = require('./json/credenciales.json');

let googleId = "1YFTYoMwU1PtHa5_eNoHm7f0Xa6zkFTsiFCX87y00tTI";

async function accederGoogleSheet() {

    const documento = new GoogleSpreadsheet(googleId);
    await documento.useServiceAccountAuth(credenciales);
    await documento.loadInfo();

    const sheet = documento.sheetsByIndex[0];
    const registros = await sheet.getRows();

    return registros;

}

async function saveWinner(pObjeto) {

    //console.log(pObjeto);

    const documento = new GoogleSpreadsheet(googleId);
    await documento.useServiceAccountAuth(credenciales);
    await documento.loadInfo();
    const sheet = documento.sheetsById[0];

    await sheet.addRow(pObjeto);
}


module.exports = {
    accederGoogleSheet: accederGoogleSheet,
    saveWinner: saveWinner
}

const MainPage = require('../pageobjects/main.page');
const resultados = require('../pageobjects/resultados');
const PaginadePerfil = require('../pageobjects/perfilprofesional');

describe('Validar Perfil', () => {

    beforeEach (async ()=> {
        await PaginadePerfil.open();
    })

    it('ingresar perfil', async () => {
        await PaginadePerfil.accedaperfil;
        expect(browser).toHaveTitle('Contacto')
        
    });
});


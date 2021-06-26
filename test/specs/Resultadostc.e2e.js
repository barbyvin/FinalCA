const MainPage = require('../pageobjects/main.page');
const resultados = require('../pageobjects/resultados');

describe('Resultados', () => {

    beforeEach (async ()=> {
        await resultados.open();
    })

    it('switch URL', async () => {
        await resultados.encontrarfisica();
        expect(browser).toHaveUrl('https://terapeutica.digital/#/search?sp=phisical')

        await resultados.encontrarlenguaje();
        expect(browser).toHaveUrl('https://terapeutica.digital/#/search?sp=language')

        await resultados.encontrarocupacional();
        expect(browser).toHaveUrl('https://terapeutica.digital/#/search?sp=ocupational')
    });

    it('especialista', async () => {
        await resultados.ingreseinformacion("Maria");
        await expect(resultados.whatsappbtn).toBeDisplayed;
        
    });
    








});
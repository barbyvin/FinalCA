const MainPage = require('../pageobjects/main.page');
const resultados = require('../pageobjects/resultados');

describe('Validacion en barra de busqueda', () => {
    beforeEach (async ()=> {
        await MainPage.open();
    })
    
    it('No desplegar otra pagina', async () => {
    
        await MainPage.Search();
        await expect(MainPage.text).toBeDisplayed();
    });

    it('Enfoque en la barra', async () => {
    
        await MainPage.EspecialidadOfrecida();
        await expect(MainPage.enfoque).toBeFocused;
        await expect(MainPage.barradebusqueda).toBeDisplayed;

    });

    it('Buscar Especialista', async () => {
    
        await MainPage.ingresedatos("Maria");
        await expect(resultados. whatsappbtn).toBeDisplayed;
            });






});

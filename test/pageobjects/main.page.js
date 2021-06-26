
/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage {
    /**
     * define selectors using getter methods
     */
    get btnSearch () { return $('//input[@value="Buscar"]') }
    get text () {return $('//a[@href="#/specialist-register"]')}
    get btnOcupacional () { return $('//label[@for= "ocupational"]')}
    get barradebusqueda () { return $('//input[contains(@placeholder,"¿Buscas a alguien o algo en especifico?"]')}
    get enfoque () {return $('//div[@class="input-group focus-div"]')}
    get barra (){return $('//input[@id="search-input"]')}


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async Search () {
        await (await this.btnSearch).click();
    }


    async EspecialidadOfrecida () {
        await (await this.btnOcupacional).click();
    }

    async barraBusqueda () {
        await (await this.barradebusqueda).click();
    }

    async ingresedatos (barra){
        await(await this.barra).setValue(barra)
        await (await this.btnSearch).click();
    }



    /**
     * overwrite specifc options to adapt it to page object
     */
     open () {
        return browser.url(`/`)
    }
}

module.exports = new MainPage();


/**
 * sub page containing specific selectors and methods for a specific page
 */
class BusquedaPage {
    /**
     * define selectors using getter methods
     */
     get whatsappbtn () { return $('//a[@class="btn-smaller btn-whatsapp btn-whatsapp"]') }
     get btnfisica () { return $('//div/a[1]')}
     get btnlenguage () { return $('//div/a[2]')}
     get btnocupacional () { return $('//div/a[3]')}
     get barra () { return $('//input[@class="form-control padding-right"]')}
    get btnresultado (){ return $('//input[@value="Buscar"]') }

   


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
     async encontrarfisica () {
        await (await this.btnfisica).click();
    }

    async encontrarlenguaje () {
        await (await this.btnlenguage).click();
    }

    async encontrarocupacional () {
        await (await this.btnocupacional).click();
    }
    async ingreseinformacion (barra){
        await(await this.barra).setValue(barra)
        await (await this.btnresultado).click();
    }



    /**
     * overwrite specifc options to adapt it to page object
     */
     open () {
        return browser.url(`/#/search`)
    }
}

module.exports = new BusquedaPage();

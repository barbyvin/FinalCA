/**
 * sub page containing specific selectors and methods for a specific page
 */
 class PaginadePerfil {
    /**
     * define selectors using getter methods
     */
     get perfilbtn () { return $('//a[@class="btn_listing"]') }
    
    async accedaperfil () {
        await (await this.perfilbtn).click();
    }

     open () {
        return browser.url(`/#/search`);
    }
}

module.exports = new PaginadePerfil();
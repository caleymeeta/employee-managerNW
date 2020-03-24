let Employeespage= {}



module.exports = {
    beforeEach: browser => {
        Employeespage = browser.page.pageObjects()
        Employeespage.navigate()

    },
    afterEach: browser => {
        Employeespage
            .end()
    },

    'Add new employee on table': browser => {
        Employeespage
          .useXpath()
         .pause(3000)
         
        browser.elements('xpath','//li[text()="New Employee"]', function(results) {
        if (results.value.length > 0) {
                console.log("lenghth" + results.value.length)
                browser.useXpath()
                //console.log("hiadadadadad------")
                browser.click("//li[text()='New Employee']")
            }
            else { 
                browser.useXpath()
                console.log("lenghth" + results.value.length)
                //console.log("hiadadadadad*********")
                browser.click("//li[@name='addEmployee']")
                 browser.click("//li[text()='New Employee']")
             }
        });
        
       Employeespage.newEmployee_Deatils()
    

    },
    'Delete duplicate employee on table':browser =>{
        Employeespage
        .useXpath()
        .pause(3000)
        browser.elements('xpath','//li[text()="Ruffle"]', function(results) {
            if (results.value.length > 0) {
                    console.log("lenghth" + results.value.length)
                    browser.useXpath()
                    //console.log("hiadadadadad------")
                    browser.click("(//li[text()='Ruffle'])[1]")
                    browser.click("//button[@name='delete']")
                    browser.pause(2000)
                    browser.acceptAlert()
                    browser.pause(2000)
                }
                
            });







    }











}
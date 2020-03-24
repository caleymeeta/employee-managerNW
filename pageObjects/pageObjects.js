var  EmployeeManagerCommands ={

    newEmployee_Deatils: function(){
        this
        .useXpath()
        //.click('@addNew_employee')
        //.pause(3000)
        // .click('@New_employee')
        .pause(3000)
        .clearValue('@employee_name')
        .setValue('@employee_name', "Ruffle")
        .clearValue('@employee_phone')
        .setValue('@employee_phone',"8012345678")
        .clearValue('@employee_Email')
        .setValue('@employee_Email',"Ruff@gmail.com")
        .clearValue('@employee_title')
        .setValue('@employee_title',"bonekeeper")
        .pause(2000)
        .click("@savebutton")
        .pause(1000)
    },

    

}
module.exports = {

    url: 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
   commands:[EmployeeManagerCommands],
    elements: {

        heading: {
            selector: "//span[contains(text(),'Employee Manager')]",
            locateStrategy: 'xpath'
        },
        SearchBar: {
            selector: "//input[@name='searchBox']",
            locateStrategy: 'xpath'

        },
        clearbutton: {

            selector: '//button[@name="clearSearch"]',
            locateStrategy: 'xpath'
        },
        addNew_employee: {
            selector: "//li[@name='addEmployee']",
            locateStrategy: 'xpath'
        },

        New_employee: {
            selector: "//li[text()='New Employee']",
            locateStrategy: 'xpath'
        },
        employee_name: {
            selector: "//input[@name='nameEntry']",
            locateStrategy: 'xpath'

        },

        employee_phone: {
            selector: "//input[@name='phoneEntry']",
            locateStrategy: 'xpath'
        },

        employee_Email: {
            selector: "//input[@name='emailEntry']",
            locateStrategy: 'xpath'
        },


        employee_title: {
            selector: "//input[@name='titleEntry']",
            locateStrategy: 'xpath'
        },

        employee_ID: {
            selector: "//span[@name='employeeID']",
            locateStrategy: 'xpath'
        },

        savebutton: {
            selector: '//button[@name="save"]',
            locateStrategy: 'xpath'
        },

        cancelbutton: {

            selector: '//button[@name="cancel"]',
            locateStrategy: 'xpath'

        },

        deletebutton: {

            selector: '//button[@name="delete"]',
            locateStrategy: 'xpath'

        }



    }


}
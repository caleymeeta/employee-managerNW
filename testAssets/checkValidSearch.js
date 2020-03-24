module.exports = (driver, weatherData) => {
    driver
        .setValue('.enter-location__input', weatherData.search)
        .click('button')
        .getText('.current-weather__location', function (result) {
            driver
                .verify.ok(result.value === weatherData.result, 'My Result of the getText is the same as my search result')
        })
        .verify.containsText('.current-weather__location', weatherData.result)
        .click('button')
    }

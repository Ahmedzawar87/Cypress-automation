require('dotenv').config()

module.exports = {
  e2e: {
    pageLoadTimeout: 120000,
    setupNodeEvents(on, config) {
      config.env.BASE_URL = process.env.BASE_URL
      config.env.USERNAME = process.env.USERNAME
      config.env.PASSWORD = process.env.PASSWORD
      return config
    }
  }
}






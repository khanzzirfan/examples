const { setHeadlessWhen } = require("@codeceptjs/configure");

setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: "./todomvc-tests/**/*_tesdsdt.js",
  output: "./output",
  helpers: {
    WebDriver: {
      url: "http://localhost",
      browser: "chrome",
      smartWait: 5000,
      waitForTimeout: 20000,
      timeouts: {
        implicit: 5000,
        script: 60000,
        "page load": 10000,
      },
    },

    REST: {},

    CustomHelper: {
      require: "./todomvc-tests/helpers/custom.helper.js",
    },
  },

  gherkin: {
    features: "./todomvc-tests/features/*.feature",
    steps: ["./todomvc-tests/step-definitions/create-todos.steps.js"],
  },

  include: {
    TodosPage: "./todomvc-tests/pages/todos.page.js",
  },

  plugins: {
    wdio: {
      enabled: true,
      services: ["selenium-standalone"],
    },
  },

  bootstrap: null,
  mocha: {},
  name: "codecept demo tests",
};

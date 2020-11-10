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
    screenshotOnFail: {
      enabled: true,
    },
    allure: {
      enabled: true,
      outputDir: "./allure-results",
    },
    autoDelay: {
      enabled: true,
      delayBefore: 400,
    },
    retryFailedStep: {
      enabled: true,
      retries: 5,
    },
    reportportal: {
      enabled: false,
      require: "@reportportal/agent-js-codecept",
      token: "0a5dda99-d7dd-4529-bc1f-bb76c98ff723",
      endpoint: "http://localhost:8080/api/v1",
      projectName: "superadmin_personal",
      // projectName: "",
    },
  },

  bootstrap: null,
  mocha: {},
  name: "codecept demo tests",
};

const { setHeadlessWhen } = require("@codeceptjs/configure");

setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: "./todomvc-tests/**/*_test.js",
  output: "./output",
  cleanup: true,
  helpers: {
    Playwright: {
      url: "http://localhost",
      waitForTimeout: 5000,
      show: true,
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
  bootstrap: null,
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
    allure: {
      enabled: true,
    },
    autoDelay: {
      enabled: true,
      delayBefore: 400,
    },
    retryFailedStep: {
      enabled: true,
      retries: 5,
    },
  },
  mocha: {},
  name: "codecept demo tests",
};

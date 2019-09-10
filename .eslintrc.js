module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended", "google"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "babel"
  ],
  "rules": {
    "max-len": ["error", { "code": 120 }],
    "require-jsdoc": "off",
    "no-invalid-this": "off",
  }
};
module.exports = {
  "parserOptions": {
        "ecmaVersion": 2018
    },
  "env": {
    "node": 1,
    "browser": 1
  },
  "globals": {
    "exampleGlobalVariable": true
  },
      "rules": {
          "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
      },
  "plugins": [
  ]
};

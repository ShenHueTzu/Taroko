module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "commonjs": true,
        "es6": true,
        "node": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
    "ecmaVersion": 2020, 
    "ecmaFeatures": {
      "jsx": true, 
      "arrowFunctions": true,
    },
    "sourceType": "module" 
  },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/prop-types": 0
    }
};

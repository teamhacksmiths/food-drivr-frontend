module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react"
    ],
    "rules" : {
        "no-console": 0,
        // "indent": [1, 'tab'],
        "react/jsx-indent": 0,
        "react/jsx-indent-props": 0,
        "max-len": 0,
		"comma-dangle": 0,
		"no-underscore-dangle": 0
    },
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true,
        "modules": true
      }
    }
};

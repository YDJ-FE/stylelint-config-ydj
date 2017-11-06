/* eslint-disable */
// @ts-nocheck

module.exports = {
    ignoreFiles: ["node_modules"],
    extends: "../index.js",    
    plugins: ["stylelint-scss"],
    rules: {   
        "at-rule-no-unknown": null,
        "scss/at-rule-no-unknown": true      
    }
  };
  
/* eslint-disable */
// @ts-nocheck

const path = require('path')

module.exports = {
    ignoreFiles: ["node_modules"],
    extends: "stylelint-config-standard",
    processors: [path.join(__dirname, "stylelint.processor.js")],
    plugins: ["stylelint-order"],
    rules: {
      "indentation": 4,
      "no-empty-source": null,
      "property-no-vendor-prefix": true,
      "value-no-vendor-prefix": true,
      "at-rule-no-vendor-prefix": true,
      "selector-no-vendor-prefix": true,
      "media-feature-name-no-vendor-prefix": true,
      // "at-rule-no-unknown": null,      
      "order/order": [
        "dollar-variables",
        "custom-properties",
        "declarations",
        "rules",
        "at-rules"
      ],
      "order/properties-order": [
        "display",
        "float",
        "position",
        "left",
        "top",
        "right",
        "bottom",
        "width",
        "height",
        "padding",
        "margin",
        "border",
        "background",
        "color",
        "font",
        "text"
      ]
    }
  };
  
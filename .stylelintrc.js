module.exports = {
  extends: [
    "stylelint-config-recommended-scss",
    "@mate-academy/stylelint-config"
  ],
  plugins: [
    "stylelint-scss"
  ],
  rules: {
    "font-family-no-missing-generic-family-keyword": null
  }
};

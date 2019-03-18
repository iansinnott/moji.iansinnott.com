const { language } = require('emoji-annotations');

module.exports = (chr) => {
  return Object.keys(language).reduce((agg, k) => {
    return {
      ...agg,
      [k]: language[k][chr] || []
    };
  }, {})
};

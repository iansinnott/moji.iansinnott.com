const words = require('./emoji_words.json');

module.exports = (chr) => {
  const list = words[chr];

  if (!list) return [];

  list.slice().sort();

  return list;
};

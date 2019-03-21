import { language } from 'emoji-annotations';

import { path } from './utils.js';
import supplemental from './supplemental_annotations.json';

const lookup = chr => {
  return Object.keys(language).reduce((agg, k) => {
    let results = language[k][chr] || [];
    const supplement = path([k, chr], supplemental);

    if (supplement) results = results.concat(supplement);

    return {
      ...agg,
      [k]: results,
    };
  }, {});
};

export default lookup;

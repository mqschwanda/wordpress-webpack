export * as theme from './theme';

export { default as initDevPlugins } from './development';

export { default as get } from './get';

export {
  encodeHtml,
  decodeHtml,
} from './html-encoders';

export {
  pushPath,
  ConnectedChildren,
} from './react-router';

export {
  default as WP,
  getPosts,
  getPost,
  getPages,
  getPage,
  getTags,
  getTag,
  getCategories,
} from './wp-api';

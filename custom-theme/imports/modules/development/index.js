/**
 * Fix images that are not on loacalhost
 * @param {String} src
 * @returns {Promise}
 */
const fixImageSrc = img => new Promise(((resolve, reject) => {
  const tester = new Image();
  tester.addEventListener('load', resolve);
  tester.addEventListener('error', reject);
  tester.src = img.getAttribute('src');
})).catch((event) => { // image did not load
  // const src = event.target.getAttribute('src');
  img.setAttribute('src', 'http://via.placeholder.com/200x200');
});

/**
 * Fix image load.
 * @param {String} link
 */
function fixLinkHref(link) {
  const href = link.getAttribute('href');
  if (href) link.setAttribute('href', href.replace('localhost:8888', 'localhost:3000'));
}


function DOMContentLoaded() {
  if (window.location.href.indexOf('localhost')) {
    [...document.getElementsByTagName('a')].forEach(fixLinkHref);
    [...document.getElementsByTagName('img')].forEach(fixImageSrc);
  }
}


export const initDevPlugins = () => {
  document.addEventListener('DOMContentLoaded', DOMContentLoaded, false);
};
export default initDevPlugins;

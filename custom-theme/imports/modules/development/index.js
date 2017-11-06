const fixLinkHref = () => {
  if (window.location.href.indexOf('localhost')) {
    const links = [...document.getElementsByTagName('a')];
    links.forEach((link) => {
      const href = link.getAttribute('href');
      if (href && href.indexOf('lovalhost')) link.setAttribute('href', href.replace('8888', '3000'));
    });
  }
};

export const initDevPlugins = () => {
  document.addEventListener('DOMContentLoaded', fixLinkHref, false);
  if (module && module.hot) module.hot.accept();
};
export default initDevPlugins;

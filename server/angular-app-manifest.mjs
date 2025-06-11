
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://cirilarockiaraj.github.io/profile/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/profile/home",
    "route": "/profile"
  },
  {
    "renderMode": 2,
    "route": "/profile/home"
  },
  {
    "renderMode": 2,
    "route": "/profile/about"
  },
  {
    "renderMode": 2,
    "route": "/profile/skills"
  },
  {
    "renderMode": 2,
    "route": "/profile/resume"
  },
  {
    "renderMode": 2,
    "route": "/profile/project"
  },
  {
    "renderMode": 2,
    "route": "/profile/contact"
  },
  {
    "renderMode": 2,
    "route": "/profile/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5298, hash: 'b535769f05cb89f3886ea5693d5143e454fa63dcb9acb208c6382ac22351740f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1127, hash: '81ece85f97c6b8873d793f20efb38fd2ba5e5c4af31b6fe78f78fc58265d6a39', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 38001, hash: '01cb8c351f4db100ed4b54cfce5af2877d7e447961bf24f8ccc41f88473eecea', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 40396, hash: 'aa77e7d549c6f4ece6088b3face8c12e7f4b45f349a1de87a2bba876a1f55f57', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 40698, hash: '16a18811ae05e43243a3147759da449e7ced18704d5f2ee0824af30022f05789', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 74790, hash: 'eec6c7dafb34049ded16ef3ba13b8ce7f15144e46060e59c990ce5f15ec3e196', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'project/index.html': {size: 41885, hash: '4efd2aa70af18a2120848fde48cafb90c3146b64f188bdf1ae1d11bba62a442d', text: () => import('./assets-chunks/project_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 82077, hash: '282d8923d6e80e8449702ca39518cc5276c6546e331bb94ef823478ba2de9520', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-4QYUZORA.css': {size: 244518, hash: 'chwMWHNhfMA', text: () => import('./assets-chunks/styles-4QYUZORA_css.mjs').then(m => m.default)}
  },
};

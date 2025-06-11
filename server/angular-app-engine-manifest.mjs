
export default {
  basePath: 'https://cirilarockiaraj.github.io/profile',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};

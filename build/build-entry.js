const fs = require('fs-extra');
const path = require('path');
const uppercamelize = require('uppercamelcase');
const Components = require('./get-components')();
const packageJson = require('../package.json');

const version = process.env.VERSION || packageJson.version;
const tips = `/* eslint-disable */
// This file is auto gererated by build/build-entry.js`;

function buildEntry() {
  const uninstallComponents = [];

  const importList = Components.map(
    (name) => `import ${uppercamelize(name)} from './${name}';`
  );
  const exportList = Components.map((name) => `${uppercamelize(name)}`);
  const installList = exportList.filter(
    (name) => !~uninstallComponents.indexOf(uppercamelize(name))
  );
  const content = `${tips}
import { App } from 'vue';
${importList.join('\n')}

declare global {
  interface Window {
    app?: App;
  }
}

const version = '${version}';
const components: any[] = [
  ${installList.join(',\n  ')}
];

const install = (app: App) => {
  components.forEach((Component) => {
    app.component(Component.name, Component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.app) {
  install(window.app);
}

export {
  install,
  version,
  ${exportList.join(',\n  ')}
};

export default {
  install,
  version
};
`;

  fs.writeFileSync(path.join(__dirname, '../src/index.ts'), content);
}

buildEntry();

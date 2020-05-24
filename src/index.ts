/* eslint-disable */

import Button from './button';
import { App } from 'vue';

declare global {
  interface Window {
    app?: App;
  }
}

const components: any[] = [Button];

const install = (app: App) => {
  components.forEach((Component) => {
    app.component(Component.name, Component);
  });
};

if (typeof window !== 'undefined' && window.app) {
  install(window.app);
}

export { install, Button };

export default {
  install,
};

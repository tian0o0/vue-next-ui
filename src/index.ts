/* eslint-disable */

import VNButton from "./button";
import { App } from "vue";

declare global {
  interface Window {
    app?: App;
  }
}

const components: any[] = [VNButton];

const install = (app: App) => {
  components.forEach((c) => {
    app.component(c.name, c);
  });
};

// if (typeof window !== 'undefined' && window.app) {
//   install(window.app);
// }

export { install, VNButton };

export default {
  install,
};

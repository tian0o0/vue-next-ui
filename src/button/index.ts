import { App } from "vue";
import VNButton from "./button";

(VNButton as any).install = (app: App) => {
  app.component((VNButton as any).name, VNButton as any);
};

// export { default } from './button';

export default VNButton;

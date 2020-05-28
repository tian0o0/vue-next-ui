import { h } from 'vue';
// import Button from "../src/button";
import { VNButton } from '../es';
export default () => {
  return h(
    VNButton as any,
    {
      color: 'linear-gradient(to right, #4bb0ff, #6149f6)',
      ripple: true,
      onClick: (data) => {
        console.log(data);
      },
      style: { color: 'black' },
    },
    () => '按钮'
  );
};

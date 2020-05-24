import { h } from 'vue';
import Button from '../src/button';

export default () => {
  return h(
    Button,
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

// import { ButtonProps } from './type'
import { defineComponent, h } from 'vue';
import { createBEM } from '../../utils/bem';

export type ButtonType = 'default' | 'primary' | 'info' | 'warning' | 'danger';

export type ButtonSize = 'large' | 'normal' | 'small' | 'mini';

export type ButtonProps = {
  type?: ButtonType;
  size?: ButtonSize;
  text?: string;
  icon?: string;
  block?: boolean;
  plain?: boolean;
  round?: boolean;
  square?: boolean;
  loading?: boolean;
  hairline?: boolean;
  disabled?: boolean;
  loadingText?: string;
  ripple?: boolean;
  color?: string;
};

const buttonProps = {
  type: { type: String, default: 'default' },
  size: { type: String, default: 'normal' },
  text: String,
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  icon: { type: String, default: '' },
} as any;

export default defineComponent<ButtonProps>({
  name: 'TButton',
  props: buttonProps,
  setup: (props, { slots, attrs }) => () => {
    const {
      type,
      size,
      text,
      icon,
      block,
      plain,
      round,
      square,
      loading,
      hairline,
      disabled,
      loadingText,
      ripple,
      color,
    } = props;

    const bem = createBEM('button');
    const classes = [
      bem([
        type,
        size,
        {
          disabled,
          hairline,
          block,
          plain,
          round,
          square,
          ripple: ripple && !disabled && !loading,
        },
      ]),
      { '-hairline--surround': hairline },
    ];
    return h(
      'button',
      {
        style: attrs.style,
        class: classes,
      },
      slots.default?.()
    );
  },
});

import { defineComponent, h, VNode } from "vue";
import { createBEM } from "../../utils/bem";
import { WHITE } from "../../utils/color";

export type ButtonType = "default" | "primary" | "info" | "warning" | "danger";

export type ButtonSize = "large" | "normal" | "small" | "mini";

export type ButtonProps = {
  type?: ButtonType;
  size?: ButtonSize;
  text?: string;
  // icon?: string;
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
  type: { type: String, default: "primary" },
  size: { type: String, default: "normal" },
  text: { type: String, default: "" },
  // icon: { type: String, default: '' },
  block: { type: Boolean, default: false },
  plain: { type: Boolean, default: false },
  round: { type: Boolean, default: false },
  square: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  hairline: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  loadingText: { type: String, default: "加载中..." },
  ripple: { type: Boolean, default: false },
  color: { type: String, default: "" },
} as any;

export default defineComponent<ButtonProps>({
  name: "TButton",
  props: buttonProps,
  emits: ["click"],
  setup: (props, { slots, attrs, emit }) => () => {
    const {
      type,
      size,
      text,
      // icon,
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

    // const style: {[propName: string]: string | number} = {};
    // Record(https://www.leevii.com/2018/10/record-in-typescript.html)
    const style: Record<string, string | number> = {};
    if (color) {
      if (plain) {
        style.color = color;
      } else {
        style.color = WHITE;
        style.background = color;
      }
      // hide border when color is linear-gradient
      if (color.indexOf("gradient") !== -1) {
        style.border = 0;
      } else {
        style.borderColor = color;
      }
    }

    const bem = createBEM("button");
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
      { "vn-hairline--surround": hairline },
    ];

    function onClick(event: Event): void {
      if (!loading && !disabled) {
        emit("click", event);
      }
    }

    function Content(): VNode[] {
      const content = [];
      let _text;
      if (loading) {
        _text = loadingText;
      } else {
        _text = slots.default?.() || text;
      }

      if (_text) {
        content.push(h("span", { class: bem("text") }, _text));
      }

      return content;
    }

    return h(
      "button",
      {
        style: style,
        class: classes,
        onClick: onClick,
      },
      Content()
    );
  },
});

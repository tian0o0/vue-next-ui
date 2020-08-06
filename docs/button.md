# Button

### Install

```javascript
import { Button } from 'vue-next-ui';

Vue.use(Button);
```

## Usage

### Type

```html
<vn-button type="default">Default</vn-button>
<vn-button type="primary">Primary</vn-button>
<vn-button type="info">Info</vn-button>
<vn-button type="danger">Danger</vn-button>
<vn-button type="warning">Warning</vn-button>
```

### Ripple

```html
<vn-button type="primary" ripple>Primary</vn-button>
```

### Raised :sparkles:

```html
<vn-button type="primary" raised>Raised</vn-button>
```

> Not working when set `plain`

### Plain

```html
<vn-button plain type="primary">Primary</vn-button>
<vn-button plain type="danger">Danger</vn-button>
```

### Hairline

```html
<vn-button plain hairline type="primary">Hairline</vn-button>
<vn-button plain hairline type="danger">Hairline</vn-button>
```

### Disabled

```html
<vn-button disabled type="primary">Diabled</vn-button>
<vn-button disabled type="danger">Diabled</vn-button>
```

### Loading

```html
<vn-button loading type="primary" />
<vn-button loading type="primary" loading-type="spinner" />
<vn-button loading type="danger" loading-text="Loading..." />
```

### Shape

```html
<vn-button square type="primary">Square</vn-button>
<vn-button round type="danger">Round</vn-button>
```

### Icon

```html
<vn-button icon="star-o" type="primary" />
<vn-button icon="star-o" type="primary">Button</vn-button>
<vn-button
  icon="https://ae01.alicdn.com/kf/Hfa3f8503c37e4da7862d831690178610h.png"
  type="danger"
  >Button</vn-button
>
```

### Size

```html
<vn-button type="primary" size="large">Large</vn-button>
<vn-button type="primary" size="normal">Normal</vn-button>
<vn-button type="primary" size="small">Small</vn-button>
<vn-button type="primary" size="mini">Mini</vn-button>
```

## API

### Props

| Attribute    | Description                                                       | Type              | Default    |
| ------------ | ----------------------------------------------------------------- | ----------------- | ---------- |
| type         | Can be set to `primary` `info` `warning` `danger`                 | `string`          | `default`  |
| size         | Can be set to `large` `small` `mini`                              | `string`          | `normal`   |
| text         | Text                                                              | `string`          | -          |
| icon         | Left Icon                                                         | `string`          | -          |
| tag          | HTML Tag                                                          | `string`          | `button`   |
| native-type  | Native Type Attribute                                             | `string`          | `''`       |
| plain        | Whether to be plain button                                        | `boolean`         | `false`    |
| block        | Whether to set display block                                      | `boolean`         | `false`    |
| round        | Whether to be round button                                        | `boolean`         | `false`    |
| square       | Whether to be square button                                       | `boolean`         | `false`    |
| disabled     | Whether to disable button                                         | `boolean`         | `false`    |
| hairline     | Whether to use `0.5px` border                                     | `boolean`         | `false`    |
| ripple       | Whether to allow rippe(when `loading`and`disabled` not effective) | `boolean`         | `true`     |
| loading      | Whether show loading status                                       | `boolean`         | `false`    |
| loading-text | Loading text                                                      | `string`          | -          |
| loading-type | Loading type, can be set to `spinner`                             | `string`          | `circular` |
| loading-size | Loading icon size                                                 | `string`          | `20px`     |
| url          | Link URL                                                          | `string`          | -          |
| to           | Target route of the link, same as to of vue-router                | `string | object` | -          |
| replace      | If true, the navigation will not leave a history record           | `boolean`         | `false`    |

### Events

| Event | Description                                             | Arguments    |
| ----- | ------------------------------------------------------- | ------------ |
| click | Triggered when click button and not disabled or loading | event: Event |

# Utilix Embed SDK

> Drop any Utilix tool into your website with a single script tag or npm import.

[![npm](https://img.shields.io/npm/v/@utilix-tech/embed)](https://www.npmjs.com/package/@utilix-tech/embed)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**[utilix.tech](https://utilix.tech)** · [Docs](https://docs.utilix.tech/embed) · [npm](https://www.npmjs.com/package/@utilix-tech/embed)

---

## What is this?

The Utilix Embed SDK lets you embed any of the 95+ Utilix tools directly into your own site — documentation, dashboards, landing pages, or internal tools. Tools render as self-contained interactive widgets with no iframe overhead.

---

## Installation

### Script tag (no bundler)

```html
<script src="https://cdn.utilix.tech/embed/v1/utilix-embed.min.js"></script>
```

### npm

```bash
npm install @utilix-tech/embed
```

### CDN with ES module

```html
<script type="module">
  import { UtilixEmbed } from 'https://cdn.utilix.tech/embed/v1/utilix-embed.esm.js'
</script>
```

---

## Quick Start

### Declarative (HTML attribute)

```html
<!-- Renders a JSON formatter widget in-place -->
<div data-utilix-tool="json-formatter"></div>

<script src="https://cdn.utilix.tech/embed/v1/utilix-embed.min.js"></script>
```

### Programmatic

```html
<div id="my-tool"></div>

<script type="module">
  import { UtilixEmbed } from '@utilix-tech/embed'

  UtilixEmbed.mount('#my-tool', {
    tool: 'json-formatter',
    theme: 'auto',       // 'light' | 'dark' | 'auto'
    height: '500px',
    onReady: () => console.log('Tool loaded'),
  })
</script>
```

### React

```tsx
import { UtilixTool } from '@utilix-tech/embed/react'

export function MyPage() {
  return (
    <UtilixTool
      tool="base64-encoder"
      theme="auto"
      height={400}
      className="my-tool"
    />
  )
}
```

### Vue

```vue
<template>
  <UtilixTool tool="uuid-generator" theme="dark" />
</template>

<script setup>
import { UtilixTool } from '@utilix-tech/embed/vue'
</script>
```

---

## Configuration

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `tool` | `string` | required | Tool slug (see list below) |
| `theme` | `'light' \| 'dark' \| 'auto'` | `'auto'` | Color scheme |
| `height` | `string \| number` | `'auto'` | Widget height (`'auto'` grows with content) |
| `width` | `string \| number` | `'100%'` | Widget width |
| `locale` | `string` | `'en'` | UI language |
| `defaultInput` | `string` | `''` | Pre-fill the input field |
| `hideHeader` | `boolean` | `false` | Hide the tool name/description bar |
| `hideFooter` | `boolean` | `false` | Hide the "Powered by Utilix" footer |
| `apiKey` | `string` | `''` | Your API key (required for Pro tools) |
| `onReady` | `() => void` | — | Called when tool is mounted and ready |
| `onChange` | `(output: unknown) => void` | — | Called on every output change |
| `onError` | `(err: Error) => void` | — | Called on tool errors |

---

## Pre-filling Input

Pass a default value to pre-fill the tool's input on load:

```js
UtilixEmbed.mount('#encoder', {
  tool: 'base64-encoder',
  defaultInput: 'Hello, world!',
})
```

---

## Listening to Output

```js
UtilixEmbed.mount('#formatter', {
  tool: 'json-formatter',
  onChange: (output) => {
    console.log('Formatted JSON:', output.result)
  },
})
```

---

## Theming

The embed respects the user's OS dark/light preference by default (`theme: 'auto'`). To force a specific theme:

```js
UtilixEmbed.mount('#tool', { tool: 'hash', theme: 'dark' })
```

You can also override CSS custom properties on the container:

```css
#my-tool {
  --utilix-accent: #7c3aed;
  --utilix-radius: 8px;
  --utilix-font: 'Inter', sans-serif;
}
```

---

## iFrame Fallback

For environments where JavaScript embedding isn't possible (email templates, no-script pages), use the iframe URL:

```html
<iframe
  src="https://utilix.tech/embed/json-formatter?theme=dark"
  width="100%"
  height="500"
  frameborder="0"
  allow="clipboard-write"
></iframe>
```

Available iframe params: `theme`, `input` (URL-encoded default input), `hideHeader`, `hideFooter`.

---

## Available Tools

All 95+ tools are embeddable. Popular picks:

| Slug | Tool |
|------|------|
| `json-formatter` | JSON Formatter & Validator |
| `base64-encoder` | Base64 Encoder/Decoder |
| `hash` | Hash Generator (MD5, SHA-256, etc.) |
| `uuid-generator` | UUID Generator |
| `password-generator` | Password Generator |
| `jwt-decoder` | JWT Decoder |
| `url-encoder` | URL Encoder/Decoder |
| `color-picker` | Color Picker & Converter |
| `cron-parser` | Cron Expression Parser |
| `regex-tester` | Regex Tester |
| `diff-viewer` | Text Diff |
| `markdown-preview` | Markdown Preview |
| `sql-formatter` | SQL Formatter |
| `yaml-validator` | YAML Validator |
| `estimate-tokens` | Token Estimator |
| `detect-pii` | PII Detector |

See the full list at [utilix.tech/tools](https://utilix.tech/tools).

---

## Examples

See the [`examples/`](./examples/) directory:

- [`examples/html-script-tag.html`](./examples/html-script-tag.html) — Zero-config script tag embed
- [`examples/multi-tool-dashboard.html`](./examples/multi-tool-dashboard.html) — Multiple tools on one page
- [`examples/react-component.tsx`](./examples/react-component.tsx) — React integration
- [`examples/vue-component.vue`](./examples/vue-component.vue) — Vue integration
- [`examples/programmatic-control.html`](./examples/programmatic-control.html) — Mount/unmount, onChange, pre-fill

---

## Browser Support

Chrome 90+, Firefox 88+, Safari 14+, Edge 90+.

---

## License

MIT

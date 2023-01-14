A typesafe UI library for Tailwind CSS and Next.js

---
Steps to setup:

1. Add this config to your tailwind.config.js file. You choose your theme colors.

```js
 theme: {
    extend: {
      colors: {
        primary:"#1f2937",
        secondary:"#f9fafb",
        tertiary:"#9ca3af",
      }
    },
  },
```

2. Add the following directory to your `content` array in tailwind.config.js

```js
"./node_modules/tnt-ui-kit/dist/*.{js,ts,jsx,tsx}",
```

Next steps TBD.

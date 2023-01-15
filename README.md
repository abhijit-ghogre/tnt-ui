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

3. Add your font in `_app.tsx` file like this:

```js
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Raleway } from "@next/font/google";

const font = Raleway({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  );
}
```

---

Components Progress:

Form:
-[X] Button
-[ ] Input
-[ ] Radio
-[ ] Checkbox
-[ ] Button Radio
-[ ] Switch
-[ ] Select
-[ ] Range

Layout:
-[X] ResponsiveRow
-[X] Text

Components:
-[ ] Tabs
-[ ] Card
-[ ] Divider
-[ ] Modal
-[ ] Tooltip
-[ ] Sidebar
-[ ] Header
-[ ] AlertBar
-[ ] Badge
-[ ] TntImage
-[ ] Accordion
-[ ] Breadcrumb
-[ ] Carousal
-[ ] Table
-[ ] Progress
-[ ] WittySpinner
-[ ] Toast
-[ ] QuantityStepper
-[ ] Pagination
-[ ] YT Video

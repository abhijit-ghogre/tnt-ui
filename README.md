A typesafe UI library for Tailwind CSS and Next.js built on top of DaisyUI

---
Steps to set-up:

1. Follow DaisyUI docs to set-up a theme

2. Add the following directory to your `content` array in tailwind.config.js

```js
"./node_modules/tnt-ui-kit/dist/*.{js,ts,jsx,tsx}",
```

3. Add your font in `_app.tsx` file like this for adding fonts:

```js
import "../styles/globals.css";
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

Additional Components and Utilities:

Form:

- [X] Button Radio
- [X] Select (react-select based)

Layout:

- [X] ResponsiveRow
- [X] Text

Components:

- [X] Modal
- [X] Drawer
- [X] Collapse/Accordion
- [X] WittySpinner
- [X] QuantityStepper
- [ ] Carousal
- [ ] Table
- [ ] Progress
- [ ] Toast
- [ ] Pagination
- [ ] YT Video

# Responsive React Navigation Menu

## Description

This is a navigation menu that is vertically oriented on mobile or small screens, and horizontally oriented on desktop.

The three menu items - "Journeys", "Photography" and "Resouces" 

  - all contains submenu items. When hovering or tabbing over a menu item, the corresponding submenu will be displayed;

  - transition animations apply to these elements;

  - menu item only has href attribute, no routing at all;
  
  - When click on a menu item that has link (href in this case), the menu will be closed;

Screen break points: `500px`, `900px`.

The project has been deployed to the website: https://xwshiba.github.io/react-navbar/

## Tech Stacks
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). 

This project is written using React, TypeScript and CSS.

## Accessibility

- Any element that needs to gain focus (such as a button or a navigation item) have a minimum height/width of 54px or equivalent.

-  A skip link to bypass navigation is included.

- All interactions can be done with keyboard, in addition to any mouse support.

- The site have WCAG level AA color contrast.

- If users prefer reduce motion, transition effects will not take place.

- ARIA: no added ARIA labels.

## License

- All icons are from [css.gg](https://css.gg/). MIT License information can be found [here](https://css.gg/doc/licence).

- This project is using MIT License.

---

## For Developers


## Getting Started

First, navigate to the inside `react-navbar` folder:

```bash
cd react-navbar
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Key Files
- `src/app/components`: contains react components.

- `src/styles`: contains styles for the compoenents. The files are wrapped using css module, which is recommended by next.js.

- `data.ts`: contains a sitemap object.

- `global.css`: contains the global css styles.

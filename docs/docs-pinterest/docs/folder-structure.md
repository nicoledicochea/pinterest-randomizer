## Folder Structure for Pinterest Image Randomizer

Here's a common and effective folder structure for your React, TypeScript, and Node.js application, along with a brief description of each key file and folder. This structure helps keep the client-side (front-end) and server-side (back-end) code separate and organized.

-----

### 1\. Root Directory

```
/pinterest-inspirer
├── /client
├── /server
├── package.json
├── README.md
```

  * **/client**: This folder will contain all your front-end **React** code.
  * **/server**: This folder will contain all your back-end **Node.js** code.
  * **package.json**: This file manages your project's dependencies for both the front-end and back-end. You can use two separate `package.json` files within the `client` and `server` folders for better separation, or a single one at the root if you prefer.
  * **README.md**: A file to describe your project, how to set it up, and how to run it.

-----

### 2\. Client Folder (`/client`)

```
/client
├── /src
│   ├── /components
│   ├── /hooks
│   ├── /pages
│   ├── /styles
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
```

  * **/src**: The main source directory for all your React code.
  * **src/components**: This is where you'll store all your reusable React components.
      * **Button.tsx**: A reusable button component.
      * **BoardCard.tsx**: A component to display a single Pinterest board.
      * **ImageDisplay.tsx**: The component that displays the randomized image.
  * **src/hooks**: For custom **React hooks** that encapsulate logic, like a hook for fetching data from the API.
      * **usePinterestBoards.ts**: A custom hook to fetch a user's boards.
      * **useRandomPin.ts**: A hook to handle the logic of fetching pins and selecting a random one.
  * **src/pages**: For your main application pages, which are typically composed of multiple components.
      * **HomePage.tsx**: The landing page with the login button.
      * **BoardSelectionPage.tsx**: The page where the user selects a board.
      * **InspirationPage.tsx**: The page where the random images are displayed.
  * **src/styles**: This is where your global styles and Tailwind's input file will live.
      * **index.css**: The main CSS file where you import Tailwind's base styles.
  * **App.tsx**: The main **root component** of your React application.
  * **main.tsx**: The entry point of your React application, which renders the `App.tsx` component.
  * **tailwind.config.js**: The configuration file for **Tailwind CSS**, where you can customize your design system.
  * **tsconfig.json**: The configuration file for **TypeScript** in your front-end project.

-----

### 3\. Server Folder (`/server`)

```
/server
├── /routes
├── index.ts
├── tsconfig.json
```

  * **/routes**: A folder to organize your API endpoints. Each file can represent a different resource.
      * **pinterest.ts**: All routes related to the Pinterest API, such as getting boards and pins.
  * **index.ts**: The main entry file for your **Node.js Express server**. This is where you'll set up your server, define middleware, and connect to your routes.
  * **tsconfig.json**: The configuration file for **TypeScript** in your back-end project.
### Phase 1: Planning and Setup
* You need to get an app approved for "Trial Access" to the Pinterest API. This is not automatic; you have to apply and get approved.
* Read and understand the Pinterest **API Terms of Service** and **Developer Policy**.
* Create a new React and TypeScript project using **Vite**.
* Install and configure **Tailwind CSS**.
* Set up your Node.js and Express.js server in the `server` folder.
* Configure environment variables for your Pinterest API keys.

---

### Phase 2: MVP Development

#### Back-end (Node.js)
* Create an Express.js server entry point (`server/index.ts`).
* Set up a simple endpoint for the **OAuth 2.0 authentication** flow.
* Implement a proxy endpoint to fetch a list of a user's boards (`/boards`).
* Implement a proxy endpoint to fetch all pins from a selected board (`/boards/{board_id}/pins`).

#### Front-end (React + TypeScript)
* Create a simple **Authentication component** with a button to initiate the Pinterest login.
* Develop a **Board Selection component** to display the fetched boards and allow a user to select one.
* Build an **Image Display component** to show the random image.
* Implement the logic to select a random image from the pins fetched from the back-end.
* Add a "Randomize" button to trigger the selection logic.
* Use a **caching strategy** (e.g., in-memory or browser local storage) to minimize Pinterest API requests.

#### Styling
* Use **Tailwind CSS** to style all of your components for a clean user interface.

---

### Phase 3: Post-MVP & Improvements
* Enhance the **front-end logic** to randomize and display five pictures at once.
* Update the **back-end** and **front-end** to handle selections from multiple boards.
* Add **error handling** for API requests and display user-friendly messages.
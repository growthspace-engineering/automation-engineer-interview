<p align="center">
  <a href="https://github.com/growthspace-engineering" target="blank"><img src="GS-logo.svg" width="250" alt="GrowthSpace Logo" />
  </a>
  <h2 align="center">
    @growthspace-engineering/automation-engineer-interview
  </h2>
</p>
<p align="center">
  Automation Home Assignment for GrowthSpace
</p>
<hr>

## Prerequisites

Before getting started, ensure you have the following installed:
- Node.js (Version 20.x or later)

This project is compatible across different operating systems. Administrator rights might be required for certain npm installations.

## Getting Started

Test an Arcade Game Playlist application: https://arcade.kibibit.duckdns.org/

This application displays a list of games and includes a few by default.

## Application Main Sections

| Feature                            | Description                          | Screenshot                             |
|------------------------------------|--------------------------------------|----------------------------------------|
| Show all games in the collection   | Main screen displaying all games.    |                                        |
| Enter edit mode                    | Allows adding or deleting games.     | <img src="screenshots/edit-mode.png" width="250" alt="Edit Mode"> |
| **[Edit Mode]** Add new game       | Adds a new game to the collection.   | <img src="screenshots/add-game-btn.png" width="250" alt="Add Game Button"> |
| **[Edit Mode]** Delete existing game | Deletes a game from the collection. | <img src="screenshots/delete-game.png" width="250" alt="Delete Game"> |
| **[Edit Mode]** Exit edit mode     | Exits the edit mode.                 | <img src="screenshots/close-edit-mode.png" width="250" alt="Close Edit Mode"> |
| **(BONUS)** [Attract Mode](https://en.wiktionary.org/wiki/attract_mode)     | Screen saver that shows games in a roulette, switching every few minutes. It should spin the game list and stop on a game for 1-2 minutes, showing that game's details, and then spin again | <img src="screenshots/attract-mode-btn.png" width="250" alt="Attract Mode Button"> |

## Backend API for Prep & Teardown

Works with a backend application. Swagger documentation: https://arcade.kibibit.duckdns.org/api/docs

## Assignment Goals (🕒 3-4 hours):

- Implement critical test cases for application features:
    - Edit Mode
    - Adding a game
    - Deleting a game
    - Main View (View All Collection Games)
    - Game Details Modal
- Include prep and teardown for each test, preferably using API calls, to manage test data.
- Aim for minimal code duplication and a scalable architecture.
- Clean, readable code

## Bonus Goals (🕒 1-1.5 hours):

- Integrate at least one advanced Playwright feature (e.g., visual testing, lighthouse, testing multiple screen sizes). Create at least two tests using this feature.
- Write tests for the Attract Mode screensaver.

## Running the Project

### Setup
1. Install Project Dependencies
    ```bash
    npm install
    ```

2. Install playwright's browsers
    ```bash
    npm run playwright:install
    ```

3. Run tests with
    ```bash
    npm run test
    ```
    or run them interactively with

    ```bash
    npm run test:ui
    ```

## About Playwright
See the playwright documentation for more.
Some links to get you started:
- [Writing Tests](https://playwright.dev/docs/writing-tests)
- [Generating Tests](https://playwright.dev/docs/codegen-intro)
- [Running and Debugging Tests](https://playwright.dev/docs/running-tests)

## Submission Guidelines

<!-- You have two options for submitting your completed assignment: -->

<!-- 1. Fork this project and submit a link to a public repository containing your solution. Please include a verbal explanation of your work in the email submitting the home assignment. -->
Clone the project and send a zip file containing the completed assignment and a verbal explanation by email.

**:warning: Do not create a public fork\clone of this repository :warning:**

Include both Neil and Christina in the Email (See contact information below)

## Troubleshooting

If you encounter any technical issues or have questions regarding the assignment, please contact Neil Kalman. For contact details, see the information provided at the end of this document.

---

## Contact Information

- **Neil Kalman**
  - Email: neil.kalman@growthspace.com
  - Phone: 0523531234
  - Role: Tech-Lead; Contact for technical issues and assignment questions.
  
- **Christina Mattar**
  - Email: christina.mattar@growthspace.com
  - Phone: 0505737266
  - Role: Talent Acquisition Specialist; Contact for process-related questions and general questions.

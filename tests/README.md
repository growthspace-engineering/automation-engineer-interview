<p align="center">
  <a href="https://github.com/growthspace-engineering" target="blank"><img src="logo-white.svg" width="250" alt="Logo" />
  </a>
  <h2 align="center">
    @GrowthSpace/qa-interview-e2e
  </h2>
</p>
<p align="center">
  Automation Home Assignment for GrowthSpace
</p>
<hr>

## Getting Started

We're going to test an Arcade Game Playlist application: http://arcade.kibibit.duckdns.org/

This application shows a list of games and comes with a few by default

The application can:
- show all games in the collection
- enter edit mode (which will allow you to add games or delete games)
- add new game
- delete existing game

it works with a backend application with the following swagger documentation: http://arcade.kibibit.duckdns.org/api/docs


Assignment Goals:
- Detailed STD for planned tests
- Testing application features:
  - Edit Mode
  - Add a game
  - Delete a game
  - Main View (View All Collection Games)
  - Game Details Modal
- Should have prep and teardown for each test preferably using API calls. Tests should create the data their need and clean after themselves :-)
- minimal code duplication
- architecture to support more tests on existing pages, modals, etc.

Bonus Goals:
- Integrate at least 1 feature for playwright. It can be visual testing, lighthouse, etc. Create at least 2 tests using it
- There's an Attract Mode for the site. write a test for that part of the application
  
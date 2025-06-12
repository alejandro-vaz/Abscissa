# *Abscissa* changelog
## *Abscissa* 0.0.1 `1-0-0`
---
- [X] (Major) Initial release.
### *Abscissa* 0.1.9 `0-2-6`
- [X] (Patch) Changed problems *JSON* structure.
- [X] (Minor) Improved *content* element *ID* inside elements structure.
- [X] (Patch) Changed codes for classification to *base-*$36$.
- [X] (Patch) Remade query handling and requisites.
- [X] (Patch) Remade website titles.
- [X] (Patch) Improved *LaTeX* math parsing via `website/render.js`.
- [X] (Patch) Added comments to all code.
- [X] (Minor) Remade `website/style.less`.
### *Abscissa* 0.2.0 `0-0-8`
- [X] (Patch) Increase `.main` `#content` size to `1000px`.
- [X] (Patch) Remove `#content` border if empty.
- [X] (Patch) Remade margin handling.
- [X] (Patch) Completely removed scrollbar.
- [X] (Patch) Added navbar with button and `general.js`.
- [X] (Patch) Improved filetree structure.
- [X] (Patch) Enter now leads to field execution.
- [X] (Patch) Switched main theme to black.
#### *Abscissa* 0.2.7 `0-1-5`
- [X] (Patch) Unified style.
- [X] (Patch) Simplified problem structure.
- [X] (Patch) Added input checking in search.
- [X] (Minor) Added a `Show solution` button.
- [X] (Patch) Added $2$ problems.
- [X] (Patch) Added numerical approximations for problem answers.
#### *Abscissa* 0.2.12 `0-0-5`
- [X] (Patch) Remade `problems` table and included `content` as a row.
- [X] (Patch) Added multilanguage support on `problems` table.
- [X] (Patch) Made minor style adjustments.
- [X] (Patch) Added interactive `python` solver.
- [X] (Patch) Migrated full database to cloud.
#### *Abscissa* 0.2.23 `0-3-7`
- [X] (Patch) Added margin to `#contentSolution` `<div>`.
- [X] (Patch) Increased *LaTeX* block margin between each line.
- [X] (Patch) Added multilanguage support to all `./website/database/*.php` files.
- [X] (Minor) Created a *PHP* script to search problems by its content.
- [X] (Patch) Added logo.
- [X] (Patch) Remade navbar margins and structure.
- [X] (Minor) Cleaned internal functions and processes to improve ease of maintenance.
- [X] (Minor) Converted *HTML* files to *PHP* ones and modularized common resources.
- [X] (Patch) Hidden database credentials.
- [X] (Patch) Simplified problem template.
### *Abscissa* 0.3.1 `0-0-5`
- [X] (Patch) Improved `#main` size to take all screen.
- [X] (Patch) Added a footer.
- [X] (Patch) Converted all remaining *HTML* files to *PHP.*
- [X] (Patch) Added version display in the footer.
- [X] (Patch) Added `environment.php` module for handling data.
### *Abscissa* 0.4.24 `0-2-5`
- [X] (Patch) Changed logos to `.svg` format and added navbar logo transition.
- [X] (Minor) Added *About* page.
- [X] (Patch) Refactored `general.js`.
- [X] (Minor) Remade module logic and hierarchy.
- [X] (Patch) Separated site files from module files.
- [X] (Patch) Added module abbreviations for `solver.py`.
- [X] (Patch) Increased precission in `solver.py`.
#### *Abscissa* 0.4.36 `0-1-9`
- [X] (Patch) Integrated *Google Analytics.*
- [X] (Patch) Added comments to *PHP* modules.
- [X] (Patch) Transcribed database *PHP* files.
- [X] (Minor) Installed error system.
- [X] (Patch) Added `documents/ai_evaluation.cssc`.
- [X] (Patch) Added `documents/ai_message.md`.
- [X] (Patch) Added custom exceptions.
- [X] (Patch) Changed `include` *PHP* statements for `require_once`.
- [X] (Patch) Moved `redirect()` function from `general.js` to navbar module *JavaScript.*
- [X] (Patch) Made the environment handling more robust.
## *Abscissa* 1.0.83 `2-4-4`
- [X] (Patch) Added *PHP* universal error handler.
- [X] (Patch) Changed leaked database credentials.
- [X] (Minor) Added all database tables and fields.
- [X] (Patch) Experimented with *Perlin* noise.
- [X] (Minor) Added error page.
- [X] (Minor) Remade navbar.
- [X] (Patch) Added all logos as *SVG* files.
- [X] (Minor) Deleted all old pages.
- [X] (Major) Made new dashboard with problem of the day and random scroll.
- [X] (Major) Switched from *CSS* to *LESS.*
#### *Abscissa* 1.0.91 `0-1-7`
- [X] (Patch) Added `documents/abscissa.cssc` for team coordination.
- [X] (Patch) Applied error pages.
- [X] (Minor) Added video resources to dashboard.
- [X] (Patch) Added preferences logo to user module.
- [X] (Patch) Changed `script/general.js` *API* function names.
- [X] (Patch) Refactored and improved `user.php` module.
- [X] (Patch) Changed logo.
- [X] (Patch) Unified `random()` and `day()` functions in `dashboard.js`.
#### *Abscissa* 1.0.105 `0-1-7`
- [X] (Patch) Added *PHP* database module.
- [X] (Patch) Added *PHP* test module.
- [X] (Minor) Improved database interaction scripts.
- [X] (Patch) Included exceptions in `handler.php` entry module.
- [X] (Patch) Created *JS* `dashboard.js` function to load videos to resources.
- [X] (Patch) Removed cross-origin headers in content *PHP* files.
- [X] (Patch) Created resource-gathering database *PHP* scripts.
- [X] (Patch) Completed [#8.](https://github.com/alejandro-vaz/Abscissa/issues/8)
#### *Abscissa* 1.0.115 `0-3-5`
- [X] (Patch) Completed [#14.](https://github.com/alejandro-vaz/Abscissa/issues/14)
- [X] (Minor) Added dynamic resource loading in dashboard.
- [X] (Minor) Completed [#15.](https://github.com/alejandro-vaz/Abscissa/issues/15)
- [X] (Minor) Added automatic arguments and environment modules.
- [X] (Patch) Remade database request function.
- [X] (Patch) Renamed `problems-content.php` to `problems-node.php`.
- [X] (Patch) Improved *PHP* exceptions.
- [X] (Patch) Remade `fetchAPI()` *JS* frontend function to allow for *non-JSON* responses.
#### *Abscissa* 1.0.129 `0-3-2`
- [X] (Minor) Completed [#24.](https://github.com/alejandro-vaz/Abscissa/issues/24)
- [X] (Minor) Completed [#17.](https://github.com/alejandro-vaz/Abscissa/issues/17)
- [X] (Patch) Completed [#11.](https://github.com/alejandro-vaz/Abscissa/issues/11)
- [X] (Minor) Unified database access to table lookup files.
- [X] (Patch) Remade fetch data handling in `dashboard.js`.
### *Abscissa* 1.1.2 `1-0-5`
- [X] (Major) Completed [#16.](https://github.com/alejandro-vaz/Abscissa/issues/16)
- [X] (Patch) Moved `redirect()` *JS* function to `general.js`.
- [X] (Patch) Modified problem template.
- [X] (Patch) Try buttons on dashboard now work.
- [X] (Patch) Removed explicit async behaviour from `dashboard.js`.
- [X] (Patch) Added *LESS* `.input-textarea` class.
#### *Abscissa* 1.1.23 `0-1-13`
- [X] (Patch) Renamed `handler.php` to `.php` in order to signal entry point.
- [X] (Patch) Renamed modules to specify their scope and reach by a letter.
- [X] (Patch) `add()` module from `.php` now takes two arguments in order to differentiate between `w`, `i`, `f` and `h` modules.
- [X] (Minor) Added *CodeMirror* module, dynamic textarea and autocompletion.
- [X] (Patch) Differentiated between *PHP* critical `PHPException` and non-critical `PHPAlert` with variable `$terminate`.
- [X] (Patch) Cleaned `gtag()` function.
- [X] (Patch) Refactored `w-katex.js` and renamed `render()` to `renderLaTeX()`.
- [X] (Patch) Changed id show next to the problem name to node (followed by an @).
- [X] (Patch) Changed content cards course and reward for id.
- [X] (Patch) Added infinite scroll for resources in dashboard.
- [X] (Patch) Deleted the whole `error.js` file.
- [X] (Patch) Input validation is now based on trimming and cleaning user input and comparing it to the correct one given by the *API.*
- [X] (Patch) Changed font style to *Comic Sans.*
- [X] (Patch) Especified header size on `general.less`.
### *Abscissa* 1.3.0 `2-1-11`
- [X] (Patch) Flagged *CSS* and `*.map` files on `.gitignore`.
- [X] (Patch) Set redirect to `/content/dashboard.php` as permanent.
- [X] (Minor) Changed module system so that now modules are imported at the beginning of the file but not loaded until the signal is due.
- [X] (Patch) Inverted `camelCase` and `kebab-case` use for *HTML* IDs and classes.
- [X] (Major) Changed *LESS* on-the-fly compiling for *SASS* indented-syntax precompiling. It is now faster and much better organized.
- [X] (Patch) Changed *h2* header on error page for an *h1.*
- [X] (Major) Completed [#32.](https://github.com/alejandro-vaz/Abscissa/issues/32)
- [X] (Patch) Renamed `f-test.php` module to `f-check.php` and now it also takes care of checking if the variable exists.
- [X] (Patch) Added more *CodeMirror* keybinds, though documentation is required.
- [X] (Patch) Separeted problem name from the data field in the database, allowing future searches by name.
- [X] (Patch) Every problem is now context-aware, meaning that they now where they are exactly in the *ID-NODE-CLUSTER-TREE* hierarchy.
- [X] (Patch) Refactored `problem.js` and renamed `load()` to `loadProblem()`.
- [X] (Patch) Added *JS* function on `general.js` `rawLaTeX()` which strips a *LaTeX* string out of it's contents in order to get a meaning-encapsulating one that can be compared in order to determine if two expressions are equivalent.
- [X] (Patch) Visor now automatically scrolls down when writing formulas in a problem.
#### *Abscissa* 1.3.5 `0-1-3`
- [X] (Minor) Completed [#31.](https://github.com/alejandro-vaz/Abscissa/issues/31)
- [X] (Patch) Made team graphs better, there's also a new promotion system.
- [X] (Patch) Cleaned `.php` handler and added *cURL* with `POST`.
- [X] (Patch) Added `f-post.php` module for accessing incoming `POST` data with variable `$PST`.
## *Abscissa* 2.0.0 `2-1-10`
- [X] (Patch) Added `documents/.cmd` for storing commands.
- [X] (Major) Completed [#35.](https://github.com/alejandro-vaz/Abscissa/issues/35)
- [X] (Minor) Completed [#36.](https://github.com/alejandro-vaz/Abscissa/issues/36)
- [X] (Patch) Added argument checking for `database/logs.php`.
- [X] (Patch) Added cryptography module.
- [X] (Patch) Added `css/katex.sass`.
- [X] (Patch) Changed from `rem` units in *CSS* to custom unit `$U` based on viewport width.
- [X] (Patch) Made different `i-user.php` layouts for users registered and not registered.
- [X] (Patch) Made animations slower.
- [X] (Patch) Remade input and button styles.
- [X] (Major) Added login and register page.
- [X] (Patch) Readded infinite resource scroll.
- [X] (Patch) Refactored most files.
#### *Abscissa* 2.0.2 `0-0-2`
- [X] (Patch) Added error messages to `auth.php` screen.
- [X] (Patch) Merged database `login.php` and `register.php` in `auth.php`.
#### *Abscissa* 2.0.27 `0-0-8`
- [X] (Patch) Removed *Qodana.*
- [X] (Patch) Integrated the module `f-environment.php` in the handler.
- [X] (Patch) Remade post checking function and increased its simplicity.
- [X] (Patch) Completed [#50.](https://github.com/alejandro-vaz/Abscissa/issues/50)
- [X] (Patch) Moved session validation fully server-side to reduce session *ID* leakage chance.
- [X] (Patch) Refactored the handler and some *PHP* modules.
- [X] (Patch) Changed database module to use on-activation connection.
- [X] (Patch) Completed [#51.](https://github.com/alejandro-vaz/Abscissa/issues/51)
### *Abscissa* 2.1.1 `1-1-1`
- [X] (Patch) Updated team organisation.
- [X] (Minor) Changed file classification.
- [X] (Major) Transpiled everything to *Python.*
#### *Abscissa* 2.1.14 `0-0-11`
- [X] (Patch) Added database validation thread superglobal and removed `database_validate()` function.
- [X] (Patch) Added available languages master superglobal.
- [X] (Patch) Added value especific checking for *POST.*
- [X] (Patch) Implemented custom exceptions.
- [X] (Patch) Remade auth script logic, meaning validation now does not require any input at all.
- [X] (Patch) Refactored all functions and added input and output types.
- [X] (Patch) Renamed functions, sticking to `camelCase` for variables and `snake_case` for functions.
- [X] (Patch) Implemented strict mode for check (default: `True`).
- [X] (Patch) Added *PayPal* integration.
- [X] (Patch) Added `b36encode()` and `b36decode()` functions.
- [X] (Patch) Changed *Abscissa* logo.
#### *Abscissa* 2.1.26 `0-1-10`
- [X] (Minor) Completed [#33.](https://github.com/alejandro-vaz/Abscissa/issues/33)
- [X] (Patch) Completed [#57.](https://github.com/alejandro-vaz/Abscissa/issues/57)
- [X] (Patch) Completed [#62.](https://github.com/alejandro-vaz/Abscissa/issues/62)
- [X] (Patch) Fixed exception argument handling.
- [X] (Patch) Added `base36` module.
- [X] (Patch) Deleted error page.
- [X] (Patch) Modified `b36encode()` function to require padding.
- [X] (Patch) Added `THR.SID` superglobal for session *ID.*
- [X] (Patch) Renamed `DBS` master superglobal to `DBC` in order to avoid confusion with `THR.DBS`.
- [X] (Patch) Added plus-minus *LaTeX* command replacement when `+-` is typed.
- [X] (Patch) Added fraction *LaTeX* command replacement when `/` is typed.
### *Abscissa* 2.2.0 `0-2-2`
- [X] (Minor) Remade dashboard.
- [X] (Minor) Completed [#65.](https://github.com/alejandro-vaz/Abscissa/issues/65)
- [X] (Patch) Made font size smaller.
- [X] (Patch) Changed *LaTeX* editor keybinds.
### *Abscissa* 2.3.1 `1-0-5`
- [X] (Patch) Made `node.js` project.
- [X] (Patch) Removed all documents except `changelog.cssc`.
- [X] (Major) Integrated *React.*
- [X] (Patch) Replaced *JS* `.addEventListener("click" => ...)` for *HTML* property `onclick` to increase simplicity.
- [X] (Patch) Replaced default cursors for styled ones.
- [X] (Patch) Removed app module analytics.
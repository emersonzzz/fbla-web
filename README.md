# Jobify Web Service
**🔧 This README file serves to provide the formatting rules for this project. Please follow these rules to ensure cleanliness and order.**

**⚠️ Do not duplicate, replicate, or utilize this code in any way, shape, or form for your own personal use. This was handcrafted for my projects.**

## 🍊 HTML Formatting
* Structure
  * Keep nesting consistent (4 spaces). Close tags properly.
  * Avoid using comments unless add future notes to work on.
* Attributes
  * Use single quotes for attributes (class='example') for consistency.
  * Avoid inline styles; use classes and IDs for styling.

## 🫐 CSS Formatting
* Selectors
  * Use classes over IDs for styling unless necessary.
  * Use meaningful names and group related rules.
* Ordering
  * Use this logical order: **Positioning > Box Model > Typography > Visuals**.
  ```
  .example {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 10px;
    font-size: 16px;
    color: #333;
  }
  ```
* Spacing and Comments
  * Leave a blank line between rules.
  * Seperate sections with comments (portal, listings, etc.)
* Units
  * Use `rem`/`em` for scalable sizing.
  * Use percentages for responsiveness.
  * Use `px` for fixed pixel-perfect elements like borders.
* Variables
  * Use CSS variables for consistent theming.

## 🍋 JS Formatting
* Structure
  * Split logic into functions to reduce clutter and improve readability.
* Comments
  * Use comments to explain logic but avoid over-commenting.
  * Similar to CSS, use comments to seperate functions by page.
* Spacing
  * Use 4 spaces for indentation. Add blank lines between functions.
* Naming
  * Use camelCase for variables and functions (`userName`).
  * Use PascalCase for classes (`UserManager`).
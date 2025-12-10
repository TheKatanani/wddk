# SushiSamba Widget

This is a responsive HTML/CSS/JS project using TailwindCSS.

## Setup

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the Tailwind CSS build (watch mode):**
    ```bash
    npm run build:css
    ```
    This will compile `styles/main-input.css` (which imports `tailwind.css` and `global.css`) into `styles/output.css`.

3.  **Run the project:**
    Since the project uses ES Modules (`import`/`export`), you need to serve `index.html` using a local server.
    
    You can use extensions like "Live Server" in VS Code, or run:
    ```bash
    npx serve .
    ```

## Structure

*   `index.html`: Main entry point.
*   `styles/`: Contains CSS source files and the generated `output.css`.
*   `js/`: Contains JavaScript logic and components.
*   `assets/`: Contains fonts and images.
# wddk

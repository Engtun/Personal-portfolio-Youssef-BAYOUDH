# Youssef Bayoudh - Personal Portfolio Website

Welcome to my personal portfolio website! This project showcases my skills, experience, and projects as a Computer Engineering student with a passion for AI, Cloud Computing, and Cybersecurity.

## Features

*   **Modern & Responsive Design:** Clean, minimal, and professional design that looks great on all devices.
*   **Interactive Sections:** Home/Introduction, About Me, Experience, Projects, Skills, and Contact.
*   **Built-in AI Chatbot:** A smart assistant that can answer questions about my background, projects, and skills by pulling context directly from the website content.
*   **Smooth Animations:** Enhanced user experience with subtle and smooth transitions.
*   **Easy Navigation:** Intuitive menu bar for seamless browsing.

## Technologies Used

*   **Frontend:** React.js
*   **Styling:** Tailwind CSS
*   **Animations:** Framer Motion
*   **Build Tool:** Vite
*   **Package Manager:** pnpm

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/<your-github-username>/<your-repo-name>.git
    cd <your-repo-name>
    ```
    (Replace `<your-github-username>` and `<your-repo-name>` with your actual GitHub details )

2.  **Install dependencies:**
    Make sure you have `pnpm` installed. If not, you can install it via npm: `npm install -g pnpm`.
    Then, install the project dependencies:
    ```bash
    pnpm install
    ```

3.  **Start the development server:**
    ```bash
    pnpm run dev
    ```
    The application will be accessible at `http://localhost:5173/` (or another port if 5173 is in use ).

## Deployment

This project is configured for easy deployment to GitHub Pages. Follow these steps:

1.  **Install `gh-pages`:**
    ```bash
    pnpm install gh-pages --save-dev
    ```

2.  **Update `package.json`:**
    Add your `homepage` URL and deployment scripts to your `package.json`:
    ```json
    {
      "name": "portfolio-website",
      "version": "0.0.0",
      "homepage": "https://<your-github-username>.github.io/<your-repo-name>",
      "private": true,
      "scripts": {
        "dev": "vite",
        "build": "vite build",
        "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
        "preview": "vite preview",
        "predeploy": "pnpm run build",
        "deploy": "gh-pages -d dist"
      },
      // ... rest of your package.json
    }
    ```

3.  **Deploy to GitHub Pages:**
    ```bash
    pnpm run deploy
    ```

4.  **Configure GitHub Pages:** Go to your GitHub repository settings -> Pages, and select the `gh-pages` branch as your source.

## Customization

To personalize this portfolio with your own content:

*   **Update `src/App.jsx`:** Modify the text content, experience details, project descriptions, and skills to reflect your own information.
*   **Replace Placeholder Images:** Add your professional headshot and project images.
*   **Adjust Styling:** Customize colors and fonts in `src/App.css` or by modifying Tailwind CSS classes.

## Contact

Feel free to connect with me:

*   **Email:** youssef.bayoudh@mail.utoronto.ca
*   **LinkedIn:** [linkedin.com/in/youssef-bayoudh](https://tn.linkedin.com/in/youssef-bayoudh )
*   **GitHub:** [github.com/Engtun](https://github.com/Engtun )




```markdown
# Resume Webpage Project

This project is a personal resume webpage built with [Next.js](https://nextjs.org/), designed to be deployed as a GitHub Page. It leverages Next.js to create a dynamic backend that processes and displays data provided in JSON format.

## Overview

The webpage consists of the following main sections:

1. **Main Page (Home)**  
   - **Introduction & About Me:** A brief narrative about who you are, your background, and your professional interests.
   - **Personal Photo Background:** Your personal photo is used as an artistic background image.
   - **Download Resume:** A link/button for users to download your resume in PDF format.
   - **Contact Information:** Your contact details (e.g., email) are clearly displayed.

2. **Projects Page**  
   - **Project Gallery:** A grid or gallery format displaying your projects.
   - **Project Details:** Each project includes a title, a brief description, and a link to additional details for the research project.

3. **Experience Page**  
   - **Timeline Layout:** A horizontal timeline or progress bar listing your experiences (internships, etc.) in ascending order based on timeframe.
   - **Experience Entry Details:** Each entry consists of:
     - The period (e.g., "Jan 2023 - Jun 2023") on the left.
     - On the right: the company name, a brief description of your job duties, and a representative photo.

## Technology Stack

- **Next.js:** Framework for a React-based server-side rendered application.
- **React:** For building component-based UI.
- **HTML/CSS:** For the structural and visual design of the webpages.
- **JavaScript/TypeScript:** Programming language to drive both frontend and simple backend logic.
- **JSON:** Used as the data source for dynamically generating content.
- **GitHub Pages / Vercel:** For deployment. (Note: For Next.js, Vercel is often recommended, but GitHub Pages can be used with proper configuration.)

## Repository Structure

A suggested folder structure for the project using Next.js is as follows:

```
/your-resume-webpage
├── /components        # Reusable React components (e.g., Header, Footer, ProjectCard, ExperienceBar)
├── /data              # All JSON files containing your resume data (e.g., intro.json, projects.json, experience.json)
├── /public
│   ├── /assets
│   │   ├── /images   # Personal, project and experience photos
│   │   └── /pdf      # The resume PDF (e.g., resume.pdf)
│   └── favicon.ico
├── /pages             # Next.js pages (e.g., index.js for Home, projects.js, experience.js)
├── /styles            # CSS/SCSS files (if not using CSS-in-JS)
├── next.config.js     # Next.js configuration file
├── package.json       # Project metadata and dependencies
└── README.md          # This file
```

## JSON Data Integration

The project content (e.g., introduction details, projects list, and work experiences) will be stored in JSON files within the `/data` folder. Next.js API routes or static props can be used to load and render the JSON data on your pages.

For example, in `pages/index.js`, you might load the introduction JSON like this:

```js
export async function getStaticProps() {
  const introData = await import('../data/intro.json');

  return {
    props: {
      intro: introData.default
    }
  }
}
```

Then use the `intro` prop to render the main page content.

## Project Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/your-resume-webpage.git
   cd your-resume-webpage
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Development Server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

4. **Build for Production:**

   ```bash
   npm run build
   npm run start
   ```

   Follow [Next.js deployment documentation](https://nextjs.org/docs/deployment) for additional details.

## Detailed Page Requirements

### Main Page

- **Introduction & Background:**  
  Use an attractive design where your personal photo serves as a background and overlaid text gives an overview about you. This information is loaded from a JSON file (e.g., `/data/intro.json`).

- **Downloadable Resume:**  
  Include a clearly visible button or link that allows users to download your resume PDF, located within `/public/assets/pdf/resume.pdf`.

- **Contact Information:**  
  Prominently display your email address and other relevant contact details.

### Projects Page

- **Gallery Layout:**  
  Render your project cards within a responsive grid layout. Each card includes:
  - **Title:** Project name.
  - **Description:** A short summary of the project.
  - **Link:** A URL directing users to further details (external link or an internal project detail page).
  
  Data for the projects will be loaded from a JSON file (e.g., `/data/projects.json`).

### Experience Page

- **Timeline Presentation:**  
  Use a horizontal bar/timeline format that shows your experiences in ascending order based on the timeframe.

- **Experience Bar Details:**
  - **Left:** Display the period (e.g., "Jan 2023 - Jun 2023").
  - **Right:** Include the company name, a brief description of your duties, and a relevant image.
  
  Load the data from a JSON file (e.g., `/data/experience.json`).

## Deployment

- **Vercel:**  
  Vercel is the recommended platform for deploying Next.js apps. Simply push your project to GitHub and import it into your Vercel account to deploy.
  
- **GitHub Pages:**  
  If you choose GitHub Pages, ensure that your project is configured appropriately for a static export. You can run:
  
  ```bash
  npm run build
  npm run export
  ```

  Then deploy the contents of the `out` folder to GitHub Pages.

## Additional Notes

- **Responsiveness:**  
  Ensure all pages are fully responsive with the use of CSS media queries or a responsive CSS framework.
  
- **Styling:**  
  Consider using CSS-in-JS libraries (like styled-components) or CSS frameworks (like Tailwind CSS) based on your project’s complexity and your design preferences.
  
- **JSON Data Management:**  
  As your website evolves, update your JSON files in the `/data` folder to reflect your most current resume details, projects, and experiences.
  
- **Testing:**  
  Regularly test your website on multiple browsers and devices to ensure consistent performance and design.

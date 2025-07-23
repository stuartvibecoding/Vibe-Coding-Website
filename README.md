# Vibe-Coding-Website

## Getting Started

Follow these steps to install and run the project using Cursor or your terminal.

---

### 1. Download and Install Required Software

- **Cursor**: [Download Cursor](https://cursor.com/en)
  - Install Cursor, then create an account and sign in to access AI features.
- **Git**: [Download Git for Windows](https://git-scm.com/downloads/win)
  - Git is required to connect to the repository.
- **Node.js & npm**: [Download Node.js](https://nodejs.org/)
  - Node.js and npm are required to run the project locally.

---

### 2. Clone the Repository

You can clone the repository using Cursor or your terminal:

#### Using Cursor
1. Open Cursor.
2. Connect your GitHub account from within Cursor.
3. Authorize Cursor to access your repositories.
4. Open a new window: `CTRL + Shift + N`
5. Click **Clone Repo**.
6. Select **Clone from GitHub**.
7. Allow Cursor to access your GitHub account.
8. Copy and paste the one-time code if prompted.
9. Select the repository: `stuartvibecoding/Vibe-Coding-Website`
10. Choose your desired directory to download the repository.

#### Using Terminal
1. Open your terminal or command prompt.
2. Run the following command:
   ```sh
   git clone https://github.com/stuartvibecoding/Vibe-Coding-Website.git
   ```
3. Navigate into the project directory:
   ```sh
   cd Vibe-Coding-Website
   ```

---

### 3. Install Dependencies

In the project directory, run:
```sh
npm install
```
This will install all required dependencies.

---

### 4. Run the Development Server

Start the local development server with:
```sh
npm run dev
```

- The site will be available at [http://localhost:3000](http://localhost:3000)
- Any changes you make will automatically reload the page.

---

### 5. (Recommended) Upgrade to Cursor Pro

- For advanced AI features, you can upgrade to a Pro account ($20/month).

---

## 📝 Base Prompt for Vibe Coding Website

This project is built by sharing prompts for each webpage and component. Below is the initial base prompt for the home page. As we build more pages and components, their prompts will be added here for reference and collaboration.

---

### Home Page Initial Prompt

You are building the home page for a Next.js 15 (App Router) project.

Task: Generate `app/page.tsx` (React Server Component) and an optional `app/globals.css` snippet.

Requirements:
1. Use **Tailwind CSS** for styling (assume it’s already set up).
2. Structure:
• **Hero** section: full-width, centered text; headline, tagline, one-sentence sub-blurb, and a primary “Join the Meetup” button that links to `https://www.meetup.com/stuart-vibe-coding/`.
• **Mission** section: light background; h2 “Our Mission” and the mission paragraph below.
• **What We Do** section: three-column list on `lg:` screens, stacked on mobile.
• **Why Join?** section: bullet list (ul > li) with subtle left border.
• **Call to Action** section: centered secondary button “Subscribe for event updates” (placeholder `#subscribe`).
3. Keep the look clean: generous `py` spacing, max-width container (`max-w-4xl mx-auto`), and a simple gradient (`from-emerald-500 to-teal-500`) behind the hero.
4. Add accessible `aria-label` attributes to both buttons.
5. Make sure all text content exactly matches the copy below (no improvising):

<<<COPY START>>>
Stuart Vibe Coding Community
Where creativity meets AI-powered code.
A welcoming space for makers, dreamers, and the simply curious to explore AI-assisted coding—together.
We bring people from diverse disciplines—not just coders—together to learn, share, and have fun with the latest AI tools for software creation. Whether you write poems, design hardware, crunch data, or have never opened a code editor, you’ll find friendly faces and hands-on guidance here in Stuart.
Monthly Meetups: live demos, lightning talks, and show-and-tell of member projects.
Workshop Nights: guided practice with tools like Cursor, Copilot, and ChatGPT.
Mini-Hacks & Challenges: low-stakes sprints that pair newcomers with mentors.
Community Projects: build something useful—or delightfully useless—together.
Why Join?
Learn faster through collaborative experimentation.
Cross-pollinate ideas across art, business, science, and tech.
Make new friends who geek out over the future of work and play.
Have a blast turning “what-ifs” into working code.
<<<COPY END>>>

Return only the TypeScript/JSX (and optional CSS) without extra explanation.

---

#### CSS Update Prompt

Update the CSS to make the site modern and visually appealing:

> the site is very basic, there is no styling. Make it modern, update the css.
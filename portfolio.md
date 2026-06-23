# Codex Prompt: Generate My Portfolio Website

You are an expert frontend developer and UI/UX designer. Generate a modern, responsive, production-ready personal portfolio website for me based on the resume details below.

## My Profile
Name: Manroop Singh
Email: manroopsingh2005a@gmail.com
Phone: +91-6280236063
Location: Gwalior, India
Education: B.Tech in Information Technology, ABV IIITM Gwalior, 08/2023 – 04/2028

## Tech Skills
Programming Languages: C, C++, TypeScript, JavaScript, Python, Swift
Frontend: React, React Native, Next.js, Expo, HTML, CSS, Tailwind CSS, Bootstrap
Backend & Database: Node.js, Express.js, REST APIs, MongoDB, PostgreSQL, Redis, QdrantDB
Tools: Git, GitHub, Docker, Docker Hub, VS Code
Cloud: AWS, Azure

## Experience
Google Summer of Code 2026 – OpenELIS Global
Role: Frontend Modernization Contributor
Duration: 05/2026 – Present
Highlights:
- Selected as a Google Summer of Code 2026 Contributor at OpenELIS Global.
- Contributing to frontend modernization and performance optimization initiatives.
- Migrated React frontend components from JavaScript to TypeScript, improving type safety, maintainability, and developer experience.
- Refactored shared UI components, utilities, and application modules while ensuring compatibility with the existing healthcare workflow system.
- Enhanced frontend performance through code optimization, reducing technical debt and supporting long-term scalability.
- Collaborated with international mentors and open-source contributors using Git, GitHub, code reviews, testing, and agile development practices.

## Projects
### PromptX
Role: Mobile App Developer
Tech Stack: React Native, TypeScript, Expo, PostgreSQL, Prisma
Duration: 05/2025 – 06/2025
Description:
- Released a marketplace where users can buy and sell system and user prompts for AI.
- Added Google OAuth authentication and Redux-based state management.
- Reduced image loading times by 70% using CDN caching with Cloudinary.
- Integrated a DeepSeek-R1 chatbot with 8 dedicated AI action buttons for targeted tasks like GeneralAI and SoftwareAI.
- Improved task execution speed by 50%.

### Open Course
Role: Full Stack Developer
Tech Stack: React, Redux, JavaScript, Node.js, Express.js, MongoDB
Duration: 08/2024 – 01/2025
Description:
- Built a crowdsourced learning platform where users can contribute by adding videos to existing courses.
- Enabled dynamic course updates and real-time synchronization across contributors.
- Developed an interview preparation section with 50+ practice questions.

## Website Requirements
Generate a complete portfolio website using:
- Next.js with App Router
- TypeScript
- Tailwind CSS
- Framer Motion for smooth animations
- Fully responsive design for mobile, tablet, and desktop
- Clean folder structure
- Reusable components
- Modern dark theme with optional accent colors
- SEO-friendly metadata
- Accessible semantic HTML

## Design Style
Make the website look premium, modern, and developer-focused. Use a dark background, subtle gradients, glassmorphism cards, smooth hover effects, and clean typography. The design should feel suitable for a software engineer, open-source contributor, and mobile/full-stack developer.

## Required Sections
1. Hero Section
   - Name: Manroop Singh
   - Title: Software Developer | GSoC 2026 Contributor | Full Stack & Mobile App Developer
   - Short intro highlighting open-source, frontend modernization, mobile apps, and full-stack projects.
   - Buttons: View Projects, Contact Me, GitHub, LinkedIn

2. About Section
   - Mention that I am pursuing B.Tech in Information Technology from ABV IIITM Gwalior.
   - Highlight my interest in building scalable products, open-source contributions, frontend modernization, mobile apps, and backend systems.

3. Skills Section
   - Group skills into Programming Languages, Frontend, Backend & Database, Tools, and Cloud.
   - Use clean badges or animated cards.

4. Experience Section
   - Add Google Summer of Code 2026 – OpenELIS Global.
   - Make it visually strong because it is my biggest achievement.
   - Include timeline style layout.

5. Projects Section
   - Add PromptX and Open Course.
   - Each project card should include role, tech stack, duration, bullet points, and placeholder buttons for GitHub/live demo.
   - Highlight impact metrics like 70% faster image loading and 50% faster task execution.

6. Education Section
   - B.Tech in Information Technology, ABV IIITM Gwalior.

7. Contact Section
   - Email, phone, GitHub, LinkedIn.
   - Add a clean contact form UI, but it can be frontend-only.

8. Footer
   - Minimal footer with name and social links.

## Extra Features
- Add smooth scrolling.
- Add animated section reveal on scroll.
- Add a sticky navbar.
- Add active section highlighting if possible.
- Add mobile hamburger menu.
- Add clean placeholder links for GitHub and LinkedIn that I can replace later.
- Add comments in code where I should update links.

## Output Format
Return the complete codebase with all important files:
- package.json
- app/page.tsx
- app/layout.tsx
- app/globals.css
- components folder
- data/constants file if needed
- README.md with setup instructions

Make sure the code runs with:
npm install
npm run dev

Do not give only explanation. Generate the full working project code.

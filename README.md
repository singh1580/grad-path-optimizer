
# Career Connect: AI-Powered Job & Internship Search Platform

## Overview

Career Connect is an all-in-one web platform designed to empower recent graduates, students, and employers to connect for career, internship, and hiring opportunities. Powered by AI-driven matching and modern design, it provides tools for job seekers and employers alike, with a central admin panel for management.

---

## 🔒 Authentication with Role Integration

- **Sign Up / Login Flow**: Users sign up or log in using email. 
- **Role-based Signup**: New users select their role (Student or Employer) via a clear radio group at sign up.
- **Role Storage**: The chosen role is stored in Supabase user metadata and in the `profiles` table (`role` column).
- **After Signup Redirects**:
  - Students are redirected to `/student-dashboard`
  - Employers are redirected to `/employer-dashboard`

---

## 🧑‍🎓 Student Dashboard

An interactive, easy-to-use workspace for students to manage and enhance their career journey:

- **Dashboard Overview**: Displays user skills, applied jobs, and recommended internships in clean, card-format blocks.
- **Search & Filter**: Filter jobs/internships by skills, qualification, and location.
- **Resume Upload**: Securely upload and save your resume for employer review. Employers can download student resumes.
- **Notifications**: Receive in-app and email alerts for shortlist/interview actions.
- **Profile Management**: Update your profile and manage your skill set in real time.
- **Interactive UX**: Uses tabs and modern card layouts for navigation and display.

---

## 🏢 Employer Dashboard

A professional control panel for companies and recruiters:

- **Job Posting Insights**: View summary cards for total jobs, active/closed positions, and a "Post New Job" button.
- **Applications Overview**: See number of applications per job, filter by status (Pending, Shortlisted, Rejected), and export application data (CSV/PDF).
- **Candidate Profiles**: Click on a job to view all applicants, see core info (name, skills, match %, resume link), and actions (View Profile, Shortlist).
- **Notifications Panel**: Alerts for new applications, expiring posts, and candidate messages.
- **Analytics**: View applicant skills distribution, response rate, and general analytics via embedded cards and charts.
- **Settings & Company Profile**: Edit company info, logo, description, and contact details.

---

## 🛠️ Admin Dashboard

A backend panel for overview/monitoring of users, jobs, and applications:
- See high-level stats on users, total jobs, and applications.
- Monitor platform metrics and moderate content if needed.

---

## 🔥 Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn UI, Vite, React Router, Tanstack React Query
- **Backend**: Supabase (auth, database, storage), custom RLS policies, triggers
- **Design**: Card layouts, Tabs, Tables, Modern interactive UI

---

## 📁 Project Structure

```
src/
├── components/
│   ├── home/           # Homepage sections
│   ├── jobs/           # Job/internship components
│   ├── layout/         # Navbar, Footer, Layout
│   ├── ui/             # UI elements (cards, tabs, table...)
├── hooks/              # Custom hooks (e.g. fetching jobs)
├── pages/              # Student, Employer, Admin dashboards, etc.
├── contexts/           # Context providers, authentication
└── integrations/       # API & service integrations (Supabase)
```

---

## 🚀 Quick Start

```sh
# 1. Clone the repo
git clone <repo-url>
cd career-connect

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
```

### Deployment

You can deploy easily using Lovable's one-click publish.

---

## 🤝 Contributing

- Fork the repo
- Create a feature branch
- Commit & push your changes
- Open a Pull Request!

---

## License

MIT


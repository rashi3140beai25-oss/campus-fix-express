# Campus Connect

I am a 2nd-year college student and I am building a major 2-year college project called:

# CAMPUS FIX
### Report. Track. Improve Your Campus.

This project is extremely important for my college evaluation.

I want you to build a COMPLETE, FUNCTIONAL and PROFESSIONAL frontend website using:

- HTML
- CSS
- JavaScript
- React

IMPORTANT TECHNOLOGY RESTRICTION:

I already know HTML, CSS and JavaScript well.

I am a BEGINNER in React.

Therefore, DO NOT make this project technically advanced.

In React, I ONLY want to demonstrate these 4 concepts:

1. Array `.map()` syntax
2. Conditional Rendering
3. State / set variable using basic `useState`
4. Routing

These four React concepts are mandatory.

DO NOT introduce advanced React concepts.

DO NOT use:
- TypeScript
- Java
- Python
- PHP
- Node.js
- Backend programming
- SQL
- MongoDB
- Firebase
- Redux
- Context API
- Zustand
- Custom hooks
- Advanced hooks
- Complex state management
- Next.js
- Any unnecessary advanced technology

For this first evaluation, the main focus is:

HTML + CSS + JavaScript

React should only be used at a beginner-friendly level to organize the website and demonstrate the four React concepts mentioned above.

==================================================
PROJECT IDEA
==================================================

Campus Fix is a smart campus complaint and improvement platform.

Students should be able to report problems around their college/campus, upload an image, track the complaint, upvote important complaints, view campus issues, explore campus locations, and report lost/found items.

The administration should be able to manage complaints and view basic analytics.

The project should look like a REAL college product, not like a basic tutorial project.

It should be:

- Professional
- Modern
- Clean
- Easy to understand
- Easy to use
- Student-friendly
- Responsive
- Attractive
- Practical
- Simple enough for a 2nd-year student to explain in viva

==================================================
DESIGN REQUIREMENT
==================================================

The primary theme MUST be:

WHITE + RED

Use:
- White
- Off-white
- Light gray
- Dark gray
- Red
- Dark red
- Light red

Do NOT make the whole website red.

Use red mainly for:
- Primary buttons
- Important actions
- Active navigation
- Complaint alerts
- High-priority status
- Highlights
- Important statistics

The design should feel like a professional university portal.

Keep the interface simple.

Avoid unnecessary animations and complicated visual effects.

Use good:
- spacing
- typography
- cards
- buttons
- forms
- tables
- badges
- progress bars
- responsive layouts
- hover effects
- empty states
- error states
- success messages

==================================================
IMPORTANT SCREENSHOT INSTRUCTION
==================================================

I have provided screenshots of another campus-management website.

USE THOSE SCREENSHOTS ONLY AS A CONTENT/FEATURE REFERENCE.

You may take ideas from the TYPES OF CONTENT visible in those screenshots, such as:

- Campus Analytics
- Performance Center
- Departments
- Campus Health Score
- Resolution Rate
- Response Time
- Open Backlog
- Campus Map
- Issue Hotspots
- Department Performance
- Success Stories
- Before/After Improvements
- Community Feedback
- Announcements
- Student Testimonials

BUT:

DO NOT COPY THE SCREENSHOTS.

Do NOT copy:
- their layout
- their UI
- their color scheme
- their branding
- their typography
- their exact text
- their navigation
- their visual design

Create a completely ORIGINAL CAMPUS FIX website.

The screenshots are ONLY for understanding what useful information/features a campus-management platform can contain.

==================================================
MAIN WEBSITE
==================================================

Create these main pages:

1. Home
2. Login
3. Dashboard
4. Report Complaint
5. Track Complaint
6. Issue Explorer
7. Complaint Details
8. Campus Map
9. Departments
10. Campus Analytics
11. Lost & Found
12. Community
13. Announcements
14. Hall of Improvements
15. Notifications
16. Profile
17. Help / FAQ

Admin pages:

18. Admin Dashboard
19. Admin Complaints
20. Admin Analytics
21. Admin Performance

==================================================
NAVIGATION
==================================================

Create a clean navigation system.

Main navigation:

Home
Dashboard
Campus Analytics

Operations:

Report Issue
Track Complaint
Issue Explorer
Campus Map
Departments
Lost & Found

Campus Life:

Community
Announcements
Hall of Improvements

User:

Notifications
Profile
Logout

Use React Routing for these pages.

Use:
- BrowserRouter
- Routes
- Route
- Link
- NavLink
- useNavigate

Keep routing simple and beginner-friendly.

==================================================
HOME PAGE
==================================================

Create an impressive homepage.

Hero heading:

"Fixing Campus Problems, Together."

Subtitle:

"Report campus issues, track their progress, support important complaints, and help build a better university experience."

Buttons:

"Report an Issue"

"Track a Complaint"

Add an attractive campus-related visual/background, but create your own design.

Do NOT copy the screenshots.

==================================================
HOME PAGE SECTIONS
==================================================

Include:

1. Hero Section

2. Campus Statistics

Example:
- 1,250+ Issues Reported
- 980+ Issues Resolved
- 5,000+ Students
- 92% Resolution Rate
- 4.6/5 Student Satisfaction

Render these cards using `.map()`.

3. How Campus Fix Works

Step 1:
Report

Step 2:
Track

Step 3:
Support

Step 4:
Resolve

4. Campus Health

Show:
- Campus Health Score
- Resolution Rate
- Student Satisfaction
- Open Backlog

5. Issue Hotspots

Show common campus locations with issue counts.

6. Top Performing Departments

Show departments with:
- Resolution %
- Response time

7. Hall of Improvements

Show successful complaint resolutions.

8. Student Feedback

Show student testimonials.

9. Announcements

10. Final CTA:

"Something broken on campus?"

Button:
"Report an Issue"

==================================================
REPORT COMPLAINT
==================================================

This is one of the most important pages.

Create a proper form.

Fields:

- Complaint Title
- Category
- Location
- Description
- Priority
- Image Upload

Categories:

- Electrical
- Plumbing
- Cleanliness
- Infrastructure
- Internet / Wi-Fi
- Classroom
- Hostel
- Library
- Canteen
- Security
- Parking
- Other

Priority:

- Low
- Medium
- High

Features:

- Form validation
- Required fields
- Image preview
- Success message
- Generate complaint ID
- Store complaint data in localStorage

Example complaint ID:

CF-2026-00125

Use JavaScript properly for validation and handling.

==================================================
TRACK COMPLAINT
==================================================

Student can enter a Complaint ID.

Display:

- Complaint title
- Category
- Location
- Date
- Priority
- Assigned department
- Current status

Status:

Submitted
↓
Under Review
↓
Assigned
↓
In Progress
↓
Resolved

Use CONDITIONAL RENDERING to show the current status.

==================================================
ISSUE EXPLORER
==================================================

Display all complaints.

Each complaint card should contain:

- Image
- Title
- Category
- Location
- Description
- Status
- Priority
- Upvotes
- Date

Add:

Search

Category Filter

Status Filter

Location Filter

Sorting:

- Newest
- Most Upvoted
- Highest Priority

Use JavaScript:

- map()
- filter()
- sort()
- find()

This page should strongly demonstrate JavaScript knowledge.

==================================================
UPVOTE
==================================================

Allow students to upvote complaints.

Example:

👍 42

When clicked:

- Increase count
- Change button state
- Prevent repeated upvotes from the same user

Use basic `useState`.

Store state in localStorage if appropriate.

==================================================
CAMPUS MAP
==================================================

Create an interactive campus map using HTML/CSS.

DO NOT require Google Maps or external map APIs.

Show locations:

- Main Gate
- Academic Block
- Library
- Hostel
- Canteen
- Sports Complex
- Parking
- Computer Labs

Show issue hotspots.

Use markers for:
- High issues
- Medium issues
- Low issues

When a location is clicked, show:

- Location name
- Open complaints
- Resolved percentage
- Most common issue
- Responsible department

Use basic `useState` and conditional rendering.

==================================================
LOST & FOUND
==================================================

Create a complete Lost & Found section.

Tabs:

Lost Items
Found Items

Each item:

- Image
- Item name
- Category
- Location
- Date
- Description
- Status

Categories:

- ID Card
- Wallet
- Phone
- Books
- Bag
- Keys
- Electronics
- Other

Buttons:

"Report Lost Item"

"Report Found Item"

Use forms and localStorage.

==================================================
DEPARTMENTS
==================================================

Create Department cards.

Departments:

- Electrical
- IT Department
- Maintenance
- Housekeeping
- Security
- Hostel Administration
- Infrastructure
- Library Services

Each card:

- Department name
- Open complaints
- Resolution rate
- Average response time
- Status

Generate cards using `.map()`.

==================================================
CAMPUS ANALYTICS
==================================================

Create a basic but attractive analytics page.

Show:

Issues by Category

Issues by Location

Complaint Status

Monthly Complaints

Department Performance

Resolution Rate

Average Response Time

Open Backlog

Use JavaScript calculations.

Use simple CSS-based charts/progress bars.

Do NOT use complicated chart libraries.

==================================================
PERFORMANCE CENTER
==================================================

Create a Performance Center.

Show:

- Average response time
- Average resolution time
- Resolution rate
- Open backlog
- Student satisfaction

Example departments:

Electrical — 91% resolved — 3.2h response

IT — 95% resolved — 2.8h response

Maintenance — 88% resolved — 4.1h response

Security — 94% resolved — 1.9h response

Generate dynamically using `.map()`.

==================================================
COMMUNITY
==================================================

Create a simple community section.

Include:

- Popular Issues
- Suggestions
- Polls
- Student Discussions

Example poll:

"Should the library remain open until midnight?"

Options:

Yes
No
Maybe

Use basic `useState` for voting.

==================================================
ANNOUNCEMENTS
==================================================

Create announcement cards.

Examples:

Water Supply Maintenance

Wi-Fi Maintenance

Campus Cleanliness Drive

Exam Schedule Update

Each announcement:

- Title
- Date
- Category
- Description

Use `.map()`.

==================================================
HALL OF IMPROVEMENTS
==================================================

Create a page showing successfully resolved campus problems.

Each card:

Problem

Action Taken

Result

Department

Resolution Date

Students Benefited

Example:

Library Lighting Improvement

Before:
Insufficient lighting.

Action:
New LED lights installed.

Result:
Better study environment.

Create original content.

==================================================
STUDENT FEEDBACK
==================================================

Create testimonial cards.

Examples:

"Reporting a complaint is now much easier."

"I can track what is happening with my issue."

"The Lost & Found section is very useful."

Use `.map()`.

Use fictional/demo names only.

==================================================
NOTIFICATIONS
==================================================

Create notifications such as:

"Your complaint CF-2026-00125 is now In Progress."

"Your complaint has been resolved."

"Your complaint received 10 upvotes."

Use state to mark notifications as read/unread.

==================================================
PROFILE
==================================================

Show:

- Student Name
- Student ID
- Email
- Department
- Semester

Allow basic editing.

Store information in localStorage.

==================================================
HELP / FAQ
==================================================

Create FAQ section.

Questions:

How do I submit a complaint?

How do I track my complaint?

Can I upload an image?

How does upvoting work?

How do I report a lost item?

Who resolves complaints?

Use `useState` for opening/closing answers.

This should demonstrate conditional rendering.

==================================================
ADMIN DASHBOARD
==================================================

Create a separate Admin Dashboard.

Show:

- Total complaints
- Pending
- Under Review
- In Progress
- Resolved
- High Priority
- Lost & Found Reports
- Open Backlog

Admin can:

- Search complaints
- Filter complaints
- Open complaint details
- Change status
- Change priority
- Assign department

Use basic React state.

==================================================
ADMIN ANALYTICS
==================================================

Show:

- Category-wise complaints
- Location-wise complaints
- Department performance
- Resolution rate
- Average response time
- Monthly complaints
- Student satisfaction
- Open backlog

Use JavaScript calculations and simple CSS visualizations.

==================================================
ADMIN PERFORMANCE
==================================================

Create department scorecards.

Example:

Electrical
91% resolution
3.2h response

IT
95% resolution
2.8h response

Maintenance
88% resolution
4.1h response

Security
94% resolution
1.9h response

Use `.map()`.

==================================================
LOGIN
==================================================

Create a simple demo login.

Student:

Email:
student@campusfix.com

Password:
student123

Admin:

Email:
admin@campusfix.com

Password:
admin123

Use JavaScript + basic React state.

Store login state in localStorage.

Do NOT create a complicated authentication system.

==================================================
REACT REQUIREMENT
==================================================

The entire React implementation should clearly demonstrate ONLY:

1. `.map()`

Example:

complaints.map(...)

2. Conditional Rendering

Example:

isLoggedIn ?  : 

3. Basic State

Example:

const [complaints, setComplaints] = useState([]);

4. Routing

Example:

} />

These concepts should be visible throughout the project.

Do NOT introduce advanced React concepts.

==================================================
JAVASCRIPT REQUIREMENT
==================================================

JavaScript should be strong.

Use:

- Variables
- Arrays
- Objects
- Functions
- Conditions
- Loops where appropriate
- map()
- filter()
- find()
- sort()
- localStorage
- Events
- Form validation
- String operations
- Date handling
- Calculations

I want the project to demonstrate that I actually understand JavaScript.

==================================================
HTML REQUIREMENT
==================================================

Use semantic HTML:



<button>
<footer>

Do not make everything a meaningless `<div>`.

==================================================
CSS REQUIREMENT
==================================================

CSS should be one of the strongest parts of this project.

Implement:

- Flexbox
- CSS Grid
- Responsive design
- CSS variables
- Cards
- Buttons
- Forms
- Tables
- Progress bars
- Status badges
- Modals
- Toast/success messages
- Hover effects
- Focus states
- Mobile layouts
- Empty states
- Error states

Maintain consistent spacing and typography.

==================================================
RESPONSIVE DESIGN
==================================================

The website must work on:

- Desktop
- Laptop
- Tablet
- Mobile

Use CSS media queries.

==================================================
DATA
==================================================

Since this is currently a frontend project, use JavaScript arrays/objects as demo data.

Preload realistic data:

At least:

8 complaints

8 departments

6 announcements

6 lost/found items

5 success stories

5 testimonials

8 campus locations

The website should look populated immediately after running.

Use localStorage for persistence.

==================================================
PROJECT STRUCTURE
==================================================

Keep the React folder beginner-friendly.

Suggested structure:

src/

components/
Navbar.jsx
Footer.jsx
ComplaintCard.jsx
DepartmentCard.jsx
StatusBadge.jsx
AnnouncementCard.jsx
DashboardCard.jsx
SuccessStoryCard.jsx
TestimonialCard.jsx

pages/
Home.jsx
Login.jsx
Dashboard.jsx
ReportComplaint.jsx
TrackComplaint.jsx
IssueExplorer.jsx
ComplaintDetails.jsx
CampusMap.jsx
Departments.jsx
CampusAnalytics.jsx
LostFound.jsx
Community.jsx
Announcements.jsx
HallOfImprovements.jsx
Notifications.jsx
Profile.jsx
Help.jsx

admin/
AdminDashboard.jsx
AdminComplaints.jsx
AdminAnalytics.jsx
AdminPerformance.jsx

data/
sampleData.js

App.jsx
main.jsx
index.css

Do not over-engineer the folder structure.

==================================================
FUTURE SCOPE
==================================================

Keep these as future scope, NOT current implementation:

- AI image classification
- AI priority prediction
- QR code reporting
- Smart department assignment
- Duplicate complaint detection
- AI chatbot
- Push notifications
- Predictive maintenance

The current version should remain a frontend-focused project.

==================================================
FINAL DEMO FLOW
==================================================

Student:

Login
↓
Dashboard
↓
Report Complaint
↓
Fill Form
↓
Upload Image
↓
Submit
↓
Complaint ID
↓
Track Complaint
↓
View Status
↓
Issue Explorer
↓
Upvote
↓
Campus Map
↓
Lost & Found
↓
Community
↓
Announcements
↓
Hall of Improvements

Admin:

Admin Login
↓
Admin Dashboard
↓
View Complaints
↓
Search / Filter
↓
Open Complaint
↓
Change Status
↓
Assign Department
↓
Change Priority
↓
Analytics
↓
Performance

==================================================
IMPORTANT FINAL REQUIREMENT
==================================================

Before generating the project, understand this clearly:

I AM A 2ND-YEAR STUDENT.

I want an impressive project, but I must be able to understand and explain the code during my college evaluation and viva.

Therefore:

DO NOT make the code unnecessarily complicated.

DO NOT use technologies that I did not ask for.

DO NOT add advanced React concepts.

Use only:

HTML
CSS
JavaScript
Basic React

And in React ONLY:

- map()
- conditional rendering
- basic state/useState
- routing

The website should look professional because of excellent:

HTML
CSS
JavaScript
UI/UX
responsive design
functionality

NOT because of advanced React.

==================================================
FINAL OUTPUT
==================================================

Generate the COMPLETE WORKING React project.

Make sure:

- All pages work
- All routes work
- Navigation works
- Buttons work
- Forms work
- Validation works
- Image preview works
- Search works
- Filters work
- Sorting works
- Upvote works
- Complaint tracking works
- Status updates work
- Lost & Found works
- Campus Map works
- Analytics work
- Admin dashboard works
- localStorage works
- Responsive design works
- No broken imports
- No syntax errors
- No unnecessary dependencies
- No console errors

The final project should feel like:

"An actual university student built a serious campus problem-solving platform using strong HTML, CSS and JavaScript, with beginner-level React."

PROJECT NAME:

# CAMPUS FIX

TAGLINE:

# Report. Track. Improve Your Campus.
IMPORTANT OUTPUT FORMAT:

Do not only describe the project or give me partial code.

I need the ACTUAL COMPLETE SOURCE CODE for the entire React project.

Generate every required file with its complete code, including:
- package.json
- index.html
- App.jsx
- main.jsx
- index.css
- all components
- all pages
- all admin pages
- sample data files
- utility JavaScript files if required

Do not leave placeholders such as:
"add your code here"
"implement this later"
"write the remaining code"
or
"etc."

Every required file must contain complete working code.

The project must be directly runnable after installing the required dependencies.

Keep all code beginner-friendly according to my requirements.</body>

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://campus-fix-express.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/cf1b07ed-20e9-4e44-8d1e-7792d4bf17cd).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

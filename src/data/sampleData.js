// ============================================================
// CAMPUS FIX - demo data (plain JavaScript arrays and objects)
// ============================================================

import imgElectrical from "../assets/issue-electrical.jpg";
import imgWater from "../assets/issue-water.jpg";
import imgWifi from "../assets/issue-wifi.jpg";
import imgClassroom from "../assets/issue-classroom.jpg";

export const issueImages = {
  electrical: imgElectrical,
  water: imgWater,
  wifi: imgWifi,
  classroom: imgClassroom,
};

export const categories = [
  "Electrical",
  "Plumbing",
  "Cleanliness",
  "Infrastructure",
  "Internet / Wi-Fi",
  "Classroom",
  "Hostel",
  "Library",
  "Canteen",
  "Security",
  "Parking",
  "Other",
];

export const priorities = ["Low", "Medium", "High"];

export const statusSteps = ["Submitted", "Under Review", "Assigned", "In Progress", "Resolved"];

export const locations = [
  "Main Gate",
  "Academic Block",
  "Library",
  "Hostel",
  "Canteen",
  "Sports Complex",
  "Parking",
  "Computer Labs",
];

export const complaints = [
  {
    id: "CF-2026-00101",
    title: "Corridor lights not working in Academic Block",
    category: "Electrical",
    location: "Academic Block",
    description:
      "The tube lights on the second floor corridor have been off for four days. Evening classes end late and the corridor becomes very dark.",
    status: "In Progress",
    priority: "High",
    upvotes: 42,
    date: "2026-08-10",
    department: "Electrical",
    image: imgElectrical,
    reporter: "Aarav Mehta",
  },
  {
    id: "CF-2026-00102",
    title: "Water leakage near hostel washroom",
    category: "Plumbing",
    location: "Hostel",
    description:
      "A pipe near the ground floor washroom keeps leaking. Water spreads into the corridor and the floor stays slippery all day.",
    status: "Assigned",
    priority: "High",
    upvotes: 37,
    date: "2026-08-09",
    department: "Maintenance",
    image: imgWater,
    reporter: "Neha Sharma",
  },
  {
    id: "CF-2026-00103",
    title: "Wi-Fi keeps disconnecting in Computer Labs",
    category: "Internet / Wi-Fi",
    location: "Computer Labs",
    description:
      "The lab Wi-Fi drops every few minutes during practical sessions, so online compilers and submissions fail repeatedly.",
    status: "Under Review",
    priority: "Medium",
    upvotes: 58,
    date: "2026-08-12",
    department: "IT Department",
    image: imgWifi,
    reporter: "Rohit Nair",
  },
  {
    id: "CF-2026-00104",
    title: "Projector not working in Room 204",
    category: "Classroom",
    location: "Academic Block",
    description:
      "The projector in Room 204 shows a blank blue screen. Teachers have to use the whiteboard for slide-based lectures.",
    status: "Resolved",
    priority: "Medium",
    upvotes: 21,
    date: "2026-07-30",
    department: "IT Department",
    image: imgClassroom,
    reporter: "Simran Kaur",
  },
  {
    id: "CF-2026-00105",
    title: "Dustbins overflowing behind the canteen",
    category: "Cleanliness",
    location: "Canteen",
    description:
      "Bins behind the canteen are not cleared before evening. It creates a bad smell around the seating area.",
    status: "In Progress",
    priority: "Medium",
    upvotes: 29,
    date: "2026-08-11",
    department: "Housekeeping",
    image: imgWater,
    reporter: "Devansh Gupta",
  },
  {
    id: "CF-2026-00106",
    title: "Broken chairs in the Library reading hall",
    category: "Library",
    location: "Library",
    description:
      "Around eight chairs in the main reading hall are broken and unsafe to sit on during long study hours.",
    status: "Submitted",
    priority: "Low",
    upvotes: 13,
    date: "2026-08-13",
    department: "Library Services",
    image: imgClassroom,
    reporter: "Ananya Rao",
  },
  {
    id: "CF-2026-00107",
    title: "No security light at the Parking exit",
    category: "Security",
    location: "Parking",
    description:
      "The parking exit gate has no working light after 8 PM, which makes it difficult to move two-wheelers out safely.",
    status: "Assigned",
    priority: "High",
    upvotes: 34,
    date: "2026-08-08",
    department: "Security",
    image: imgElectrical,
    reporter: "Kabir Sethi",
  },
  {
    id: "CF-2026-00108",
    title: "Damaged track surface at Sports Complex",
    category: "Infrastructure",
    location: "Sports Complex",
    description:
      "Two sections of the running track have cracks and loose stones. Students have already slipped during morning practice.",
    status: "Under Review",
    priority: "Medium",
    upvotes: 26,
    date: "2026-08-07",
    department: "Infrastructure",
    image: imgWater,
    reporter: "Meera Joshi",
  },
];

export const departments = [
  {
    name: "Electrical",
    open: 12,
    resolutionRate: 91,
    responseTime: "3.2h",
    status: "Active",
    head: "Er. R. Malhotra",
  },
  {
    name: "IT Department",
    open: 9,
    resolutionRate: 95,
    responseTime: "2.8h",
    status: "Active",
    head: "Ms. P. Iyer",
  },
  {
    name: "Maintenance",
    open: 18,
    resolutionRate: 88,
    responseTime: "4.1h",
    status: "Busy",
    head: "Mr. S. Yadav",
  },
  {
    name: "Housekeeping",
    open: 7,
    resolutionRate: 93,
    responseTime: "2.2h",
    status: "Active",
    head: "Mrs. L. D'Souza",
  },
  {
    name: "Security",
    open: 5,
    resolutionRate: 94,
    responseTime: "1.9h",
    status: "Active",
    head: "Mr. A. Khan",
  },
  {
    name: "Hostel Administration",
    open: 14,
    resolutionRate: 85,
    responseTime: "5.0h",
    status: "Busy",
    head: "Dr. V. Menon",
  },
  {
    name: "Infrastructure",
    open: 11,
    resolutionRate: 82,
    responseTime: "6.4h",
    status: "Backlog",
    head: "Er. T. Bansal",
  },
  {
    name: "Library Services",
    open: 4,
    resolutionRate: 96,
    responseTime: "2.5h",
    status: "Active",
    head: "Mrs. K. Pillai",
  },
];

export const announcements = [
  {
    id: 1,
    title: "Water supply maintenance in Hostel Block C",
    date: "2026-08-16",
    category: "Maintenance",
    description:
      "Water supply will remain closed between 10 AM and 2 PM on Sunday for overhead tank cleaning. Please store water in advance.",
  },
  {
    id: 2,
    title: "Campus Wi-Fi upgrade for Computer Labs",
    date: "2026-08-14",
    category: "IT",
    description:
      "New access points are being installed in Lab 1 to Lab 4. Short disconnections may happen during working hours this week.",
  },
  {
    id: 3,
    title: "Cleanliness drive on Friday morning",
    date: "2026-08-12",
    category: "Campus Life",
    description:
      "Volunteers from every department will join the campus cleanliness drive starting 8 AM near the Main Gate.",
  },
  {
    id: 4,
    title: "Mid-semester exam schedule published",
    date: "2026-08-10",
    category: "Academics",
    description:
      "The detailed exam timetable is now available on the notice board and with class representatives.",
  },
  {
    id: 5,
    title: "Library reading hall extended hours (trial)",
    date: "2026-08-06",
    category: "Library",
    description:
      "As a two-week trial, the reading hall will stay open until 11 PM from Monday to Friday.",
  },
  {
    id: 6,
    title: "Parking area re-marking work",
    date: "2026-08-02",
    category: "Infrastructure",
    description:
      "Two-wheeler parking slots will be re-marked this weekend. Please park near the Sports Complex on Saturday.",
  },
];

export const lostFoundItems = [
  {
    id: "LF-01",
    type: "Lost",
    name: "Student ID Card (2nd Year, CSE)",
    category: "ID Card",
    location: "Canteen",
    date: "2026-08-13",
    description: "Blue lanyard with a printed ID card. Name on the card is partly faded.",
    status: "Open",
  },
  {
    id: "LF-02",
    type: "Lost",
    name: "Black leather wallet",
    category: "Wallet",
    location: "Library",
    date: "2026-08-11",
    description: "Contains bus pass and a few notes. Lost near the reading hall entrance.",
    status: "Open",
  },
  {
    id: "LF-03",
    type: "Lost",
    name: "Data Structures textbook",
    category: "Books",
    location: "Academic Block",
    date: "2026-08-09",
    description: "Second-hand copy with the owner's name written on the first page.",
    status: "Claimed",
  },
  {
    id: "LF-04",
    type: "Found",
    name: "Set of two keys with red keychain",
    category: "Keys",
    location: "Sports Complex",
    date: "2026-08-12",
    description: "Found near the changing room. Kept at the sports office counter.",
    status: "Open",
  },
  {
    id: "LF-05",
    type: "Found",
    name: "Wired earphones in a grey pouch",
    category: "Electronics",
    location: "Computer Labs",
    date: "2026-08-10",
    description: "Left on the third row of Lab 2. Handed over to the lab assistant.",
    status: "Open",
  },
  {
    id: "LF-06",
    type: "Found",
    name: "Navy blue backpack",
    category: "Bag",
    location: "Main Gate",
    date: "2026-08-08",
    description: "Contains notebooks and a water bottle. Kept at the security desk.",
    status: "Returned",
  },
];

export const successStories = [
  {
    id: 1,
    title: "Library lighting improvement",
    problem: "The reading hall had weak yellow lights that strained the eyes during evening study.",
    action: "Forty old tubes were replaced with LED panels and two extra circuits were added.",
    result: "Evening seat occupancy went up and eye-strain complaints stopped completely.",
    department: "Electrical",
    date: "2026-07-22",
    students: 1200,
  },
  {
    id: 2,
    title: "Hostel water pressure fixed",
    problem: "Top-floor rooms received almost no water during morning hours.",
    action: "A booster pump was installed and the old feed pipeline was replaced.",
    result: "All four floors now get steady supply from 6 AM to 10 AM.",
    department: "Maintenance",
    date: "2026-07-05",
    students: 640,
  },
  {
    id: 3,
    title: "Lab Wi-Fi stability project",
    problem: "Practical exams were interrupted by frequent Wi-Fi drops in the labs.",
    action: "Six new access points were installed and the lab network was placed on a separate line.",
    result: "Disconnections during lab hours dropped from daily to almost none.",
    department: "IT Department",
    date: "2026-06-28",
    students: 900,
  },
  {
    id: 4,
    title: "Canteen waste segregation",
    problem: "Mixed waste around the canteen created a bad smell in the seating area.",
    action: "Colour-coded bins were placed and a second clearing round was added at 4 PM.",
    result: "Cleanliness complaints from the canteen zone fell by more than half.",
    department: "Housekeeping",
    date: "2026-06-14",
    students: 2100,
  },
  {
    id: 5,
    title: "Safer parking exit",
    problem: "The parking exit was unlit and crowded after evening lectures.",
    action: "Two flood lights and a painted exit lane were added with a guard posted till 9 PM.",
    result: "Evening exit time reduced and no accidents were reported since the change.",
    department: "Security",
    date: "2026-05-30",
    students: 780,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Aarav Mehta",
    course: "B.Tech CSE, 2nd Year",
    text: "Reporting a complaint is now much easier. I raised a corridor light issue in one minute from my phone.",
  },
  {
    id: 2,
    name: "Neha Sharma",
    course: "B.Tech ECE, 3rd Year",
    text: "I can track exactly what is happening with my issue instead of asking the office again and again.",
  },
  {
    id: 3,
    name: "Rohit Nair",
    course: "BCA, 2nd Year",
    text: "The Lost & Found section is very useful. I got my ID card back on the same day I posted about it.",
  },
  {
    id: 4,
    name: "Simran Kaur",
    course: "B.Tech IT, 4th Year",
    text: "Upvoting helps genuine problems reach the top. Our lab Wi-Fi issue was picked up because of it.",
  },
  {
    id: 5,
    name: "Devansh Gupta",
    course: "B.Sc, 1st Year",
    text: "The campus map made me realise which blocks report the most issues. It feels transparent.",
  },
];

export const campusLocations = [
  {
    name: "Main Gate",
    top: 12,
    left: 18,
    level: "Low",
    open: 3,
    resolved: 94,
    common: "Security",
    department: "Security",
  },
  {
    name: "Academic Block",
    top: 26,
    left: 55,
    level: "High",
    open: 16,
    resolved: 82,
    common: "Electrical",
    department: "Electrical",
  },
  {
    name: "Library",
    top: 48,
    left: 24,
    level: "Medium",
    open: 8,
    resolved: 90,
    common: "Infrastructure",
    department: "Library Services",
  },
  {
    name: "Hostel",
    top: 66,
    left: 62,
    level: "High",
    open: 19,
    resolved: 79,
    common: "Plumbing",
    department: "Hostel Administration",
  },
  {
    name: "Canteen",
    top: 40,
    left: 78,
    level: "Medium",
    open: 9,
    resolved: 88,
    common: "Cleanliness",
    department: "Housekeeping",
  },
  {
    name: "Sports Complex",
    top: 78,
    left: 30,
    level: "Low",
    open: 4,
    resolved: 92,
    common: "Infrastructure",
    department: "Infrastructure",
  },
  {
    name: "Parking",
    top: 18,
    left: 82,
    level: "Medium",
    open: 7,
    resolved: 86,
    common: "Security",
    department: "Security",
  },
  {
    name: "Computer Labs",
    top: 58,
    left: 44,
    level: "High",
    open: 14,
    resolved: 84,
    common: "Internet / Wi-Fi",
    department: "IT Department",
  },
];

export const monthlyComplaints = [
  { month: "Mar", count: 96 },
  { month: "Apr", count: 128 },
  { month: "May", count: 84 },
  { month: "Jun", count: 142 },
  { month: "Jul", count: 165 },
  { month: "Aug", count: 118 },
];

export const notificationsData = [
  {
    id: 1,
    text: "Your complaint CF-2026-00101 is now In Progress.",
    date: "2026-08-14",
    type: "Status",
    read: false,
  },
  {
    id: 2,
    text: "Your complaint CF-2026-00104 has been resolved by the IT Department.",
    date: "2026-08-12",
    type: "Resolved",
    read: false,
  },
  {
    id: 3,
    text: "Your complaint CF-2026-00103 received 10 new upvotes.",
    date: "2026-08-12",
    type: "Community",
    read: false,
  },
  {
    id: 4,
    text: "Water supply maintenance is scheduled in Hostel Block C on Sunday.",
    date: "2026-08-11",
    type: "Announcement",
    read: true,
  },
  {
    id: 5,
    text: "A found item matching 'ID Card' was posted in Lost & Found.",
    date: "2026-08-09",
    type: "Lost & Found",
    read: true,
  },
];

export const discussions = [
  {
    id: 1,
    title: "Can we get more charging points in the library?",
    author: "Ishita B.",
    replies: 14,
    date: "2026-08-13",
    text: "Only four sockets work in the whole reading hall, and laptops die by evening.",
  },
  {
    id: 2,
    title: "Cycle stand near the Academic Block",
    author: "Yash P.",
    replies: 9,
    date: "2026-08-11",
    text: "A small covered stand would help students who cycle to campus daily.",
  },
  {
    id: 3,
    title: "Weekend canteen timings",
    author: "Fatima S.",
    replies: 21,
    date: "2026-08-08",
    text: "Hostel students would benefit if the canteen opened by 8 AM on Sundays too.",
  },
];

export const suggestions = [
  { id: 1, text: "Add water coolers on every floor of the Academic Block", votes: 86 },
  { id: 2, text: "Put QR code posters in classrooms for faster reporting", votes: 74 },
  { id: 3, text: "Separate complaint queue for exam-week issues", votes: 51 },
  { id: 4, text: "Monthly cleanliness score for each hostel block", votes: 40 },
];

export const faqs = [
  {
    id: 1,
    q: "How do I submit a complaint?",
    a: "Open the Report Issue page, fill the title, category, location, description and priority, attach a photo if you have one, and submit. A complaint ID is generated instantly.",
  },
  {
    id: 2,
    q: "How do I track my complaint?",
    a: "Go to Track Complaint and enter your complaint ID, for example CF-2026-00101. The full status timeline from Submitted to Resolved is displayed.",
  },
  {
    id: 3,
    q: "Can I upload an image with my complaint?",
    a: "Yes. Image upload is optional but recommended. You can see a preview before submitting so you know the correct photo is attached.",
  },
  {
    id: 4,
    q: "How does upvoting work?",
    a: "Every student can upvote a complaint once. Complaints with more upvotes are treated as higher community priority by the administration.",
  },
  {
    id: 5,
    q: "How do I report a lost item?",
    a: "Open Lost & Found, choose Report Lost Item or Report Found Item, and fill the short form. Your post appears in the matching tab immediately.",
  },
  {
    id: 6,
    q: "Who resolves the complaints?",
    a: "Each complaint is assigned to a campus department such as Electrical, IT, Maintenance, Housekeeping or Security, and that team updates the status.",
  },
];

export const lostFoundCategories = [
  "ID Card",
  "Wallet",
  "Phone",
  "Books",
  "Bag",
  "Keys",
  "Electronics",
  "Other",
];

export const demoUsers = [
  {
    email: "student@campusfix.com",
    password: "student123",
    role: "student",
    name: "Aarav Mehta",
    studentId: "22CSE1045",
    department: "Computer Science",
    semester: "4th Semester",
  },
  {
    email: "admin@campusfix.com",
    password: "admin123",
    role: "admin",
    name: "Campus Admin",
    studentId: "ADMIN-01",
    department: "Administration",
    semester: "-",
  },
];

/**
 * All content below is taken from the existing raosgroup.org website.
 * Images are the school's own assets, served from raosgroup.org/images.
 */

export const IMG = "https://raosgroup.org/images";

export const SITE = {
  name: "Rao's Group of Schools",
  shortName: "Rao's Group",
  tagline: "Shaping a bright future for your children",
  foundedYear: 1985,
  foundedPlace: "Kukatpally, Hyderabad",
  students: "10,000+",
  phone: "+91 93922 61228",
  phoneHref: "tel:+919392261228",
  email: "srprincipal@raosgroup.com",
  whatsapp: "https://wa.me/918886662364",
  whatsappDisplay: "+91 88866 62364",
  region: "Telangana, India",
  logo: `${IMG}/raoslogo.png`,
} as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/curriculum", label: "Curriculum" },
  { to: "/campus-life", label: "Campus Life" },
  { to: "/admissions", label: "Admissions" },
  { to: "/branches", label: "Branches" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export const HERO_SLIDES = [
  {
    image: `${IMG}/gallery/slide2.jpg`,
    alt: "Rao's Group students on campus at the start of the school day",
    kicker: "Welcome to Rao's Group of Schools",
    title: "Shaping a bright future for your children",
    body: "A legacy of educational excellence in Telangana since 1985 — now a network of campuses serving more than 10,000 students.",
  },
  {
    image: `${IMG}/gallery/sliderimage2.jpeg`,
    alt: "Students working together in a Rao's Group classroom",
    kicker: "Join the journey",
    title: "Investing in your child's future, one step at a time",
    body: "Hands-on, project-based learning that asks students to think like engineers, artists, scientists and entrepreneurs.",
  },
  {
    image: `${IMG}/gallery/sliderimg5.jpeg`,
    alt: "Rao's Group students taking part in a school activity",
    kicker: "Discover the future",
    title: "Empowering every child to succeed",
    body: "Traditional values, modern practice — a holistic education that prepares students for the real world.",
  },
] as const;

export const STATS = [
  { value: "1985", label: "Founded in Kukatpally, Hyderabad" },
  { value: "10,000+", label: "Students across our campuses" },
  { value: "22", label: "Branches listed across Telangana" },
  { value: "40+", label: "Years of teaching experience behind us" },
] as const;

export const PATHWAYS = [
  {
    slug: "preschool-journey",
    title: "Preschool Journey",
    grades: "Nursery – UKG",
    image: `${IMG}/gallery/elementary.jpeg`,
    alt: "Young children learning through play in a Rao's Group preschool classroom",
    summary:
      "Laying the groundwork for a lifetime of learning with a play-based approach, emphasising social skills, creativity and emotional growth.",
    details: [
      "Play-based learning that builds curiosity before it builds worksheets",
      "Daily routines that develop social skills, sharing and self-expression",
      "Early literacy and numeracy introduced through stories, song and movement",
      "Close communication with parents during the first school years",
    ],
  },
  {
    slug: "foundational-learning",
    title: "Foundational Learning",
    grades: "Classes 1 – 5",
    image: `${IMG}/gallery/kinder.jpeg`,
    alt: "Primary school students in a lesson at Rao's Group of Schools",
    summary:
      "Fostering a passion for learning with engaging lessons, student support and a focus on independent thinking.",
    details: [
      "Strong grounding in language, mathematics, science and social studies",
      "Independent thinking encouraged through questions, projects and reading",
      "Regular assessment with clear feedback to students and parents",
      "Art, music, sport and club activities built into the week",
    ],
  },
  {
    slug: "adolescent-development",
    title: "Adolescent Development",
    grades: "Classes 6 – 10",
    image: `${IMG}/gallery/students.jpeg`,
    alt: "Senior students at work in a Rao's Group of Schools science laboratory",
    summary:
      "A challenging curriculum with personalised attention, preparing students for academic excellence in high school and beyond.",
    details: [
      "Subject specialists across sciences, mathematics, languages and humanities",
      "Laboratory, workshop and coding work — from drafting designs to executing projects",
      "Board examination preparation with structured revision and mentoring",
      "Leadership, debate and community service as part of school life",
    ],
  },
] as const;

export const ADMISSION_STEPS = [
  {
    title: "Fill the online enquiry form",
    body: "Complete the Online Enquiry (OE) form to begin your application at Rao's School. Use the OE number generated as a reference for further communication.",
  },
  {
    title: "Attend orientation",
    body: "You will be invited to attend an online orientation delivered by a member of our leadership team.",
  },
  {
    title: "Register",
    body: "After learning about the school, please register your application. Please note that registration does not guarantee admission.",
  },
  {
    title: "Attend a 1:1 interaction",
    body: "You will have a one-on-one interaction with a member of the academic team. Both parents and the child are encouraged to attend.",
  },
  {
    title: "You accept",
    body: "Selected applicants will receive their provisional acceptance into Rao's School. The school's decision is final regarding admission.",
  },
  {
    title: "We confirm admission",
    body: "Once the admission formalities are completed, parents will receive a confirmation. Congratulations, and welcome to the Rao's School family!",
  },
] as const;

export const FACILITIES = [
  {
    image: `${IMG}/gallery/classrooms.jpeg`,
    alt: "Students seated attentively in a well-equipped Rao's Group classroom",
    title: "A wide range of classrooms",
    body: "Our facilities provide an engaging environment for students to thrive, from early-years rooms to senior laboratories.",
  },
  {
    image: `${IMG}/gallery/teachingstaff.jpg`,
    alt: "Teaching staff at Rao's Group of Schools working with a student",
    title: "Diverse educators",
    body: "Our dedicated educators are committed to providing personalised attention and academic support to every student.",
  },
  {
    image: `${IMG}/gallery/campus.jpeg`,
    alt: "View across a Rao's Group of Schools campus",
    title: "An expansive campus network",
    body: "We have multiple campuses across Telangana to serve the diverse needs of our community.",
  },
] as const;

export const GALLERY = [
  {
    category: "Sports",
    blurb: "Games, athletics and team sport across our campuses.",
    images: [
      { src: `${IMG}/gallery/9.jpeg`, alt: "Rao's Group students competing at a school sports event" },
      { src: `${IMG}/gallery/8.jpeg`, alt: "Students taking part in a track event on the school ground" },
      { src: `${IMG}/gallery/11.jpeg`, alt: "School team photograph after a sports fixture" },
      { src: `${IMG}/gallery/10.jpeg`, alt: "Students during a physical education session" },
    ],
  },
  {
    category: "Academics",
    blurb: "Classroom work, laboratories and assessment days.",
    images: [
      { src: `${IMG}/gallery/academics1.jpeg`, alt: "Students working through an academic lesson" },
      { src: `${IMG}/gallery/academics2.jpeg`, alt: "Teacher guiding students through classwork" },
      { src: `${IMG}/gallery/6.jpg`, alt: "Students presenting their academic work" },
      { src: `${IMG}/gallery/12.jpeg`, alt: "Classroom session at a Rao's Group campus" },
    ],
  },
  {
    category: "Science Fair",
    blurb: "Student-built projects, experiments and exhibitions.",
    images: [
      { src: `${IMG}/gallery/3.jpg`, alt: "Students displaying a science fair project" },
      { src: `${IMG}/gallery/sliderimg1.jpeg`, alt: "Science exhibition at a Rao's Group campus" },
      { src: `${IMG}/gallery/activities2.jpeg`, alt: "Students demonstrating a hands-on experiment" },
      { src: `${IMG}/gallery/coursemanagement.jpg`, alt: "Students reviewing project material together" },
    ],
  },
] as const;

export const ACTIVITIES = [
  { title: "Sports Activities", body: "Engage in various sports to promote physical fitness and teamwork." },
  { title: "Arts and Crafts", body: "Explore your creativity through painting, drawing and crafting." },
  { title: "Music and Performing Arts", body: "Join music bands and drama clubs to showcase your talents." },
  {
    title: "Debate and Public Speaking",
    body: "Enhance your communication skills through engaging debates and public speaking opportunities.",
  },
  { title: "Community Service", body: "Get involved in projects that promote social responsibility." },
  { title: "Science and Technology Club", body: "Explore science through hands-on experiments and projects." },
  { title: "Environment Club", body: "Promote environmental awareness and sustainability initiatives." },
  { title: "Culinary Arts", body: "Learn cooking skills and explore various cuisines creatively." },
  { title: "Tech and Coding Club", body: "Engage in coding challenges and tech projects to build skills." },
  { title: "Leadership Development", body: "Participate in programmes that enhance your leadership skills." },
] as const;

export const ACADEMIC_SYSTEMS = [
  {
    image: `${IMG}/gallery/coursemanagement.jpg`,
    alt: "Teachers planning course curricula",
    title: "Course management",
    body: "Course curricula, subject allocation and lesson planning are managed centrally for an optimised learning experience.",
  },
  {
    image: `${IMG}/gallery/timetable.jpg`,
    alt: "A school timetable being prepared",
    title: "Timetable management",
    body: "Class schedules are built to ensure smooth coordination of all subjects and activities.",
  },
  {
    image: `${IMG}/gallery/assessment.jpg`,
    alt: "Students sitting an examination",
    title: "Assessment and evaluation",
    body: "Examinations, quizzes and grading with detailed reporting so progress is tracked, not guessed.",
  },
  {
    image: `${IMG}/gallery/attendance-management.jpg`,
    alt: "Attendance register being marked",
    title: "Attendance management",
    body: "Student and teacher attendance is tracked efficiently, including leave management and reports.",
  },
  {
    image: `${IMG}/gallery/schoolassesment.jpg`,
    alt: "Student completing homework",
    title: "Scholarly tasks",
    body: "Homework is distributed and tracked digitally, ensuring timely submission and feedback.",
  },
  {
    image: `${IMG}/gallery/library.jpg`,
    alt: "The school library",
    title: "Library management",
    body: "Library resources are managed with book lending tracked and the catalogue kept current.",
  },
  {
    image: `${IMG}/gallery/collab.jpg`,
    alt: "Parents meeting a teacher",
    title: "Dialogue and partnership",
    body: "Communication between teachers, students and parents through built-in messaging and forums.",
  },
  {
    image: `${IMG}/gallery/Analytics-Reporting.jpg`,
    alt: "Academic performance reports",
    title: "Analytics and reports",
    body: "Reports on student performance, attendance and academic metrics support informed decisions.",
  },
  {
    image: `${IMG}/gallery/schoolportal.png`,
    alt: "The student and teacher portal",
    title: "Student and teacher portals",
    body: "Dedicated portals for students and teachers to access schedules, assignments and results.",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "A. Priyanka",
    role: "Parent",
    quote:
      "Our family is thrilled with the dedicated faculty who genuinely care about every student's success.",
  },
  {
    name: "S. Raghav",
    role: "Student",
    quote:
      "I'm grateful for the knowledgeable teachers who have made challenging subjects more approachable through hands-on learning.",
  },
  {
    name: "N. Anjali",
    role: "Parent",
    quote:
      "I've noticed significant improvement in my son's exam results, and the regular parent meetings have been invaluable.",
  },
  {
    name: "K. Vidhya",
    role: "Parent",
    quote:
      "This school excels in nurturing all aspects of a child's growth; the management truly prioritises both academics and extracurricular activities.",
  },
] as const;

export const BRANCHES = [
  "Sangeeth Nagar",
  "Balajinagar",
  "Miyapur",
  "Old MIG",
  "Gulmohar",
  "Nizampet",
  "Kleos",
  "Jeedimetla",
  "Shankarpally",
  "Sangareddy",
  "Zaheerabad",
  "Siddipet",
  "SRK Siddipet",
  "Karimnagar",
  "Ramagundam",
  "Hasanaparthy",
  "Deepthisri Nagar",
  "Sadhashivpet",
  "Dhulapally",
  "Beeramguda",
  "Sri Akshara Vidyalaya High School",
  "Muthangi",
] as const;

export const CLASSES = [
  "Nursery",
  "LKG",
  "UKG",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
] as const;

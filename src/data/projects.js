import bloodHome from '../assets/projects/blood-home.jpg'
import bloodSearch from '../assets/projects/blood-search.jpg'
import bloodFunding from '../assets/projects/blood-funding.jpg'
import pawmartHome from '../assets/projects/pawmart-home.jpg'
import pawmartDashboard from '../assets/projects/pawmart-dashboard.jpg'
import bookHome from '../assets/projects/booklibrary-home.jpg'
import bookAdd from '../assets/projects/booklibrary-add.jpg'
import bookAll from '../assets/projects/booklibrary-all.jpg'

export const projects = [
  {
    id: 'blood-donation-center',
    tag: '01 · Full-stack web app',
    name: 'Blood Donation Center',
    meta: 'Nov 2025 – Dec 2025',
    summary:
      'A full-stack web application for managing blood donation requests and donor registrations, with secure authentication and location-based donor search.',
    features: [
      'Developed a full-stack web application for managing blood donation requests and donor registrations, using Node.js and Express.js for the backend API and React for the frontend.',
      'Implemented user authentication, CRUD operations, and database integration for secure management of donor and recipient information.',
      'Enabled donor search filtered by blood group and location, with a responsive interface across devices.',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    cover: bloodHome,
    gallery: [bloodHome, bloodSearch, bloodFunding],
    links: {
      live: 'https://glittery-buttercream-ba8482.netlify.app/',
      client: 'https://github.com/Shourav52/FrontendEleven.git',
      server: 'https://github.com/Shourav52/Blood-Donation-Backend.git',
    },
  },
  {
    id: 'pawmart',
    tag: '02 · E-commerce web app',
    name: 'PawMart',
    meta: 'E-commerce web application',
    summary:
      'A full-stack e-commerce application for pet products, with product listing, cart, order management, and a customer dashboard.',
    features: [
      'Developed a full-stack e-commerce application enabling users to browse and purchase pet products, with product listing, cart, and order management.',
      'Integrated Swiper for dynamic product carousels and Toastify for real-time notifications, improving interactivity.',
      'Implemented secure authentication and full CRUD operations, and handled deployment for consistent performance across devices.',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    cover: pawmartHome,
    gallery: [pawmartHome, pawmartDashboard],
    links: {
      live: 'https://sprightly-caramel-e0e172.netlify.app/',
      client: 'https://github.com/Shourav52/PawMart.git',
      server: 'https://github.com/Shourav52/BackendTen.git',
    },
  },
  {
    id: 'book-library',
    tag: '03 · Book management platform',
    name: 'Book Library',
    meta: 'Jan 2026 – Present',
    summary:
      'A full-stack book management platform with a Next.js frontend, letting users browse, view, and add book entries to the library.',
    features: [
      'Built a full-stack book management platform with a Next.js frontend, enabling users to browse, view, and add book entries to the library.',
      'Integrated authentication with protected routes and REST API communication between the Next.js frontend and Express.js backend.',
      'Developed an interactive UI featuring book carousels (Swiper), cart functionality, and real-time notifications (React Hot Toast).',
    ],
    stack: ['Next.js', 'React', 'Express.js', 'MongoDB'],
    cover: bookHome,
    gallery: [bookHome, bookAll, bookAdd],
    links: {
      live: 'https://book-library-lilac-alpha.vercel.app/',
      client: 'https://github.com/Shourav52/Book-Store.git',
      server: 'https://github.com/Shourav52/Book-Store-Backend.git',
    },
  },
]

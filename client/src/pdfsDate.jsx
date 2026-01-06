const pdfs = [
  {
    id: 'p1',
    title: 'Computer Networks - Lecture Notes',
    author: 'Prof. A',
    type: 'free',
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    description: 'Comprehensive notes covering the fundamentals of computer networking, including layers, protocols, and security.',
    topics: ['OSI Model', 'TCP/IP', 'Network Security', 'Routing Algorithms', 'Wireless Networks']
  },
  {
    id: 'p2',
    title: 'Operating Systems - Complete Notes',
    author: 'Prof. B',
    type: 'free',
    url: 'https://www.adobe.com/support/acrobat/pdfs/enchanted.pdf',
    description: 'Deep dive into process management, memory handling, and file systems.',
    topics: ['Process Scheduling', 'Deadlocks', 'Memory Management', 'File Systems', 'Virtualization']
  },
  {
    id: 'p3',
    title: 'Algorithms (Advanced) - eBook',
    author: 'Paid Publisher',
    type: 'paid',
    price: 9.99,
    purchaseLink: '#',
    preview: 'https://via.placeholder.com/800x1000?text=Preview+Unavailable',
    description: 'Advanced algorithmic strategies for competitive programming and interviews.',
    topics: ['Dynamic Programming', 'Graph Theory', 'Greedy Algorithms', 'Complexity Analysis']
  },
  {
    id: 'p4',
    title: 'Digital Design - Question Bank',
    author: 'Paid Publisher',
    type: 'paid',
    price: 4.99,
    purchaseLink: '#',
    preview: 'https://via.placeholder.com/800x1000?text=Preview+Unavailable',
    description: 'A collection of solved problems and questions for Digital Logic Design.',
    topics: ['Boolean Algebra', 'Combinational Circuits', 'Sequential Circuits', 'Verilog']
  },
  // NEW FREE PDFs
  {
    id: 'p5',
    title: 'Data Structures 101',
    author: 'Prof. C',
    type: 'free',
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    description: 'Beginner-friendly guide to essential data structures.',
    topics: ['Arrays & Linked Lists', 'Stacks & Queues', 'Trees & Graphs', 'Hashing']
  },
  {
    id: 'p6',
    title: 'Introduction to Psychology',
    author: 'Open Courseware',
    type: 'free',
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    description: 'Understanding the human mind and behavior.',
    topics: ['Cognition', 'Behavioral Therapy', 'Developmental Psychology', 'Social Psychology']
  },
  {
    id: 'p7',
    title: 'Basic Mathematics',
    author: 'Math Dept',
    type: 'free',
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    description: 'Refresher on foundational mathematical concepts.',
    topics: ['Algebra', 'Geometry', 'Trigonometry', 'Calculus Basics']
  },
  {
    id: 'p8',
    title: 'World History Overview',
    author: 'History Channel',
    type: 'free',
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    description: 'A journey through major historical events and civilizations.',
    topics: ['Ancient Civilizations', 'Middle Ages', 'Industrial Revolution', 'Modern Era']
  },
  {
    id: 'p9',
    title: 'Physics Mechanics Notes',
    author: 'Physics Lab',
    type: 'free',
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    description: 'Core concepts of classical mechanics and kinematics.',
    topics: ['Newton\'s Laws', 'Kinematics', 'Work & Energy', 'Rotational Motion']
  },
  // NEW PAID PDFs
  {
    id: 'p10',
    title: 'Advanced Machine Learning',
    author: 'Tech Press',
    type: 'paid',
    price: 19.99,
    purchaseLink: '#',
    preview: 'https://via.placeholder.com/800x1000?text=ML+Guide',
    description: 'Master modern ML techniques and neural networks.',
    topics: ['Deep Learning', 'Neural Networks', 'NLP', 'Computer Vision']
  },
  {
    id: 'p11',
    title: 'Full Stack Web Development',
    author: 'Coding Academy',
    type: 'paid',
    price: 24.99,
    purchaseLink: '#',
    preview: 'https://via.placeholder.com/800x1000?text=Web+Dev',
    description: 'Complete guide to building modern web applications.',
    topics: ['React', 'Node.js', 'MongoDB', 'CSS Grid/Flexbox']
  },
  {
    id: 'p12',
    title: 'Cloud Computing Architecture',
    author: 'Cloud Experts',
    type: 'paid',
    price: 14.50,
    purchaseLink: '#',
    preview: 'https://via.placeholder.com/800x1000?text=Cloud',
    description: 'Designing scalable and resilient cloud systems.',
    topics: ['AWS/Azure', 'Microservices', 'Docker & Kubernetes', 'Serverless']
  },
  {
    id: 'p13',
    title: 'Cybersecurity Essentials',
    author: 'Security Plus',
    type: 'paid',
    price: 29.99,
    purchaseLink: '#',
    preview: 'https://via.placeholder.com/800x1000?text=Security',
    description: 'Protecting systems from modern cyber threats.',
    topics: ['Cryptography', 'Network Security', 'Ethical Hacking', 'Risk Management']
  },
  {
    id: 'p14',
    title: 'Blockchain for Beginners',
    author: 'Crypto Edu',
    type: 'paid',
    price: 12.00,
    purchaseLink: '#',
    preview: 'https://via.placeholder.com/800x1000?text=Blockchain',
    description: 'Understanding the technology behind Bitcoin and Ethereum.',
    topics: ['Smart Contracts', 'Consensus Mechanisms', 'DeFi', 'NFTs']
  },
];

export default pdfs;
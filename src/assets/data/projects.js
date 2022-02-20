import shopEasyImg from '../../assets/images/shopeasy.png';

const projects = [
  {
    id: 1,
    name: 'ShopEasy',
    description: 'An ecommerce app to shop your favorite products',
    bannerImg: shopEasyImg,
    technologies: [
      'React',
      'Redux',
      'TailwindCSS',
      'Nodejs',
      'Expressjs',
      'Mongodb',
    ],
    features: [
      'Products listing',
      'Shopping cart',
      'Product reviews and ratings',
      'Register, Login, Logout, Forgot password, Reset password',
      'Product pagination',
      'Product search',
      'Checkout process (shipping, payment method, etc)',
      'User profile with orders',
      'Admin product management',
      'Admin user management',
      'Admin order management',
      'Razorpay integration for payments',
      'Wishlist',
    ],
    purpose: '',
    challenges: '',
    github: '',
    introduction:
      'An Ecommerce app built using React and Nodejs (MERN) stack. Styling is done using TailwindCSS. For state management, I have used redux toolkit. The motivation behind this project was to build end to end learning project with various features that we as a users encounter while using any ecommerce platform.',
    goals: '',
    screenshots: [],
    learnings: '',
    misc: '',
    slug: 'shopeasy',
    demo: 'https://shopeasy-mern.herokuapp.com',
    github: 'https://github.com/vin18/shopeasy',
  },
];

export default projects;

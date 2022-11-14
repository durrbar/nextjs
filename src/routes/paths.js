// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}


// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: '/',
  login: '/login',
  register: '/register',
  loginUnprotected: '/login-unprotected',
  registerUnprotected: '/register-unprotected',
  verify: '/verify',
  resetPassword: '/reset-password',
};

export const PATH_PAGE = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment',
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
  page404: '/404',
  page500: '/500',
  components: '/components',
  product: {
    view: (name) => path(`/product/${name}`),
  },
};

export const PATH_ACCOUNTS_PAGE = {
  user: {
    root: '/',
    settings: '/settings',
  },
  checkout: '/checkout',  
  invoice: {
    root: '/invoice',
    view: (id) => `/invoice/${id}`,
  },
};

export const PATH_DASHBOARD = {
  root: '/',
  general: {
    app: '/app',
    ecommerce: '/ecommerce',
    analytics: '/analytics',
    banking: '/banking',
    booking: '/booking',
  },
  mail: {
    root: '/mail',
    all: '/mail/all',
  },
  chat: {
    root: '/chat',
    new: '/chat/new',
    view: (name) => `/chat/${name}`,
  },
  calendar: '/calendar',
  kanban: '/kanban',
  user: {
    root: '/user',
    new: '/user/new',
    list: '/user/list',
    cards: '/user/cards',
    profile: '/user/profile',
    account: '/user/account',
    edit: (name) => `/user/${name}/edit`,
    demoEdit: `/user/reece-chung/edit`,
  },
  eCommerce: {
    root: '/e-commerce',
    shop: '/e-commerce/shop',
    list: '/e-commerce/list',
    checkout: '/e-commerce/checkout',
    new: '/e-commerce/product/new',
    view: (name) => `/e-commerce/product/${name}`,
    edit: (name) => `/e-commerce/product/${name}/edit`,
    demoEdit: '/e-commerce/product/nike-blazer-low-77-vintage/edit',
    demoView: '/e-commerce/product/nike-air-force-1-ndestrukt',
  },
  invoice: {
    root: '/invoice',
    list: '/invoice/list',
    new: '/invoice/new',
    view: (id) => `/invoice/${id}`,
    edit: (id) => `/invoice/${id}/edit`,
    demoEdit: '/invoice/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1/edit',
    demoView: '/invoice/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5',
  },
  blog: {
    root: '/blog',
    posts: '/blog/posts',
    new: '/blog/new',
    view: (title) => `/blog/post/${title}`,
    demoView: '/blog/post/apply-these-7-secret-techniques-to-improve-event',
  },
};

export const PATH_DOCS = 'https://docs.durrbar.com';

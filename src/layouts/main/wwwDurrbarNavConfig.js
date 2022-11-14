// routes
import { PATH_DOCS, PATH_PAGE } from '../../routes/paths';
// components
import Iconify from '../../components/Iconify'; 

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const wwwDurrbarNavConfig = [
  {
    title: 'Home',
    icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />,
    path: '/',
  },
  {
    title: 'About us',
    icon: <Iconify icon={'fa:group'} {...ICON_SIZE} />,
    path: PATH_PAGE.about,
  },
  {
    title: 'Contact us',
    icon: <Iconify icon={'bxs:contact'} {...ICON_SIZE} />,
    path: PATH_PAGE.contact,
  },
  {
    title: 'Documentation',
    icon: <Iconify icon={'eva:book-open-fill'} {...ICON_SIZE} />,
    path: PATH_DOCS,
  },
];

export default wwwDurrbarNavConfig;

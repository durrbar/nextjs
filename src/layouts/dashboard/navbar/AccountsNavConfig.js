// routes
import {  PATH_ACCOUNTS_PAGE } from '../../../routes/paths';
// components
import Label from '../../../components/Label';
import SvgIconStyle from '../../../components/SvgIconStyle';
import { assetsUrl } from '../../../config';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`${assetsUrl}/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  blog: getIcon('ic_blog'),
  cart: getIcon('ic_cart'),
  chat: getIcon('ic_chat'),
  mail: getIcon('ic_mail'),
  user: getIcon('ic_user'),
  kanban: getIcon('ic_kanban'),
  banking: getIcon('ic_banking'),
  booking: getIcon('ic_booking'),
  invoice: getIcon('ic_invoice'),
  calendar: getIcon('ic_calendar'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
};

const accountsNavConfig = [

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: 'management',
    items: [
      // USER
      {
        title: 'user',
        path: PATH_ACCOUNTS_PAGE.user.root,
        icon: ICONS.user,
        children: [
          { title: 'details', path: PATH_ACCOUNTS_PAGE.user.root },
          { title: 'settings', path: PATH_ACCOUNTS_PAGE.user.settings },
        ],
      },

      // CHECKOUT
      { title: 'checkout', path: PATH_ACCOUNTS_PAGE.checkout, icon: ICONS.cart },

      // INVOICE
      {
        title: 'invoice',
        path: PATH_ACCOUNTS_PAGE.invoice.root,
        icon: ICONS.invoice,
        info: (
          <Label variant="outlined" color="error">
            +32
          </Label>
        ),
      },
    ],
  },
];

export default accountsNavConfig;

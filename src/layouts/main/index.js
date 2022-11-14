import PropTypes from 'prop-types';
// @mui
import { Box,  Stack } from '@mui/material';
//
import MainFooter from './MainFooter';
import MainHeader from './MainHeader';

// ----------------------------------------------------------------------

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  navConfig: PropTypes.array,
  footerConfig: PropTypes.oneOf(['wwwDurrbar', 'wwwTasfiaShopping', 'wwwNC']),
  siteName: PropTypes.oneOf([ 'tasfiashopping', 'nandonicchoya' ]),
};

export default function MainLayout({ children, navConfig, siteName }) {

  return (
    <Stack sx={{ minHeight: 1 }}>
      <MainHeader navConfig={navConfig} siteName={siteName} />

      {children}

      <Box sx={{ flexGrow: 1 }} />

      
        <MainFooter siteName={siteName} />
    </Stack>
  );
}

import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import NextLink from 'next/link';
import { assetsUrl } from '../config';
// @mui
import { Box } from '@mui/material';
import Image from 'next/image';

// ----------------------------------------------------------------------


// eslint-disable-next-line react/display-name
const Logo = forwardRef(({ disabledLink = false, iconOnly = false, siteName, sx }, ref) => {

  let logo;
	let logoFull;

  switch (siteName) {
    case 'tasfiashopping':
      logo = (
				<Box ref={ref} sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}>
          <Image src={`${assetsUrl}/logo/tasfiashopping-icon.svg`} alt='' />
        </Box>
      );
			
			logoFull = (
				<Box sx={{ width: 160, ...sx }}>
				  <Image src={`${assetsUrl}/logo/tasfiashopping-full-logo.svg`} height={40} alt='' />
				</Box>
			);
      break;

      case 'nandonicchoya':
        logo = (
          <Box ref={ref} sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}>
            <Image src={`${assetsUrl}/logo/nandonic-9-png.png`} alt='' />
          </Box>
        );
        
        logoFull = (
          <Box sx={{ width: 122, height: 30, ...sx }}>
            <Image src={`${assetsUrl}/logo/nandonicchoya-logo.png`} height='30' width='122' alt='' />
          </Box>
        );
        break;
  
    default:
      logo = (
				<Box ref={ref} sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}>
          <Image src={`${assetsUrl}/logo/durrbar-icon.svg`} alt='' />
        </Box>
      );
			
			logoFull = (
				<Box sx={{ width: 160, height: 30, ...sx }}>
				  <Image src={`${assetsUrl}/logo/durrbar-full-logo.svg`} height='30' width='160' alt='' />
				</Box>
			);
		break;
  }

  if (iconOnly) {
    return <NextLink href="/" legacyBehavior>{logo}</NextLink>;
  }
  
  if (disabledLink && iconOnly) {
    return <>{logo}</>;
  }

  return <NextLink href="/" legacyBehavior>{logoFull}</NextLink>;
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  iconOnly: PropTypes.bool,
  siteName: PropTypes.string,
  sx: PropTypes.object,
};

export default Logo;

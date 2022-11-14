import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Link, Divider, Container, Typography, Stack } from '@mui/material';
// routes
import { PATH_PAGE } from '../../routes/paths';
// components
import Logo from '../../components/Logo';
import SocialsButton from '../../components/SocialsButton';

// ----------------------------------------------------------------------

let LINKS;
let domain;
let address;
let socialLinks = [];


const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

MainFooter.propTypes = {
  siteName: PropTypes.oneOf([ 'tasfiashopping', 'nandonicchoya' ]),
};

export default function MainFooter({ siteName }) {
  switch (siteName) {
    case 'nandonicchoya':
      domain = 'nandonicchoya';
      address = '';
      socialLinks = {
        'facebook' : 'https://facebook.com/imSanjidaShanto',
        'instagram' : 'https://instagram.com/officialdurrbar',
        'linkedin': '',
        'twitter': 'https://twitter.com/OfficialDurrbar'
      };
      break;
  
    case 'tasfiashopping':
      domain = 'tasfiashopping';
      address = `Beside Doctor's Care, College Road, Barguna, BD`;
      socialLinks = {
        'facebook' : 'https://facebook.com/TasfiaShopping',
        'instagram' : 'https://instagram.com/officialdurrbar',
        'linkedin': '',
        'twitter': 'https://twitter.com/OfficialDurrbar'
      };
      break;
  
    default:
      domain = 'durrbar';
      address = `Beside Doctor's Care, College Road, Barguna, BD`;
      socialLinks = {
        'facebook' : 'https://facebook.com/Durrbar',
        'instagram' : 'https://instagram.com/officialdurrbar',
        'linkedin': '',
        'twitter': 'https://twitter.com/OfficialDurrbar'
      };
      break;
  }
  LINKS = [
    {
      headline: 'More Links',
      children: [
        { name: 'About us', href: '/about-us' },
        { name: 'Contact us', href: '/contact-us' },
        { name: 'FAQs', href: PATH_PAGE.faqs },
        { name: 'Accounts', href: 'https://accounts.durrbar.com' },
      ],
    },
    {
      headline: 'Legal',
      children: [
        { name: 'Terms and Condition', href: '#' },
        { name: 'Privacy Policy', href: '#' },
      ],
    },
    {
      headline: 'Contact',
      children: [
        { name: `contact@${domain}.com`, href: `mailto:contact@${domain}.com` },
        { name: `${address}`, href: '/contact-us' },
      ],
    },
  ]
  return (
    <RootStyle>
      <Divider />
      <Container sx={{ pt: 10 }}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Grid item xs={12} sx={{ mb: 3 }}>
            <Logo siteName={siteName} sx={{ mx: { xs: 'auto', md: 'inherit' } }} />
          </Grid>
          <Grid item xs={8} md={3}>
            <Typography variant="body2" sx={{ pr: { md: 5 } }}>
              {
                (siteName === 'tasfiashopping') 
                ? `Tasfia Shopping is a store of ladies clothes, cosmetics, toys, stationary etc.`
                : (siteName === 'nandonicchoya') ? `The starting point for your next project with Minimal 
                UI Kit, built on the newest version of Material-UI ©, ready to be customized to your style.` 
                : `Durrbar, the best home delivery service in town. We provide delivery service for Clothes,
                 Grocery, Cosmetics, Foods, Pastry Cake etc.`
              }
            </Typography>

            <Stack
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ mt: 5, mb: { xs: 5, md: 0 } }}
            >
              <SocialsButton links={socialLinks} sx={{ mx: 0.5 }} />
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack
              spacing={5}
              direction={{ xs: 'column', md: 'row' }}
              justifyContent="space-between"
            >
              {LINKS.map((list) => (
                <Stack key={list.headline} spacing={2}>
                  <Typography component="p" variant="overline">
                    {list.headline}
                  </Typography>
                  {list.children.map((link) => (
                    <NextLink key={link.name} href={link.href} passHref legacyBehavior>
                      <Link color="inherit" variant="body2" sx={{ display: 'block' }} legacyBehavior>
                        {link.name}
                      </Link>
                    </NextLink>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography
          component="p"
          variant="body2"
          sx={{
            mt: 10,
            pb: 5,
            fontSize: 13,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          © 2021 - {new Date().getFullYear()}. All rights reserved
        </Typography>
      </Container>
    </RootStyle>
  );
}

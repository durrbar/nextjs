import { forwardRef } from 'react';
import PropTypes from 'prop-types';
// next
import Head from 'next/head';
// @mui
import { Box } from '@mui/material';
//
import { assetsUrl } from '../config';
// theme
import palette from '../theme/palette';

// ----------------------------------------------------------------------


const Page = forwardRef(({ children, title = '', meta = {}, siteName, noSiteName, ...other }, ref) => (
  <>
    <Head>
      <title>{`${title}${noSiteName ? '' : siteName ? ` | ${siteName}` : ` | Durrbar`}`}</title>
     
      {siteName === 'Nandonic Choya' ?
      <><link rel="apple-touch-icon" sizes="180x180" href={`${assetsUrl}/logo/nandonicchoya-logo.png`} />
      <link rel="icon" type="image/png" sizes="32x32" href={`${assetsUrl}/logo/nandonicchoya-logo.png`} />
      <link rel="icon" type="image/png" sizes="16x16" href={`${assetsUrl}/logo/nandonicchoya-logo.png`} /></>

      : siteName === 'Tasfia Shopping' ?
      <><link rel="apple-touch-icon" sizes="180x180" href={`${assetsUrl}/logo/tasfiashopping-icon.svg`} />
      <link rel="icon" type="image/svg+xml" sizes="32x32" href={`${assetsUrl}/logo/tasfiashopping-icon.svg`} />
      <link rel="icon" type="image/svg+xml" sizes="16x16" href={`${assetsUrl}/logo/tasfiashopping-icon.svg`} /></>

      : <><link rel="apple-touch-icon" sizes="180x180" href={`${assetsUrl}/logo/durrbar-icon.svg`} />
      <link rel="icon" type="image/svg+xml" sizes="32x32" href={`${assetsUrl}/logo/durrbar-icon.svg`} />
      <link rel="icon" type="image/svg+xml" sizes="16x16" href={`${assetsUrl}/logo/durrbar-icon.svg`} /></>
      }
      <meta name="theme-color" content={palette.light.info.main} />
      
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index,follow,noodp,noydir" />
      
      {meta.ogImage ? meta?.ogImage : meta.ogImage = `https://www.kidmaxmusic.com/placeholder.png`}
      {meta.description ? meta?.description : meta.description = `Welcome to Durrbar`}
      {meta.keywords ? meta?.keywords : meta.keywords = `durrbar, tasfia shopping, kid max, nandonic choya`}

      <meta name="keywords" content={meta?.keywords}/>
      <meta name="description" content={meta?.description}/>
      <link rel="canonical" href={meta.ogUrl} />
      <meta name="copyright" content="Durrbar" />
      <meta name="author" content="Durrbar" />

      <meta property="og:title" content={`${title}${noSiteName ? '' : siteName ? ` | ${siteName}` : ` | Durrbar`}`} />
      <meta property="og:type" content="website"/>
      <meta property="og:url" content={meta.ogUrl} />
      <meta property="og:image" content={meta?.ogImage} />
      <meta property="og:site_name" content={siteName}/>
      <meta property="og:description" content={meta?.description} />
      
      <meta property="fb:page_id" content="437606808396432" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@OfficialDurrbar" />
      <meta property="twitter:creator" content="@OfficialDurrbar" />
      <meta property="twitter:title" content={`${title}${noSiteName ? '' : siteName ? ` | ${siteName}` : ` | Durrbar`}`} />
      <meta property="twitter:description" content={meta?.description} />
      <meta property="twitter:image" content={meta?.ogImage} />
    </Head>

    <Box ref={ref} {...other}>
      {children}
    </Box>
  </>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.object,
  siteName: PropTypes.oneOf([ 'Tasfia Shopping', 'Nandonic Choya' ]),
  noSiteName: PropTypes.bool,
};

export default Page;
import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Button, Typography, Container } from '@mui/material';
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
import { MotionContainer, varBounce } from '../components/animate';
// assets
// import { PageNotFoundIllustration } from '../assets';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

// ----------------------------------------------------------------------

PageError.getLayout = function getLayout(page) {
  return <Layout variant="logoOnly">{page}</Layout>;
};

// ----------------------------------------------------------------------

PageError.propTypes = {
    statusCode: PropTypes.any
  };

function PageError({ statusCode }) {
    return (
        <Page title="Page Error" sx={{ height: 1 }}>
            <RootStyle>
                <Container component={MotionContainer}>
                    <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
                        <m.div variants={varBounce().in}>
                            <Typography variant="h3" paragraph>
                                {statusCode
                                ? `An error ${statusCode} occurred on server`
                                : 'An error occurred on client'}
                            </Typography>
                        </m.div>
                        <NextLink href="/" passHref legacyBehavior>
                            <Button size="large" variant="contained">
                                Go to Home
                            </Button>
                        </NextLink>
                    </Box>
                </Container>
            </RootStyle>
        </Page>
    );
  }
  
  PageError.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  
  export default PageError
// @mui
import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';
// layouts
import Layout from '../../../../layouts';
// components
import Page from '../../../../components/Page';
// sections
import { AboutHero, AboutWhat, AboutTeam, AboutVision, AboutTestimonials } from '../../../../sections/commons';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

About.getLayout = function getLayout(page) {
  return <Layout variant="main" navVariant="wwwTasfiaShopping" siteName='tasfiashopping'>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function About() {
  return (
    <Page title="About us" siteName="Tasfia Shopping">
      <RootStyle>
        <AboutHero />
        <AboutWhat />
        <AboutVision />
        <Divider orientation="vertical" sx={{ my: 10, mx: 'auto', width: 2, height: 40 }} />
        <AboutTeam />
        <AboutTestimonials />
      </RootStyle>
    </Page>
  );
}

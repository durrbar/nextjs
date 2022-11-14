// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';
// layouts
import Layout from '../../../../layouts';
// components
import Page from '../../../../components/Page';
// sections
import { ContactHero, ContactForm } from '../../../../sections/commons';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

Contact.getLayout = function getLayout(page) {
  return <Layout variant="main" navVariant="wwwTasfiaShopping" siteName='tasfiashopping'>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Contact() {
  return (
    <Page title="Contact us" siteName="Tasfia Shopping">
      <RootStyle>
        <ContactHero />

        <Container sx={{ my: 10 }}>
          <Grid container spacing={10}>
            <Grid item xs={12} md={6}>
              <ContactForm />
            </Grid>
            <Grid item xs={12} md={6}>
              {/* <ContactMap /> */}
            </Grid>
          </Grid>
        </Container>
      </RootStyle>
    </Page>
  );
}
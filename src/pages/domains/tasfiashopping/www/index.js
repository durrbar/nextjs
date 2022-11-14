import { useEffect} from 'react';
// @mui
import { styled } from '@mui/material/styles';
// redux
import { useDispatch, useSelector } from '../../../../redux/store';
import { getProducts } from '../../../../redux/slices/product';
// layouts
import Layout from '../../../../layouts';
// components
import Page from '../../../../components/Page';
// sections
import {
  HomeHero,
  HomeMinimal,
  HomeHugePackElements,
  AboutTeam,
  ContactForm,
  // ContactMap,
  ShopProductList
} from '../../../../sections/commons';
import { Container, Grid, Typography } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  height: '100%',
}));

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

const meta = {
  description: "The starting point for your next project with Minimal UI Kit, built on the newest version of Material-UI ©, ready to be customized to your style"
};

// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page) {
  return <Layout variant="main" navVariant="wwwTasfiaShopping" siteName='tasfiashopping'>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function HomePage() {

  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.product);


  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Page
    title="Tasfia Shopping"
    siteName="Tasfia Shopping"
    noSiteName
    meta={meta}
    >
      <RootStyle>
        <HomeHero
          heroImage="/logo/tasfiashopping-icon.svg"
          slogan="The Company of Solution. To provide you the best experiance in life."
        >
          Start<br />
          Buy with <br /> 
          <Typography component="span" variant="h1" sx={{ color: 'error.main' }}>
            Tasfia
          </Typography>
          <Typography component="span" variant="h1" sx={{ color: 'primary.main' }}>
            &nbsp;Shopping
          </Typography>
        </HomeHero>
        <ContentStyle>
          <HomeMinimal />
          
          <Container sx={{ my: 10 }}>
            <ShopProductList products={products} limit='4' loading={!products.length} />            
          </Container>
          
          <HomeHugePackElements />
 
          <AboutTeam />

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
        </ContentStyle>
      </RootStyle>
    </Page>
  );
}

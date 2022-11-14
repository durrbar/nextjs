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
  description: "Durrbar - The Company of Solution works for provide services as people need in daily basics.",
  keywords: "durrbar, tasfia shopping, kid max, nandonic choya",
  ogUrl: "https://www.durrbar.com",
  ogImage: "https://www.kidmaxmusic.com/placeholder.png",
};

// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page) {
  return <Layout variant="main" navVariant="wwwDurrbar">{page}</Layout>;
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
    title="Durrbar - The Company of Solution"
    noSiteName
    meta={meta}
    >
      <RootStyle>
        <HomeHero
          heroImage="/logo/durrbar-icon.svg"
          slogan="The Company of Solution. To provide you the best experiance in life."
        >
          Start<br />
          Lifestyle <br /> with
          <Typography component="span" variant="h1" sx={{ color: 'primary.main' }}>
            &nbsp;Durrbar
          </Typography>
        </HomeHero>
        <ContentStyle>
          <HomeMinimal />
          
          <Container sx={{ my: 10 }}>
            <ShopProductList products={products} limit={4} loading={!products.length} />            
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

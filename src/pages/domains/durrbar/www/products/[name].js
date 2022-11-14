/* eslint-disable react/no-children-prop */
import { useEffect, useState } from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Tab, Card, Grid, Divider, Container, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
// redux
import { useDispatch, useSelector } from '../../../../../redux/store';
import { getProduct, addCart, onGotoStep } from '../../../../../redux/slices/product';
// layouts
import Layout from '../../../../../layouts';
// components
import Page from '../../../../../components/Page';
import Iconify from '../../../../../components/Iconify';
import Markdown from '../../../../../components/Markdown';
import { SkeletonProduct } from '../../../../../components/skeleton';
import HeaderBreadcrumbs from '../../../../../components/HeaderBreadcrumbs';
import { NavSectionVertical } from '../../../../../components/nav-section';
// sections
import {
  ProductDetailsSummary,
  ProductDetailsReview,
  ProductDetailsCarousel,
} from '../../../../../sections/@dashboard/e-commerce/product-details';
import CartWidget from '../../../../../sections/@dashboard/e-commerce/CartWidget';
// Config
import { NAVBAR } from '../../../../../config';
import { capitalCase } from 'change-case';

// ----------------------------------------------------------------------

const PRODUCT_DESCRIPTION = [
  {
    title: '100% Original',
    description: 'Chocolate bar candy canes ice cream toffee cookie halvah.',
    icon: 'ic:round-verified',
  },
  {
    title: '10 Day Replacement',
    description: 'Marshmallow biscuit donut dragée fruitcake wafer.',
    icon: 'eva:clock-fill',
  },
  {
    title: 'Year Warranty',
    description: 'Cotton candy gingerbread cake I love sugar sweet.',
    icon: 'ic:round-verified-user',
  },
];

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  justifyContent: 'center',
  height: theme.spacing(8),
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.main,
  backgroundColor: `${alpha(theme.palette.primary.main, 0.08)}`,
}));

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15),
}));

// ----------------------------------------------------------------------

EcommerceProductDetails.getLayout = function getLayout(page) {
  return <Layout variant='main' navVariant='wwwDurrbar'>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function EcommerceProductDetails() {

  const dispatch = useDispatch();

  const [value, setValue] = useState('1');

  const { query } = useRouter();

  const { name } = query;

  const { product, error, checkout } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProduct(name));
  }, [dispatch, name]);

  const handleAddCart = (product) => {
    dispatch(addCart(product));
  };

  const handleGotoStep = (step) => {
    dispatch(onGotoStep(step));
  };

  return (
    <Page title={`${capitalCase(name)} | Product Details`}>
      <RootStyle>
        <Box
          sx={{
            pt: 6,
            pb: 1,
            mb: 10,
            bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800'),
          }}
        >
          <Container>
            <HeaderBreadcrumbs
              heading={capitalCase(name)}
              links={[
                { name: 'Home', href: '/' },
                { name: 'Shop', href: '/shop' },
                { name: capitalCase(name) }]}
            />
          </Container>
        </Box>
        
        <Container>
          <Grid container spacing={0.5}>
            <Grid item xs="auto" md="auto" lg={3}>
              <Box
                sx={{
                  py: 5,
                  borderRadius: 2,
                  maxWidth: NAVBAR.BASE_WIDTH,
                  bgcolor: (theme) => (theme.palette.mode === 'light' ? 'background.default' : 'grey.800'),
                  boxShadow: (theme) => theme.customShadows.z24,
                }}>
                  <NavSectionVertical navConfig={NAV_ITEMS} />
              </Box>
            </Grid>
            
            <Grid item xs={12} md={12} lg={9}>
              {product && (
              <>
              <Card>
                <Grid container>
                  <Grid item xs={12} md={6} lg={7}>
                    <ProductDetailsCarousel product={product} />
                  </Grid>
                  <Grid item xs={12} md={6} lg={5}>
                    <ProductDetailsSummary 
                      product={product}
                      cart={checkout.cart}
                      onAddCart={handleAddCart}
                      onGotoStep={handleGotoStep}
                    />
                  </Grid>
                </Grid>
              </Card>
              
              <Grid container sx={{ my: 8 }}>
                {PRODUCT_DESCRIPTION.map((item) => (
                  <Grid item xs={12} md={4} key={item.title}>
                    <Box sx={{ my: 2, mx: 'auto', maxWidth: 280, textAlign: 'center' }}>
                      <IconWrapperStyle>
                        <Iconify icon={item.icon} width={36} height={36} />
                      </IconWrapperStyle>
                      <Typography variant="subtitle1" gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography sx={{ color: 'text.secondary' }}>{item.description}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              
              <Card>
                <TabContext value={value}>
                  <Box sx={{ px: 3, bgcolor: 'background.neutral' }}>
                    <TabList onChange={(e, value) => setValue(value)}>
                      <Tab disableRipple value="1" label="Description" />
                      <Tab
                        disableRipple
                        value="2"
                        label={`Review (${product.reviews.length})`}
                        sx={{ '& .MuiTab-wrapper': { whiteSpace: 'nowrap' } }}
                      />
                    </TabList>
                  </Box>
                  
                  <Divider />
                  
                  <TabPanel value="1">
                    <Box sx={{ p: 3 }}>
                      <Markdown children={product.description} />
                    </Box>
                  </TabPanel>
                  <TabPanel value="2">
                    <ProductDetailsReview product={product} />
                  </TabPanel>
                </TabContext>
              </Card>
              </>
              )}
              
              {!product && <SkeletonProduct />}
              
              {error && <Typography variant="h6">404 Product not found</Typography>}

            </Grid>
          </Grid>
          <CartWidget />
        </Container>
      </RootStyle>
    </Page>
  );
}

const NAV_ITEMS = [
  {
    subheader: 'Marketing',
    items: [
      {
        title: 'Landing',
        path: '#',
        icon: <Iconify icon="carbon:bat" />,
      },
      {
        title: 'Services',
        path: '#',
        icon: <Iconify icon="carbon:cyclist" />,
      },
      {
        title: 'Case Studies',
        path: '#',
        icon: <Iconify icon="carbon:3d-cursor-alt" />,
        children: [
          { title: 'Case Studies', path: '#' },
          { title: 'Case Study', path: '#' },
        ],
      },
      {
        title: 'Blog',
        path: '#',
        icon: <Iconify icon="carbon:3d-mpr-toggle" />,
        children: [
          { title: 'Blog Posts', path: '#' },
          { title: 'Blog Post', path: '#' },
        ],
      },
      {
        title: 'About',
        path: '#',
        icon: <Iconify icon="carbon:airport-01" />,
      },
      {
        title: 'Contact',
        path: '#',
        icon: <Iconify icon="carbon:battery-full" />,
      },
      {
        title: 'Tours',
        path: '#',
        icon: <Iconify icon="carbon:basketball" />,
        children: [
          { title: 'Tours', path: '#' },
          { title: 'Tour', path: '#' },
        ],
      },
      {
        title: 'Checkout',
        path: '#',
        icon: <Iconify icon="carbon:area" />,
        children: [
          { title: 'Checkout', path: '#' },
          { title: 'Checkout Complete', path: '#' },
        ],
      },
    ],
  },
  {
    subheader: 'Travel',
    items: [
      {
        title: 'Level 1',
        path: '#',
        icon: <Iconify icon="carbon:play" />,
        children: [
          { title: 'Level 2.1', path: '#' },
          { title: 'Level 2.2', path: '#' },
          {
            title: 'Level 2.3',
            path: '#',
            children: [
              { title: 'Level 3.1', path: '#' },
              { title: 'Level 3.2', path: '#' },
            ],
          },
        ],
      },
    ],
  },
];
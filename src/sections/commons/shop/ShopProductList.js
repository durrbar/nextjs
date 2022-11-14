import PropTypes from 'prop-types';
// @mui
import { Box } from '@mui/material';
// components
import { SkeletonProductItem } from '../../../components/skeleton';
//
import ShopProductCard from './ShopProductCard';

// ----------------------------------------------------------------------

ShopProductList.propTypes = {
  products: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  limit: PropTypes.number,
};

export default function ShopProductList({ products, loading, limit }) {
  return (
    <Box
      sx={{
        display: 'grid',
        gap: 3,
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        },
      }}
    >
      {(loading ? [...Array(12)] : limit ? products.slice(0, limit) : products).map((product, index) =>
        product ? <ShopProductCard key={product.id} product={product} /> : <SkeletonProductItem key={index} />
      )}
    </Box>
  );
}

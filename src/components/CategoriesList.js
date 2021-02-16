// <CategoriesList />
//   Has selector that returns products grouped by category
//   Displays loading state or categories */}

import { CardMedia, Typography, makeStyles, CardActionArea, CardContent, CircularProgress, Card, Button } from "@material-ui/core";
import { useSelector } from 'react-redux';


const useStyles = makeStyles({
});

export default function CategoriesList() {
  const productsByCategory = useSelector(
    state => state.products?.productsByCategory
  );
  const styles = useStyles();

  const products = Object.keys(productsByCategory || {}).map((category, index) => {
    return (
      <Card key={index} className={styles.card}>
        <CardActionArea>
          <CardMedia
            className={styles.categoryImage}
            image={productsByCategory[category][0].image}
          />
          <CardContent>
            <Typography
              variant='h6'
              color='primary'
              className={styles.titleCase}
            >
              {category}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  })

  return (
    <div className={styles.container}>
      {/* {productsByCategory != null ? products : <CircularProgress size={24} />} */}
      {productsByCategory === null ? <CircularProgress size={24} /> : products}
    </div>
  )
}

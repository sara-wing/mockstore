// <CategoriesList />
//   Has selector that returns products grouped by category
//   Displays loading state or categories */}

import { CardMedia, Typography, makeStyles, CardActionArea, CardContent, CircularProgress, Card, Button, capitalize } from "@material-ui/core";
import { useSelector } from 'react-redux';


const useStyles = makeStyles({
  categoryImage: {
    height: 120,
    width: 220,
  },
  titleCase: {
    textTransform: 'capitalize',
  },
});

export default function CategoriesList() {
  const productsByCategory = useSelector(
    state => state.products?.productsByCategory
  );
  const classes = useStyles();
  const renderProducts = () => {
    const products = Object.keys(productsByCategory || {}).map((category, index) => {
      return (
        <Card key={index} className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.categoryImage}
              image={productsByCategory[category][0].image}
            />
            <CardContent>
              <Typography
                variant='h6'
                color='primary'
                className={classes.titleCase}
              >
                {category}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
    })

    return products
  }

  return (
    <div className={classes.container}>
      {productsByCategory === null ? <CircularProgress size={24} /> : renderProducts()}
    </div>
  )
}

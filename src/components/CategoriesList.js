// <CategoriesList />
//   Has selector that returns products grouped by category
//   Displays loading state or categories */}

import { CardMedia, Typography } from "@material-ui/core";

export default function CategoriesList() {
  const productsByCategory = useSelector(
    state => state.products?.productsByCategory
  );
  const styles = useStyles();

  return (
    <div className={styles.container}>
      {productsByCategory != null ? (
        Object.keys(productsByCategory).map((category, index) => {
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
      )}
  ) : (
      <CircularProgress size={24} />
  }
    </div>

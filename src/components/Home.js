import { CardMedia, Typography, makeStyles, CardActionArea, CardContent, CircularProgress, Card } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../actions/appActions';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: 20,
  },
  // card: {
  //   width: 200,
  // },
  categoryImage: {
    height: 200,
    width: 200,
  },
  titleCase: {
    textTransform: 'capitalize',
  },
});

export default function CategoriesList() {
  const productsByCategory = useSelector(state => state.products?.productsByCategory);

  const classes = useStyles();

  const dispatch = useDispatch();
  const clickHandler = selectedCategory => {
    dispatch(setCategory(selectedCategory));
  }

  const renderProducts = () => {
    const products = Object.keys(productsByCategory || {}).map((selectedCategory, index) => {
      return (
        <Card key={index} className={classes.card} >
          <CardActionArea onClick={() => clickHandler(selectedCategory)}>
            <CardMedia
              className={classes.categoryImage}
              image={productsByCategory[selectedCategory][0].image}
            />
            <CardContent>
              <Typography
                variant='h6'
                color='primary'
                className={classes.titleCase}
              >
                {selectedCategory}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card >
      );
    })

    return (
      <div className={classes.container}>
        {products}
      </div>
    )
  }

  return (
    <div className={classes.container}>
      {productsByCategory ? renderProducts() : <CircularProgress size={24} />}
    </div>
  )
}

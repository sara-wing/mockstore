
import { CardMedia, Typography, makeStyles, CardActionArea, CardContent, Card } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: 20
  },
  card: {
    width: 200,
  },
  categoryImage: {
    height: 120,
    width: 220,
  },
  titleCase: {
    textTransform: 'capitalize',
  },
});

export default function CardItem({ label, imageURL, clickHandler }) {
  const classes = useStyles();
  return (
    <div className={classes.cardContainer}>
      <Card>
        <CardActionArea onClick={clickHandler}>
          <CardMedia className={classes.image} image={imageURL} />
          <CardContent>
            <Typography variant='h6' color='primary' className={classes.title}>
              {label}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

import { CardMedia, Typography, makeStyles, CardActionArea, CardContent, Card } from "@material-ui/core";

const useStyles = makeStyles({
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: 20
  },
  card: {
    width: 200,
  },
  image: {
    height: 120,
    width: 220,
  },
  titleCase: {
    textTransform: 'capitalize',
  },
});

export default function CardItem({ label, imageURL, onClick }) {
  const classes = useStyles();
  return (
    <div className={classes.cardContainer}>
      <Card>
        <CardActionArea onClick={onClick}>
          <CardMedia className={classes.image} image={imageURL} />
          <CardContent>
            <Typography variant='h8' color='primary' className={classes.title}>
              {label}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

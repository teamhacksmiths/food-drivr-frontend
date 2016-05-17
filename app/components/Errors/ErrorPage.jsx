import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Error404 from '../../assets/images/404-error.jpg';

const styles = {
  image: {
    height: 337,
    width: 600
  }
};

const ErrorPage = (props) => (
  <div className="error-card-wrapper Aligner">
    <div className="error-card Aligner-item">
      <Card>
        <CardHeader
          title="Something went terribly wrong"
          subtitle="But we can help"
        />
        <CardMedia>
          <img
            src={Error404}
            style={styles.image}
            alt="error"
          />
        </CardMedia>
        <CardText>
          {props.errorMessage ? props.errorMessage : 'An unknown error occured'}
        </CardText>
        <CardActions>
          <FlatButton
            label="Take Me Home"
          />
          <FlatButton
            label="Take Me to your Leader"
          />
        </CardActions>
      </Card>
    </div>
  </div>
);


ErrorPage.propTypes = {
  errorNumber: React.PropTypes.number.isRequired,
  errorMessage: React.PropTypes.string
};

export default ErrorPage;

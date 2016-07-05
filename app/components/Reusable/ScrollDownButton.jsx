import React from 'react';
import { Link as ScrollTo } from 'react-scroll';

const ScrollDownButton = ({
  text,
  color,
  destination
}) => (
  <ScrollTo
    to={destination}
    spy
    smooth
    offset={50}
    duration={800}
    className="uppercase"
  >
    <p>{text}</p>
    <img
      src={color === 'white' ? 'images/down-arrow.svg'
      :
        text === 'View More' ? 'images/down-arrow-yellow.svg'
      :
        'images/up-arrow-yellow.svg'
      }
        alt="down arrow"
    />
  </ScrollTo>
);

ScrollDownButton.propTypes = {
  text: React.PropTypes.string.isRequired,
  color: React.PropTypes.string.isRequired,
  destination: React.PropTypes.string.isRequired,
};

export default ScrollDownButton;

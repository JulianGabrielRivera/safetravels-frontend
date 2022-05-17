import blackHeart from '../assets/images/heart2.png';
import redHeart from '../assets/images/heart1.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Rating from '../components/Rating';
const Places = (props) => {
  const { data } = props;
  const imageContainer = {
    display: 'flex',
    flexFlow: 'wrap',

    width: '100vw',

    justifyContent: 'center',
  };
  const imageSize = {
    width: '350px',
    height: '270px',
  };

  return (
    <div style={imageContainer}>
      {data.map((place) => {
        return (
          <div>
            <Link to={`/placedetails/${place._id}`}>
              <div
                style={{
                  position: 'relative',

                  padding: '20px',
                }}
              >
                <img
                  src={blackHeart}
                  alt=''
                  style={{
                    height: '25px',
                    position: 'absolute',
                    top: '30px',
                    left: '35px',
                  }}
                  onMouseOver={(e) => (e.currentTarget.src = redHeart)}
                  onMouseOut={(e) => (e.currentTarget.src = blackHeart)}
                />
                <h5
                  style={{
                    position: 'absolute',
                    bottom: '0px',
                    left: '45px',
                    color: 'white',
                    fontWeight: 'bold',
                    padding: '20px',
                  }}
                >
                  {place.name}
                </h5>
                {/* <Rating data={placesData} /> */}
                {/* we changed url to img because we arent using our json anymore, we are using our mongodb */}
                <img src={place.img} alt='' style={imageSize} />
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Places;

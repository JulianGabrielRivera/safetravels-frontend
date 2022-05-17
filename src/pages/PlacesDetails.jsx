import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Rating from '../components/Rating';

const PlacesDetails = (props) => {
  // this is whatever is after /placedetails
  const { id } = useParams();
  const { data } = props;
  console.log(data);

  const [placeData, setPlaceData] = useState(null);
  // const [comment, setComment] = useState('');

  // const handleComment = (e) => setComment(e.target.value);

  useEffect(() => {
    const foundObject = data.find((place) => {
      return place._id === id;
    });
    // sets the data of this to the foundObject by comparing ids
    setPlaceData(foundObject);
    // renders once
  }, []);

  return (
    placeData && (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          src={placeData.img}
          alt=''
          style={{ height: '400px', width: '100vw', padding: '10px' }}
        />
        <h5>{placeData.name}</h5>

        <Rating data={placeData.rating} />
        <p style={{ textAlign: 'left', padding: '20px' }}>
          {placeData.description}
        </p>
        <form style={{ display: 'flex', flexDirection: 'column' }}>
          <textarea
            name='content'
            id='setComment'
            cols='30'
            rows='2'
          ></textarea>

          <button type='submit'>Post Comment</button>
        </form>
      </div>
    )
  );
};

export default PlacesDetails;

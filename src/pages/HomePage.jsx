import Places from './Places';
const HomePage = (props) => {
  const { data } = props;
  return (
    <div>
      <h1>welcome</h1>
      <Places data={data} />
    </div>
  );
};

export default HomePage;

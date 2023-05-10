import { useAuth } from 'components/hooks/useAuth';

import FlipCard from 'components/flipCard/FlipCard';



const cards = [
  {
    id: '1',
    path: 'home',
    front: 'This App',
    back: ' This app builded using React, Redux Async Thunk to provide registration and authentification, token persisted in localStorage',
  },
  {
    id: '2',
    path: 'contacts',
    front: ' Your contacts',
    back: ' Your contacts stored on the server, used Redux Async Thunk to fetch data.',
  },
];

const Home = () => {

  const { isLoggedIn } = useAuth();

  return (
    <>
      <div className="container">
        {isLoggedIn ? (
          <h1>Hover over tail Applicaton</h1>
        ) : (
          <h1>Register or log in please </h1>
        )}
      </div>
      <div className="container" >
        {cards.map(card => (
          <FlipCard key={card.id} card={card} />
        ))}
      </div>
    </>
  );
};

export default Home;

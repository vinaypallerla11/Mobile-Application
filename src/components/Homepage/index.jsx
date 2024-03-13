import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    try {
      const response = await fetch(
        'https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single,twopart&amount=10&lang=en'
      );
      const data = await response.json();
      if (response.ok) {
        setJokes(data.jokes);
      } else {
        setError('Failed to fetch jokes');
      }
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch jokes');
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Jokes</h2>
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-danger">{error}</p>}
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Joke</th>
                </tr>
              </thead>
              <tbody>
                {jokes.map((joke, index) => (
                  <tr key={index}>
                    <td>{joke.type === 'single' ? joke.joke : `${joke.setup} ${joke.delivery}`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

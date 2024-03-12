import Movie from "../js/class/movie";


describe('Movie class', () => {
  const movie = new Movie('Example Movie', 2022, 'USA', 'Exciting Adventure', 'Action', 120);

  test('Object properties Movie', () => {
    const correct = {
      name: 'Example Movie',
      year: 2022,
      country: 'USA',
      tagline: 'Exciting Adventure',
      genre: 'Action',
      duration: 120,
    };

    expect(movie).toEqual(correct);
  });

  test('Movie implements Buyable interface', () => {
    expect(movie).toHaveProperty('name');
    expect(movie).toHaveProperty('year');
    expect(movie).toHaveProperty('country');
    expect(movie).toHaveProperty('tagline');
    expect(movie).toHaveProperty('genre');
    expect(movie).toHaveProperty('duration');
  });
});

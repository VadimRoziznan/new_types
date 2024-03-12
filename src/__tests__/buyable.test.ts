import Buyable from "../js/class/buyable";


describe('Buyable interface', () => {
  const exampleBuyable: Buyable = {
    name: 'Example Product',
    year: 2022,
    country: 'USA',
    tagline: 'Awesome movie',
    genre: 'Action',
    duration: 120,
  };

  test('Object properties of Buyable', () => {
    const correct = {
      name: 'Example Product',
      year: 2022,
      country: 'USA',
      tagline: 'Awesome movie',
      genre: 'Action',
      duration: 120,
    };

    expect(exampleBuyable).toEqual(correct);
  });

  test('Buyable interface properties exist', () => {
    expect(exampleBuyable).toHaveProperty('name');
    expect(exampleBuyable).toHaveProperty('year');
    expect(exampleBuyable).toHaveProperty('country');
    expect(exampleBuyable).toHaveProperty('tagline');
    expect(exampleBuyable).toHaveProperty('genre');
    expect(exampleBuyable).toHaveProperty('duration');
  });
});
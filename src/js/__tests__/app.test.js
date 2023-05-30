import GameSavingLoader from '../app';

jest.setTimeout(15000);
test('тест сборки промисов', async (done) => {
  const sav = new GameSavingLoader();
  const result = await sav.load();
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };

  expect(result).toEqual(expected);
  done();
});

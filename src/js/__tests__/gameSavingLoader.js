/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
import read from '../reader';
import gameSavingLoader from '../gameSavingLoader';

jest.mock('../reader');
beforeEach(() => {
  jest.resetAllMocks();
});

test('Testing resolve', async () => {
  const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  const buffer = new ArrayBuffer(data.length * 2);
  const bufferView = new Uint16Array(buffer);
  for (let i = 0; i < data.length; i++) {
    bufferView[i] = data.charCodeAt(i);
  }
  read.mockResolvedValue(buffer);
  gameSavingLoader.load().then((obj) => {
    expect(obj).toEqual(
      {
        id: 9,
        created: 1546300800,
        userInfo: {
          id: 1, name: 'Hitman', level: 10, points: 2000,
        },
      },
    );
  });
});

test('Testing reject', async () => {
  read.mockResolvedValue(new ArrayBuffer(0));
  try {
    const result = await gameSavingLoader.load();
  } catch (err) {
    expect(err.message).toEqual('Wrong string format!');
  }
});

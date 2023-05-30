import gameSavingLoader from './gameSavingLoader';

gameSavingLoader.load()
  .then((data) => data, () => new Error('Saving error!'));

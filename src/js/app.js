/* eslint-disable import/no-unresolved */
import json from './parser';
import read from './reader';
import GameSaving from './gameSaving';

export default class GameSavingLoader {
// class GameSavingLoader {
  // eslint-disable-next-line class-methods-use-this
  load() {
    return read()
      .then((result) =>
      // eslint-disable-next-line implicit-arrow-linebreak
        json(result))
      .then((result) => {
        // console.log(result);
        const saving = JSON.parse(result);
        return saving;
      })
      .then((saving) => {
        const savingObject = new GameSaving(saving.id, saving.created, saving.userInfo);
        return savingObject;
      })
      .catch((error) => {
        throw error;
      });
  }
}

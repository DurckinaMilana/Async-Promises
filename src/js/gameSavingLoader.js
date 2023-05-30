/* eslint-disable new-cap */
import gameSaving from './gameSaving';
import json from './parser';
import read from './reader';

export default class gameSavingLoader {
  static load() {
    return read()
      .then((data) => json(data))
      .then((value) => {
        try {
          const stringJSON = JSON.parse(value);
          return new gameSaving(stringJSON.id, stringJSON.created, stringJSON.userInfo);
        } catch (SyntaxError) {
          throw new Error('Wrong string format!');
        }
      });
  }
}

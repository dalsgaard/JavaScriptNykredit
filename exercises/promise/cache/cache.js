'use strict'

const fs = require('fs');

class Cache {

  constructor (fn) {
    this._fn = fn;
  }

  open () {
    return new Promise((resolve, reject) => {
      fs.exists(this._fn, exists => {
        if (exists) {
          fs.readFile(this._fn, 'utf8', (err, data) => {
            if (err) {
              reject(err);
            } else {
              this._data = JSON.parse(data);
              resolve(this);
            }
          });
        } else {
          const data = {};
          fs.writeFile(this._fn, JSON.stringify(data), (err) => {
            if (err) {
              reject(err);
            } else {
              this._data = data;
              resolve(this);
            }
          });
        }
      });
    });
  }

  set (key, value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this._data) {
          this._data[key] = {
            value: value
          };
          this._sync();
          resolve();
        } else {
          reject('Cache not open');
        }
      }, 100);
    });
  }

  get (key) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this._data) {
          let data = this._data[key];
          resolve(data ? data.value : null);
        } else {
          reject('Cache not open');
        }
      }, 50);
    });
  }

  _sync () {
    fs.writeFile(this._fn, JSON.stringify(this._data));
  }

  close () {
    return new Promise((resolve, reject) => {
      if (this._fn) {
        fs.writeFile(this._fn, JSON.stringify(this._data), (err) => {
          if (err) {
            reject(err);
          } else {
            this._fn = null;
            this._data = null;
            resolve();
          }
        });
      } else {
        this._data = null;
        resolve();
      }
    });
  }

}

module.exports = Cache;

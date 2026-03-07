// utils/Api.js

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  getAppInfo() {
    //call getUserInfo in this array
    return Promise.all([this.getInitialCards(), this.getUsersInfo()]);
  }
  getInitialCards() {
    return this._fetchBasic(`${this._baseUrl}/cards`).then((res) =>
      this._checkResponse(res, res.json()),
    );
  }
  //create another method, getUserInfo(different baseUrl, )
  getUsersInfo() {
    return this._fetchBasic(`${this._baseUrl}/users/me`).then((res) =>
      this._checkResponse(res, res.json()),
    );
  }
  postCard({ name, link }) {
    return this._fetchWithBody(`${this._baseUrl}/cards`, "POST", {
      name,
      link,
    }).then((res) => this._checkResponse(res, res.json()));
  }

  editUserInfo({ name, about }) {
    return this._fetchWithBody(`${this._baseUrl}/users/me`, "PATCH", {
      name,
      about,
    }).then((res) => this._checkResponse(res, res.json()));
  }
  editAvatarInfo({ avatar }) {
    return this._fetchWithBody(`${this._baseUrl}/users/me/avatar`, "PATCH", {
      avatar,
    }).then((res) => this._checkResponse(res, res.json()));
  }
  deleteCard({ _id }) {
    return this._fetchIt(`${this._baseUrl}/cards/${_id}`, "DELETE").then(
      (res) => this._checkResponse(res, res),
    );
  }
  changeLikeStatus({ _id, isLiked }) {
    return this._fetchIt(
      `${this._baseUrl}/cards/${_id}/likes`,
      isLiked ? "DELETE" : "PUT",
    ).then((res) => this._checkResponse(res, res.json()));
  }
  _checkResponse(res, resJ) {
    if (res.ok) {
      return resJ;
    }
    return Promise.reject(`Error: ${res.status}`);
  }
  _fetchIt(url, method) {
    return fetch(url, {
      method: method,
      headers: this._headers,
    });
  }
  _fetchWithBody(url, method, body) {
    return fetch(url, {
      method: method,
      headers: this._headers,
      body: JSON.stringify(body),
    });
  }
  _fetchBasic(url) {
    return fetch(url, {
      headers: this._headers,
    });
  }
}

export default Api;

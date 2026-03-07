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
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then((res) => this._checkResponse(res, res.json()));
  }
  //create another method, getUserInfo(different baseUrl, )
  getUsersInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then((res) => this._checkResponse(res, res.json()));
  }
  postCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      // Send the data in the body as a JSON string.
      body: JSON.stringify({
        name,
        link,
      }),
    }).then((res) => this._checkResponse(res, res.json()));
  }

  editUserInfo({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      // Send the data in the body as a JSON string.
      body: JSON.stringify({
        name,
        about,
      }),
    }).then((res) => this._checkResponse(res, res.json()));
  }
  editAvatarInfo({ avatar }) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      // Send the data in the body as a JSON string.
      body: JSON.stringify({
        avatar,
      }),
    }).then((res) => this._checkResponse(res, res.json()));
  }
  deleteCard({ _id }) {
    return fetch(`${this._baseUrl}/cards/${_id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkResponse(res, res));
  }
  changeLikeStatus({ _id, isLiked }) {
    return fetch(`${this._baseUrl}/cards/${_id}/likes`, {
      method: isLiked ? "DELETE" : "PUT",
      headers: this._headers,
    }).then((res) => this._checkResponse(res, res.json()));
  }
  _checkResponse(res, resJ) {
    if (res.ok) {
      return resJ;
    }
    return Promise.reject(`Error: ${res.status}`);
  }
}

export default Api;

const GET = "GET";
const POST = "POST";

export default class Api {
  constructor(opts = { headers: { "Content-Type": "application/json" } }) {
    this.headers = opts.headers;
  }

  async post(url, data) {
    const response = await fetch(url, {
      method: POST,
      body: JSON.stringify(data),
      headers: this.headers
    });

    if (!response.ok) {
      throw Error(response.statusText);
    }

    return await response.json();
  }

  async get(url, token) {
    if (token) {
      this.headers["Authorization"] = `Bearer ${token}`;
    }
    const response = await fetch(url, {
      method: GET,
      headers: this.headers
    });

    if (!response.ok) {
      throw Error(response.statusText);
    }

    return await response.json();
  }
}

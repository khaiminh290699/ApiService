
const { default: axios } = require("axios");
const { SEARCH_API, SEARCH_KEY, SEARCH_CX } = process.env
class SearchEngine {
  constructor() {
    this.key = SEARCH_KEY;
    this.cx = SEARCH_CX;
  }

  search = async (q, page = 1, num = 10) => {
    const { data } = await axios.get(`${SEARCH_API}`, {
      params: {
        key: this.key,
        cx: this.cx,
        q,
        num,
        start: (page - 1) * num + 1
      }
    });
    return data;
  }
}

module.exports = SearchEngine;
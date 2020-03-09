import axios from "axios";
import config from "../config";

class GifService {
  constructor() {
    this.apiKey = config.API_KEY;
    this.api = axios.create({
      baseURL: config.API_URL
    });
    this.cancelSource = null;
  }

  searchGif(search, offset) {
    this.cancelSource = axios.CancelToken.source();
    return this.api.get(
      `/search?q=${search}&api_key=${this.apiKey}&limit=50&offset=${offset}`,
      { cancelToken: this.cancelSource.token }
    );
  }

  cancelSearch() {
    if (this.cancelSource) {
      this.cancelSource.cancel("Start new search, stop active search");
    }
  }
}

export default GifService;

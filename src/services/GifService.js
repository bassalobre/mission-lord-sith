import axios from "axios";
import config from "../config";

class GifService {
  constructor() {
    this.apiKey = config.API_KEY;
    this.api = axios.create({
      baseURL: config.API_URL
    });
  }

  searchGif(search) {
    return this.api.get(`/search?q=${search}&api_key=${this.apiKey}&limit=30`);
  }
}

export default GifService;

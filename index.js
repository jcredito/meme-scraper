import axios from 'axios';
import cheerio from 'cheerio';

async function performScraping() {
  // downloading the target web page
  // by performing an HTTP GET request in Axios
  const axiosResponse = await axios.request({
    method: 'GET',
    url: 'hmemegen-link-examples-upleveled.netlify.app',
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
    },
  });
}

performScraping();

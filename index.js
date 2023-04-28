import $ from 'cheerio';
import { createWriteStream, existsSync, mkdirSync } from 'fs';
// Dependencies
import fetch from 'node-fetch';

// Create a new folder for saving the loaded images
try {
  if (!existsSync('./memes')) {
    mkdirSync('./memes');
  }
} catch (err) {
  console.error(err);
}

// Fetch HTML from URL and save the img URLs into the array
fetch('https://memegen-link-examples-upleveled.netlify.app/')
  .then((res) => res.text())
  .then((body) => {
    // Fetch first 10 img-contents from img URL and save them
    for (let i = 1; i < 11; i++) {
      const image = $('img', body)[i].attribs.src;

      //  Put to memes folder and rename them from 01.jpg
      fetch(image).then((res) => {
        let path = './memes/0' + i + '.jpg';
        if (i === 10) {
          path = './memes/' + i + '.jpg';
        }

        const dest = createWriteStream(path);
        res.body.pipe(dest);
      });
    }
  });

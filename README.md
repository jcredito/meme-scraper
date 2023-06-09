## Node.js Meme Scraper

Create a cli (Command Line Interface) application that scrapes the current version of this website:

...and saves the first 10 images into a folder called "memes" within the directory of the new project. The image files should be named with a number with a leading zero, eg. 01.jpg, 02.jpg, etc.

## TODO

- [x] Command line steps (setup for Node.js project)
- [x] Set up a `.gitignore` with the `memes` folder
- [x] Create a folder called `"memes"`
- [x] Access the website (send a request to the website / "fetching")
- [x] Search for the `section` in the string of HTML that comes back (in the "response") from the website
- [ ] Search for the first 10 image sources in the `section`
  - [ ] Two options
    - [ ] One option: `.jpg` - this is in the HTML code of the website
    - [ ] Another option: `<img`
  - [ ] Get the `src` URL strings from the `img`
- [ ] Add the first 10 image URL strings to an array
- [ ] Loop over the first 10 image URLs and:
  - [ ] Create a file (named correctly) in the `memes` folder (eg. `01.jpg`, `02.jpg`, etc)
  - [ ] Access the image URL
  - [ ] In this file, store the image data that comes back (in the "response") from the website
- [ ] Test to make sure the program can run multiple times without failing

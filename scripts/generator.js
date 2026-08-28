const prompts = [
  "Create art (or write a comment) for your favorite fic",
  "Create art (or write a comment) for a fic you've reread",
  "Create art (or write a comment) for a fic that's five or more years old",
  "Create art (or write a comment) for a fic posted within the past year",
  "Create art (or write a comment) for a WIP",
  "Create art (or write a comment) for a fic in your first fandom",
  "Create art (or write a comment) for a fic with fewer than 25 kudos",
  "Create art (or write a comment) for a fic with fewer than 10 bookmarks",
  "Create art (or write a comment) for a fic with no comments",
  "Create art (or write a comment) for a fic in a fandom with fewer than 10000 works",
  "Create art (or write a comment) for a fic posted on (or near) your birthday",
  "Create art (or write a comment) for a fic you've left kudos on",
  "Create art (or write a comment) for an AU fic",
  "Create art (or write a comment) for a fic you've been recommended",
  "Create art (or write a comment) for a fic with fewer than 1000 hits",
  "Create art for (or write a comment that references) the last scene of a fic",
  "Create art for (or write a comment that references) the last scene of a fic",
  "Create art for (or write a comment that references) a secondary pairing in a fic",
  "Create art (or write a comment) for a fic that features your second favorite pairing in a fandom",
  "Create art (or write a comment) for a fic about a rarepair",
  "Create a meme/set of memes for any fic",
  "Create a playlist for any fic",
  "Create a moodboard for any fic",
  "Create a digital collage for any fic",
  "Create a book cover in any medium for any fic",
  "Create a poster in any medium for any fic",
  "Create a scrapbook page for any fic",
  "Design a bookmark for any fic",
  "Create something with baking soda clay (or any other kind of clay) for any fic",
  "Create art for any fic using primarily one color",
  "Describe/Make a tea blend for any fic",
  "Make a gifset for any fic",
  "Create digital art (any form) for any fic",
  "Create physical art (any medium) for any fic",
  "Create something in a medium you’ve never tried for any fic",
  "Make a mini zine inspired by any fic",
  "Create something edible inspired by any fic",
  "Create something for any fic using only two colors",
  "Record a podfic of any fic",
];

function generatePrompt() {
  let p = prompts[Math.floor(Math.random() * prompts.length)];
  return p;
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";
  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + " ";
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth && i > 0) {
      ctx.fillText(line, x, y);
      line = words[i] + " ";
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, y);
}

function fillBingo() {
  const canvas = document.getElementsByClassName("myCanvas").namedItem('myCanvas');
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  img.src = "scripts/bimg/blank_bingo.png";
  ctx.font = "9px Permanent Marker";
  ctx.textAlign = "center";
  img.onload = function () {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Fill text
  for (let row = 0; row < GRID_ROWS; row++) {
    for (let col = 0; col < GRID_COLS; col++) {
      // Calculate top left
      let cell_left =
        grid_start_x +
        col * (cell_size_px + GRID_LINE_WIDTH) +
        GRID_LINE_WIDTH +
        39;
      let cell_top =
        grid_start_y +
        row * (cell_size_px + GRID_LINE_WIDTH) +
        GRID_LINE_WIDTH +
        10;

      // Determine content
      if (row == 2 && col == 2) {
        continue;
      }

      let text = generatePrompt();
      wrapText(ctx, text, cell_left, cell_top, cell_size_px, 10);
    }
  }
  };

  
}

// Configuration
const IMAGE_SIZE = 500;
const MARGIN = 50;
const GRID_COLS = 5;
const GRID_ROWS = 5;
const GRID_LINE_WIDTH = 5;

// Calculate grid dimensions
const available_space = IMAGE_SIZE - MARGIN * 2; // 400px
const cell_size_px =
  (available_space - GRID_LINE_WIDTH * (GRID_COLS + 1)) / GRID_COLS;
const grid_start_x = MARGIN;
const grid_start_y = MARGIN;

const img = new Image();

$(document).ready(function () {
  
});



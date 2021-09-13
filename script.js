let rectangle = document.getElementsByClassName("aSquare")[0];
let rectWidth;
let rectHeight;

//function to get width and height of square

function getWidthHeight(rect) {
  rectHeight = 0;
  rectWidth = 0;
  rectWidth = parseInt(rect.style.width);
  rectHeight = parseInt(rect.style.height);
}

// getting height and width of main square

getWidthHeight(rectangle);
console.log(rectHeight, rectWidth);

// creating of maze

function mazeUp() {
  for (let j = 1; Math.floor(rectHeight) > 0; j++) {
    if (j % 2 !== 0) {
      createSqr1(rectHeight);
    } else {
      createSqr2(rectWidth);
    }
  }
}

function createSqr1(a) {
  //creating sqr
  let sqr = document.createElement("div");
  sqr.className = "aSquare";
  sqr.style.width = a * (1 / 1.62) + "px";
  sqr.style.height = a + "px";

  //reseting height & width & getting height and width of new sqr
  rectHeight = 0;
  rectWidth = 0;
  getWidthHeight(sqr);

  //style & positioning the sqr

  sqr.style.position = "absolute";
  sqr.style.top = 0;
  sqr.style.left = 0;

  let colorPicker = Math.floor(Math.random() * 10);

  switch (colorPicker) {
    case 0:
      sqr.style.backgroundColor = "rgb(103, 151, 37)";
      break;
    case 1:
      sqr.style.backgroundColor = "rgb(167, 233, 78)";
      break;
    case 2:
      sqr.style.backgroundColor = "rgb(159, 165, 43)";
      break;
    case 3:
      sqr.style.backgroundColor = "rgb(204, 246, 147)";
      break;
    case 4:
      sqr.style.backgroundColor = "rgb(236, 247, 5)";
      break;
    case 5:
      sqr.style.backgroundColor = "rgb(168, 129, 25)";
      break;
    case 6:
      sqr.style.backgroundColor = "rgb(245, 187, 122)";
      break;
    case 7:
      sqr.style.backgroundColor = "rgb(168, 84, 33)";
      break;
    case 8:
      sqr.style.backgroundColor = "rgb(29, 223, 206)";
      break;
    case 9:
      sqr.style.backgroundColor = "rgb(106, 29, 223)";
      break;
  }

  //apending the square
  rectangle.appendChild(sqr);
}

function createSqr2(a) {
  //creating squre with interchaged sides
  let sqr = document.createElement("div");
  sqr.className = "aSquare";
  sqr.style.height = a * (1 / 1.62) + "px";
  sqr.style.width = a + "px";

  //reseting height & width & getting height and width of new sqr
  rectHeight = 0;
  rectWidth = 0;
  getWidthHeight(sqr);

  //style & positioning the sqr

  sqr.style.position = "absolute";
  sqr.style.top = 0;
  sqr.style.left = 0;

  let colorPicker = Math.floor(Math.random() * 10);

  switch (colorPicker) {
    case 0:
      sqr.style.backgroundColor = "rgb(103, 151, 37)";
      break;
    case 1:
      sqr.style.backgroundColor = "rgb(167, 233, 78)";
      break;
    case 2:
      sqr.style.backgroundColor = "rgb(159, 165, 43)";
      break;
    case 3:
      sqr.style.backgroundColor = "rgb(204, 246, 147)";
      break;
    case 4:
      sqr.style.backgroundColor = "rgb(236, 247, 5)";
      break;
    case 5:
      sqr.style.backgroundColor = "rgb(168, 129, 25)";
      break;
    case 6:
      sqr.style.backgroundColor = "rgb(245, 187, 122)";
      break;
    case 7:
      sqr.style.backgroundColor = "rgb(168, 84, 33)";
      break;
    case 8:
      sqr.style.backgroundColor = "rgb(29, 223, 206)";
      break;
    case 9:
      sqr.style.backgroundColor = "rgb(106, 29, 223)";
      break;
  }

  //apending the square
  rectangle.appendChild(sqr);
}

function reset() {
  location.reload();
}

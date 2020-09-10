let i = 0;
function previous(pos) {
  i += pos;

  let firstimg = document.getElementById('parent');
  let child = firstimg.children;
  if (i > child.length) {
    i = 1;
  } else if (i < 1) {
    i = child.length;
  }

  for (let index = 0; index < child.length; index++) {
    child[index].style.position = 'absolute';
    child[index].style.left = '1200px';
  }

  child[i - 1].style.position = 'absolute';
  child[i - 1].style.left = '0';
}
function slider(n) {
  i = n;

  let firstimg = document.getElementById('parent');
  let child = firstimg.children;
  if (i > child.length) {
    i = 1;
  } else if (i < 1) {
    i = child.length;
  }

  for (let index = 0; index < child.length; index++) {
    child[index].style.position = 'absolute';
    child[index].style.left = '1200px';
   
  }

  child[i - 1].style.position = 'absolute';
  child[i - 1].style.left = '0';
  
}

var indexvalue = 0;
function slideshow() {
  setTimeout(slideshow, 3000);
  var x;
  let firstimg = document.getElementById('parent');
  let child = firstimg.children;

  for (let index = 0; index < child.length; index++) {
    child[index].style.position = 'absolute';
    child[index].style.left = '1200px';
  }

  indexvalue++;
  if (indexvalue > child.length) {
    indexvalue = 1;
  }
  child[indexvalue - 1].style.position = 'absolute';
  child[indexvalue - 1].style.left = '0';
}

slideshow();

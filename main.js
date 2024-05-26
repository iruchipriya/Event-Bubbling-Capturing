document.querySelector('#gp').addEventListener(
  'click',
  () => {
    console.log('gp clicked');
  },
  true
); //cap

document.querySelector('#parent').addEventListener(
  'click',
  (e) => {
    console.log('parent clicked');
    //to stop
    e.stopPropagation();
  },
  false
); //bubbling

document.querySelector('#child').addEventListener(
  'click',
  (e) => {
    e.stopPropagation();
    console.log('child clicked');
  },
  false
); //cap

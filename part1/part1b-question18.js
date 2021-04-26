var intervalID = global.setInterval(myCallback, 1000, 'Parameter 1', 'Parameter 2');
// change global to window if on browser

function myCallback(a, b)
{
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}
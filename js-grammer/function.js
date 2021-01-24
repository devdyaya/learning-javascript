
function areaOfCircle(r) {
  var area = r * r * 3.14;
  return area;
}

document.write('<p>半径5cmの円の面積は' + areaOfCircle(5) + 'です。</p>');
document.write('<p>半径10cmの円の面積は' + areaOfCircle(10) + 'です。</p>');
document.write('<p>半径15cmの円の面積は' + areaOfCircle(15) + 'です。</p>');




// var myBirthTime = new Date(1982, 11, 17, 12, 30);
// function updateParagraph() {
//   var now = new Date();
//   var seconds = (now.getTime() - myBirthTime.getTime()) / 1000;
//   document.getElementById('birth-time').innerText =
//     '生まれてから' + seconds + '秒経過。';
// }
// setInterval(updateParagraph, 100);
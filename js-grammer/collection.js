var chars = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];

for (var x = 0; x < chars.length; x++) {
  for(var y = 0; y < chars.length; y++) {
    document.write(chars[x]+chars[y]+'<br>');
  }
}




// var classes = ['A組', 'B組', 'C組', 'D組'];

// for (var grade = 1; grade < 4; grade++) {
//   for(var i = 0; i < classes.length; i++) {
//     //<p>◯年◯組</p>という文字列を作る
//     document.write('<p>' + grade + '年' + classes[i] + '</p>');
//   }
// }
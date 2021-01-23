var age = 16;
var isMember = true;
var result = null;
if(age <= 15) { // 15歳以下の場合の価格
  result = 800;
} else if( isMember === true ) { //会員の場合の価格
  result = 1000;
} else {
  result = 1800;
}

document.write(result + "円")
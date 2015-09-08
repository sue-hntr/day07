$(document).ready(function z_test(){
	var name1 = "Suzanne";
	var v = name1.search("z");

	if (v > -1){
		console.log("There is a z in Suzanne");
	} else {
	console.log("no Z here");
  }

  console.log('*****search for vowels*****');
  var nameArray = ["Amelia", "Lucas", "Mia", "Henry", "Eliot", "MmmMmm"];

  for(var k=0; k<nameArray.length; k++){
    var oneName = nameArray[k];
    var a = oneName.search(/a/i);
    var e = oneName.search(/e/i);
    var i = oneName.search(/i/i);
    var o = oneName.search(/o/i);
    var u = oneName.search(/u/i);
//    if (a > -1)(e > -1)(i > -1)(o > -1)(u > -1){
    if (a + e + i + o + u + 5 > 0 ){
      console.log(oneName + " has a vowel in it.");
    } else { 
    console.log(oneName + " doesn't have a vowel.");
    }
  }
})





/*******stackoverflow idea 
function isVowel(char)
{
  if (char.length == 1)
  {
    var vowels = new Array('a','e','i','o','u');
    var isVowel = false;

    for(e in vowels)
    {
      if(vowels[e] == char)
      {
        isVowel = true;
      }
    }

    return isVowel;
  }
}
*/

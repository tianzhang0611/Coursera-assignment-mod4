(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt().toLowerCase();
    // console.log(firstLetter);
    // var firstLetterLC = firstLetter.toLowerCase();
    if (firstLetter == "j") {
      byeSpeaker.speakBye(names[i]);
      // console.log("bye" + names[i]);
    } else {
      helloSpeaker.speakHi(names[i]);
      // console.log("hallo" + names[i]);
    };
  };


})();

var object  = {
  Names: [] ,
  showNames: function () {
      console.log(this.Names);
  },
  putName: function (arg) {
    for (var i = 0; i < arg.length ; i++) {
      if (arg[i]=="Robert") {
        arg.splice (i, 1);
      }
    }
    var res = arg.join("\n -------\n")
    this.Names.push(res);
  }
}

var test = ['Robert', 'Gimli', 'Aragorn', 'Legolas', 'Gandalf'];

object.putName(test)
object.showNames();
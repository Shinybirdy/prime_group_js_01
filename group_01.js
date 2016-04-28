var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

var sti = function(employee){

  var rating = employee[3];
  var bonusPercentage = 0;


  if(rating <= 2){
    bonusPercentage = 0;
  }else if(rating == 3){
    bonusPercentage = .04;
  }else if(rating == 4){
    bonusPercentage = .06;
  }else{
    bonusPercentage = .1;
  };

  if(employee[1].length == 4){
     bonusPercentage += .05;
  };

  if(employee[2] > 65000){
    bonusPercentage -= .01;
  };

  if(bonusPercentage > .13){
    bonusPercentage = .13;
  };

  return bonusPercentage;
};



var newArr = function(person){
  var arr2 =[];

  arr2.push(person[0]);
  arr2.push(sti(person).toFixed(2));
  arr2.push(Math.round(person[2] * (1+sti(person))));
  var bonusTotal = Math.round(person[2] * sti(person));
  arr2.push(bonusTotal);
console.log(arr2);
  return arr2;
}
var finalArray = [];

for(var i = 0; i < employees.length; i++){
   var final = newArr(employees[i]);
   finalArray.push(final);
  
};

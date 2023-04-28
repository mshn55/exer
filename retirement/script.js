
/*  Create a program that determines how many years you have left until retirement 
and the year you can retire.
It should prompt for your current age 
and the age you want to retire and display the output as shown in the example that follows on the next slide.

define a variable called age,
it prompts users input,
define new variable that includes users retirement age preference;

output substraction from retage to age;










List inputs, outputs, processes in a text file.
What are the constraints? Any edge case to consider? Note in
your text file.
Write the steps of your algorithm in pseudo-code in a second
text file.
Write the program in JavaScript. Find out how to get the current
year from your computer.
Push all 3 files (1 js and 2 txt) to your Github account. */

let ageCurrent = +prompt("What is your age?");
while (isNaN(ageCurrent)) {
    ageCurrent= +prompt("What is your age?");
}
let ageRetirement = +prompt("At what age would you like to retire?");
    while (isNaN(ageRetirement)) {
        ageRetirement= +prompt("At what age would you like to retire?")
        } 
const yearLeft= ageRetirement-ageCurrent;
const yearCurrent = new Date().getFullYear() ;
const yearRetirement = yearLeft + yearCurrent;
alert(`You have ${yearLeft} years left until you can retire.`);
alert(`It's ${yearCurrent}, so you can retire in ${yearRetirement}`);






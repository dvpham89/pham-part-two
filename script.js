let yourName = prompt("Welcome to GC mini golf! What is your name?");

let threeSix = Number(prompt("Hi, " +yourName+ "! Would you like to play 3 or 6 holes of mini golf?"));

let total =0;

for (let i = 1; i <= threeSix; i++) {
    let putts = Number(prompt("How many putts for hole " +i+ "? (par is 3)"))
    total += putts;
};

let par = 3 * threeSix;

let equalOverUnder = total - par;

if (equalOverUnder === 0) {
    console.log("Good game, " +yourName+ ". Your total par was: 0.")
}
    else if (total > par) {
    console.log("Nice try," +yourName+ "... Your total par was: +" +equalOverUnder+ ".")
    }
    else if (total < par) {
        console.log("Great job, " +yourName+ "! Your total par was: " +equalOverUnder+ ".")
    }

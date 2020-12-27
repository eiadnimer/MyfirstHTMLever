var user = prompt("Enter you loyalty");
if (user === "Madridista")
{ alert(" welcome to your home " + user)}
else{ alert(" GO OUT")}
Madridistaonly(user);
function Madridistaonly (uName){
    while (uName !== 'Madridista'){
        uName = prompt('You must be a Madridista to enter our page');
        }
        alert("You are in the right place dude")
}
var fan = prompt(' how many goalkeeper we have on our squad ?');
while (fan !== '3'){
fan = prompt(' how many goalkeeper we have on our squad ?');
}
alert("hala 3me")
for ( var i = 0; i<fan; i++){
document.write('<img src="GK.jpg">')
}
var FavKdrama = ["Goblin", "DOTS", "Weighlifting Fairy", "Oh My Venus"];

function loadKdrama(){
	document.getElementById('kdrama').innerHTML = "<b>List of my Favorite Kdrama: </b>" + FavKdrama;
}
function myFunction(){
	var kDrama = prompt("What is your favorite Kdrama?");
	FavKdrama[FavKdrama.length] = kDrama;
	document.getElementById('kdrama').innerHTML = "<b>List of my Favorite Kdrama: </b>" + FavKdrama;

}
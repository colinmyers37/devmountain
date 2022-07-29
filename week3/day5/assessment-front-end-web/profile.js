let favoriteColor = document.querySelector("#color")
let favoritePlace = document.querySelector("#place")
let favoriteRitual = document.querySelector("#ritual")

function colorAlert(evt) {
 evt.preventDefault();
 alert("My favorite color is blue")
}
function placeAlert(evt) {
    evt.preventDefault();
    alert("My favorite place is the golf course")
   }
   function ritualAlert(evt) {
    evt.preventDefault();
    alert("My favorite ritual is drinking trulys")
   }


favoriteColor.addEventListener('click', colorAlert)
favoritePlace.addEventListener('click', placeAlert)
favoriteRitual.addEventListener('click', ritualAlert)
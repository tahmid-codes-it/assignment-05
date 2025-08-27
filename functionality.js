// let favCount = 0;
// const favDisplay = document.getElementById("fav-count");

// const hearts = document.getElementsByClassName("heart");

//  for (let heart of hearts) {
//       heart.addEventListener("click", function () {
//         if (!heart.classList.contains("liked")) {
//           favCount++;
//           heart.classList.add("liked");
//         } else {
//           favCount--;
//           heart.classList.remove("liked");
//         }
//         favDisplay.textContent = favCount;
//       });
//     }

// document.getElementById("heart-1").addEventListener("click", function(){
//     console.log("hear-1 clicked");
//     const favCount = document.getElementById("fav-count");
//     const favCountNumber = parseInt(favCount.innerText);

//     let heartCount = 0;
//     favCountNumberTotal = favCountNumber + 1;

//     const favCountNumberElement = favCountNumber.innerText;
//     favCountNumberElement = favCountNumberTotal;
//     return favCountNumberElement;
// })


function heartHandler(id) {
  document.getElementById(id).addEventListener("click", function () {

    const favCount = document.getElementById("fav-count");
    const favCountNumber = parseInt(favCount.innerText);

    const favCountNumberTotal = favCountNumber + 1;
    favCount.innerText = favCountNumberTotal;
  })
};



heartHandler("heart-1");
heartHandler("heart-2");
heartHandler("heart-3");
heartHandler("heart-4");
heartHandler("heart-5");
heartHandler("heart-6");
heartHandler("heart-7");
heartHandler("heart-8");
heartHandler("heart-9");




function callHandler(id, message) {
  document.getElementById(id).addEventListener("click", function () {
    const coinCount = document.getElementById("coin-count");
    const coinCountNumber = parseInt(coinCount.innerText);
    const coinCountNumberTotal = coinCountNumber - 20;
    if (coinCountNumberTotal === -20) {
      alert("Not enough coins!");
      return;
    }
 
    coinCount.innerText = coinCountNumberTotal;
    if (coinCountNumberTotal >= 0) {
      alert(message);
    }



  })
}



callHandler("call-1",  "📞 Calling National Emergency Number 999...");
callHandler("call-2", "📞 Calling Police Helpline Number 999...");
callHandler("call-3", "📞 Calling Fire Service Number 999...");
callHandler("call-4", "📞 Calling Ambulance Service 1994-999999...");
callHandler("call-5", "📞 Calling Women & Child Helpline 109...");
callHandler("call-6", "📞 Calling Anti-Corruption Helpline 106...");
callHandler("call-7", "📞 Calling Electricity Helpline 16216...");
callHandler("call-8", "📞 Calling Brac Helpline 16445...");
callHandler("call-9", "📞 Calling Bangladesh Railway Helpline 163...");
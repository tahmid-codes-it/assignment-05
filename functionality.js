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


function heartHandler( id){
     document.getElementById(id).addEventListener("click", function() {

    const favCount = document.getElementById("fav-count");
    const favCountNumber = parseInt(favCount.innerText); // current number

    const favCountNumberTotal = favCountNumber + 1; // add 1
    favCount.innerText = favCountNumberTotal; // update DOM
})};



heartHandler ("heart-1");
heartHandler ("heart-2");
heartHandler ("heart-3");
heartHandler ("heart-4");
heartHandler ("heart-5");
heartHandler ("heart-6");
heartHandler ("heart-7");
heartHandler ("heart-8");
heartHandler ("heart-9");

   
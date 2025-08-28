

function heartHandler(id) {

  const favCount = document.getElementById("fav-count");

  const favCountNumber = parseInt(favCount.innerText);

  const favCountNumberTotal = favCountNumber + 1;
  favCount.innerText = favCountNumberTotal;
};


function callHandler(id, message) {
  const coinCount = document.getElementById("coin-count");
  const coinCountNumber = parseInt(coinCount.innerText);
  const coinCountNumberTotal = coinCountNumber - 20;
if (coinCountNumber < 20) {
   alert("Not enough coins!");
   return;
}
  coinCount.innerText = coinCountNumberTotal;
  if (coinCountNumberTotal >= 0) {
    alert(message);
  }

}







document.getElementById("heart-1").addEventListener("click", function () {
  heartHandler("heart-1");
})
document.getElementById("heart-2").addEventListener("click", function () {
  heartHandler("heart-2");
})
document.getElementById("heart-3").addEventListener("click", function () {
  heartHandler("heart-3");
})
document.getElementById("heart-4").addEventListener("click", function () {
  heartHandler("heart-4");
})
document.getElementById("heart-5").addEventListener("click", function () {
  heartHandler("heart-5");
})
document.getElementById("heart-6").addEventListener("click", function () {
  heartHandler("heart-6");
})
document.getElementById("heart-7").addEventListener("click", function () {
  heartHandler("heart-7");
})
document.getElementById("heart-8").addEventListener("click", function () {
  heartHandler("heart-8");
})
document.getElementById("heart-9").addEventListener("click", function () {
  heartHandler("heart-9");
})



document.getElementById("call-1").addEventListener("click", function () {
  callHandler("call-1", "📞 Calling National Emergency Number 999...");

  const data = {
    name: "National Emergency Number",
    number: "999",
    date: new Date().toLocaleTimeString()
  };
  historyData.push(data);
  history();
})


document.getElementById("call-2").addEventListener("click", function () {
  callHandler("call-2", "📞 Calling Police Helpline Number 999...");
  const data = {
    name: "Police Helpline Number",
    number: "999",
    date: new Date().toLocaleTimeString()
  };

  historyData.push(data);
history();
})

document.getElementById("call-3").addEventListener("click", function () {
  callHandler("call-3", "📞 Calling Fire Service Number 999...");
  const data = {
    name: "Fire Service Number",
    number: "999",
    date: new Date().toLocaleTimeString()
  };

  historyData.push(data);
history();
})

document.getElementById("call-4").addEventListener("click", function () {
  callHandler("call-4", "📞 Calling Ambulance Service 1994-999999...");
  const data = {
    name: "Ambulance Service",
    number: "1994-999999",
    date: new Date().toLocaleTimeString()
  };

  historyData.push(data);
history();
})

document.getElementById("call-5").addEventListener("click", function () {
  callHandler("call-5", "📞 Calling Women & Child Helpline 109...");
  const data = {
    name: "Women & Child Helpline",
    number: "109",
    date: new Date().toLocaleTimeString()
  };

  historyData.push(data);
history();
})

document.getElementById("call-6").addEventListener("click", function () {
  callHandler("call-6", "📞 Calling Anti-Corruption Helpline 106...");
  const data = {
    name: "Anti-Corruption Helpline",
    number: "106",
    date: new Date().toLocaleTimeString()
  };

  historyData.push(data);
history();
})

document.getElementById("call-7").addEventListener("click", function () {
  callHandler("call-7", "📞 Calling Electricity Helpline 16216...");
  const data = {
    name: "Electricity Helpline",
    number: "16216",
    date: new Date().toLocaleTimeString()
  };

  historyData.push(data);
history();
})

document.getElementById("call-8").addEventListener("click", function () {
  callHandler("call-8", "📞 Calling Brac Helpline 16445...");
  const data = {
    name: "Brac Helpline",
    number: "16445",
    date: new Date().toLocaleTimeString()
  };

  historyData.push(data);
history();
})

document.getElementById("call-9").addEventListener("click", function () {
  callHandler("call-9", "📞 Calling Bangladesh Railway Helpline 163...");
  const data = {
    name: "Bangladesh Railway Helpline",
    number: "163",
    date: new Date().toLocaleTimeString()
  };

  historyData.push(data);
  history();
})




const historyData = [];
const historyContainer = document.getElementById("history-container");
const clearBtn = document.getElementById("clear-history")
function history() {
historyContainer.innerHTML = "";
  
  for (const data of historyData) {
    const div = document.createElement("div");
    div.innerHTML = `
  <div class="mt-4 ">
              <div class="inter-font bg-[#FAFAFA] flex justify-between p-4 rounded-lg">
                        <div>
                            <h1 class="font-bold">${data.name}</h1>
                        <p class="text-[#8e8e93]">${data.number}</p>
                        </div>
                        <div>
                            <p class="text-[#111111]">${data.date}</p>
                        </div>
                    </div>
                </div>
  `;
    historyContainer.appendChild(div);

  }

}

  clearBtn.addEventListener("click", function(){
  historyData.length = 0; 
  history(); 
  })




const buttons = document.getElementsByClassName("copy-btn");
  const numbers = document.getElementsByClassName("section-number");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      const textToCopy = numbers[i].innerText; // pick the number of the same card
      navigator.clipboard.writeText(textToCopy);
      alert("Copied: " + textToCopy);
    });
  }

function copyCountHandler(id){
const copyCount = document.getElementById("copy-count");
  const copyCountNumber = parseInt(copyCount.innerText);

  const copyCountNumberTotal = copyCountNumber + 1;
  copyCount.innerText = copyCountNumberTotal;
}



document.getElementById("copy-1").addEventListener("click", function(){
  copyCountHandler("copy-1");
})
document.getElementById("copy-2").addEventListener("click", function(){
  copyCountHandler("copy-2");
})
document.getElementById("copy-3").addEventListener("click", function(){
  copyCountHandler("copy-3");
})
document.getElementById("copy-4").addEventListener("click", function(){
  copyCountHandler("copy-4");
})
document.getElementById("copy-5").addEventListener("click", function(){
  copyCountHandler("copy-5");
})
document.getElementById("copy-6").addEventListener("click", function(){
  copyCountHandler("copy-6");
})
document.getElementById("copy-7").addEventListener("click", function(){
  copyCountHandler("copy-7");
})
document.getElementById("copy-8").addEventListener("click", function(){
  copyCountHandler("copy-8");
})
document.getElementById("copy-9").addEventListener("click", function(){
  copyCountHandler("copy-9");
})








// const data = {
//   name: "National Emergency Number",
//   date: new Date().toLocaleTimeString()
// };

// historyData.push(data);
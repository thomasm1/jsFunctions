              
let attendeesArray = [];
let currentWinner;
let allWinners = [];
let fileUploaded = false;

function closeModal(id) {
  let modal = document.getElementById(id);
  modal.style.display = "none";
}

function openModal(id) {
  let modal = document.getElementById(id);
  modal.style.display = "block";
}

function handleFiles(files) {
  // Check for the various File API support.
  if (window.FileReader) {
    // FileReader are supported.
    getAsText(files[0]);
    fileUploaded = true;
  } else {
    alert('FileReader are not supported in this browser.');
  }
}

function getAsText(fileToRead) {
  let reader = new FileReader();
  // Read file into memory as UTF-8
  reader.readAsText(fileToRead);
  // Handle errors load
  reader.onload = loadHandler;
  reader.onerror = errorHandler;
}

function loadHandler(event) {
  let csv = event.target.result;
  processData(csv);
}

function processData(csv) {
    let allTextLines = csv.split(/\r\n|\n/);
    for (let i=0; i<allTextLines.length; i++) {
        let data = allTextLines[i].split(';');
            let tarr = [];
            for (var j=0; j<data.length; j++) {
                tarr.push(data[j]);
            }
            attendeesArray.push(tarr);
    }
  arrayCreated = true;
}

function errorHandler(evt) {
  if(evt.target.error.name == "NotReadableError") {
      alert("Cannot read file!");
  }
}

function displayWinner() {
    $("#winners-name").html(currentWinner);
}

function randomizeWinner() {
    if(!fileUploaded) {
      openModal('errorModal');
    } else if (attendeesArray.length === 0) {
      openModal('emptyList');
    } else {
      let min = 0;
      let max = attendeesArray.length;
      let winnerIndex = Math.floor(Math.random() * (max - min)) + min;

      currentWinner = attendeesArray[winnerIndex];
      displayWinner();
      allWinners.push(attendeesArray[winnerIndex]);
      removeWinner(winnerIndex);
      showAllWinners();
    }

}

function removeWinner(winnerIndex) {
    attendeesArray.splice(winnerIndex, 1);
}

function showAllWinners() {
    let content = "<h2>Previously Called Winners</h2>";
    content += "<ul>";
    for (let i = 0; i < allWinners.length; i++) {
      content += "<li>";
      content += allWinners[i];
      content += "</li>";
    }
    content += "</ul>";
    content += "<p><a onClick=\"location.reload()\" class=\"btn btn-info\" href=\"#\" role=\"button\">Reset</a></p>";

    $("#all-winners").html(content);
}
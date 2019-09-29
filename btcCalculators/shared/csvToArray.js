// ### SOURCE:  https://mounirmesselmeni.github.io/2012/11/20/reading-csv-file-with-javascript-and-html5-file-api/

document.getElementById("csv-array").innerHTML = `
<h1>CSV-to-Array</h1>
<div>
<input type="file" id="csvFileInput" onchange="handleFiles(this.files)"
accept=".csv"></input>
<hr>
<div id="csv-array">
</div>
</div>
`;

    

function handleFiles(files) {
    // Check for the various File API support.
    if (window.FileReader) {
      // FileReader are supported.
      getAsText(files[0]);
      fileUploaded = true;
    } else {
      alert('FileReader not supported in this browser.');
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
      for (let i=0; i < allTextLines.length; i++) {
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
  
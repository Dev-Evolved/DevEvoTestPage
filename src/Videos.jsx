const readTextFile = function(file,callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
};

const Videos = () => {
  let vidsListed = [];
  readTextFile('./json/vids.json',function(responseText) {
  let vids = JSON.parse(responseText)["Videos"];
  for (let i = 0; i < vids.length; i++) {
    let vidDiv = document.createElement('div');
    let vidDivImg = document.createElement('img');
    vidDivImg.src = "./"+vids[i].Thumbnail;
    vidDiv.appendChild(vidDivImg);
    vidsListed.push(vidDiv);
  } 
  });
  return (
    <div className='carousel'>
      {vidsListed.map((vid) => vid)}
    </div>
  )
}
export default Videos;
import React, { useEffect, useState } from 'react';
import { CiPlay1 } from "react-icons/ci";
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
  const [vids, setVids] = useState([]);
  useEffect(() => {
    readTextFile('./json/vids.json', (responseText) => {
      let vids = JSON.parse(responseText)["Videos"];
      setVids(vids);
    });
  }, []);
  return (
    <div className='carousel'>
      {vids.map((vid) => (
        <div key={vid.id} onClick={() => window.open(vid.Video, '_blank')}>
          <CiPlay1 className='playBtn'/>
          <img src={"/assets/images/"+vid.Thumbnail} alt={vid.Title} />
        </div>
      ))}
    </div>
  )
}
export default Videos;
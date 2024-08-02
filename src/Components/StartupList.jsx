import React from "react";
export default function StartupList() {
    const [shown, setShown] = React.useState(false)
    
    return (
      <div className="App">
        {shown ? <VideoModal src="https://www.youtube.com/embed/OZWRM2WG8Kg"/> : null}
        <button onClick={() => setShown(!shown)}>Test</button>
      </div>
    );
  }
  
  const VideoModal = (props) => {
    return <div style={{position: "fixed", top: 0, bottom: 0, left: 0, right: 0, backgroundColor: "rgba(0,0,0,0.5)"}}>
      <iframe
          title={props.src}
          allowFullScreen
          height="500"
          src={props.src}
          width="700"
      />
    </div>
  }
import React from 'react';
const SpeakerProfile =(props)=> {
return(
<>
 <h3>{props.name}</h3>
 <p>Position: {props.jobTitle}</p>
 <p>Company: {props.company}</p>
</>
  );
}

export default SpeakerProfile;
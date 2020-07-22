import React from 'react'
import ReactDOM from 'react-dom'


// function getButtonText(){
//   return 'click on me head'
// }


const App = () => {
  // const buttonText=['hi', ' there ', 12];
  // const buttonText='click';
  // const buttonText=1234;


  //below is {} object
  const buttonObject = {text: 'Click moa'};
  
  // 
const styleButt ={ backgroundColor: 'teal', color:'white', border:'none' ,borderRadius:'5px',padding:'10px',marginTop:'5px'}

//we can do interpolation inside of jsx block

const labelText = 'Enter your bloody name';
  return (
    <div>
      <label className='label' htmlFor="name">
        {/* Enter name: */}
        {labelText}
      </label><br/>
      <input id='name' type='text' /><br/>
      {/* <button style={{ backgroundColor: 'teal', color:'white', border:'none' ,borderRadius:'5px',padding:'10px',marginTop:'5px'}}> */}
      <button style={styleButt}>
        {/* Submit */}
        {/* reference js variable by using {} like below*/}
        {/* {buttonText} */}
        {/* we can NOT use object as text in jsx we need add key on it in this example our key is text */}
        {buttonObject.text}
        {/* {getButtonText()} */}
      </button>
    
  </div>
)
}
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

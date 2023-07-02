import React, {useState} from 'react'

export default function TextForm(props) {
  const [text,setText] = useState("Enter text here");
  const handleOnChange = (event) => {
      setText(event.target.value);
  }
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.alert("Changed to Upper Case","primary");
  }
  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.alert("Changed to Lower Case","primary");
  }
  const handleClearClick = () => {
    setText('');
    props.alert("Text cleared","primary");
  }
  const handleCopy = () => {
    const data = document.getElementById("my-box");
    data.select();
    navigator.clipboard.writeText(data.value);
    props.alert("Copied to Clipboard","primary");
  }
  const handleRemoveExtraSpaces = () => {
    setText(text.split(/[ ]+/).join(" "));
  }
  const countWords = (text) => {
    let result = text.match(/\S/g);
    if(result == null)
      //no character or only spaces
      return 0;
    text = text.split(/[ ]+/);
    text = text.join(" ");
    var first = 0;
    for (let index = 0; index < text.length; index++) {
      if(text.charAt(index) !== ' ')
      {
        first = index;
        break;
      }
    }
    
    var last = 0;
    for (let index = text.length - 1; index >= 0; index--) {
      if(text.charAt(index) !== ' ')
      {
        last = index;
        break;
      }
      
    }
    
    text = text.slice(first,last+1);
    return text.splitlength;
    
}
  return (
    
      <>
      <div className="container mb-3" style = {{color: props.mode === 'dark'?'white':'black'}}>
        <h1 className = "my-3">{props.heading}</h1>
        <textarea className="form-control" value = {text} onChange = {handleOnChange} style = {{color: props.mode === 'dark'?'white':'black', backgroundColor: props.mode === 'dark'?'#15104e':'white'}} id="my-box" rows="10"></textarea>
        <button className="btn btn-primary my-3 " onClick = {handleUpClick}>Change UpperCase</button>
        <button className="btn btn-primary my-3 mx-3" onClick = {handleLoClick}>Change LowerCase</button>
        <button className="btn btn-primary my-3" onClick = {handleClearClick}>Clear Text</button>
        <button className="btn btn-primary my-3 mx-3" onClick = {handleCopy}>Copy Text</button>
        <button className="btn btn-primary my-3 " onClick = {handleRemoveExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container" style = {{color: props.mode === 'dark'?'white':'black'}}>
            <h2> Your text summary</h2>
            <p>{countWords(text)} words and {text.length} characters. </p>
            <p>{0.08 * text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
  )
}

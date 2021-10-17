import React ,{useState} from 'react'


export default function Converter(props) {
    const [htmlText ,setHtmlText]=useState();
    const [jsxText,setJsxText]=useState();
    const htmlToJSX =(event)=>{
        let code=event.target.value
        code=code.replace(/class=/g,"className=")
        code=code.replace(/for=/g,"htmlFor=")
        code=code.replace(/<a/g,"<Link")
        code=code.replace(/a>/g,"Link>")
        code=code.replace(/href=/g,"to=")
        if(code.includes("img<") ||code.includes("input<")){
            console.log("Please,close the Img and Input Code")
        }
        code="<>\n"+code+"\n</>"
        setJsxText(code)
    }
   
    return (
        <>
      
        <div className="row  container-fluid mt-3 " >
            <div className="col-6 my-3">
            <div className={`card  shadow  bg-${props.mode} rounded`}  id="htmlCard">
            <div className="card-body">
                <h5 className={`card-title text-center text-${props.mode==="dark"?"light":"dark"}`}>HTML Code</h5>
                <textarea className={`bg-${props.mode} text-${props.mode==="dark"?"white":"black"}`} id="htmlTextArea"  placeholder="Enter HTML code " value={htmlText} onChange={htmlToJSX}></textarea>
            
            </div>
            </div>
            </div>
            <div className={`col-1 text-${props.mode==="dark"?"light":"dark"}`} id="iconConvert">
            {/* <button type="button" className="btn btn-primary" onClick={htmlToJSX}> */}
                Convert HTML to JSX 
                <i className="fas fa-arrow-alt-circle-right"></i>
                {/* </button>   */}
            </div>
            <div className="col-5 my-3">
            <div className={`card  shadow  bg-${props.mode} rounded`}  id="jsxCard">
            <div className="card-body">
                <h5 className={`card-title text-center text-${props.mode==="dark"?"light":"dark"}`}>JSX Code</h5>
                <textarea className={`bg-${props.mode} text-${props.mode==="dark"?"white":"black"}`} id="jsxTextArea" placeholder="JSX Code"  value={jsxText}></textarea>
            </div>
            </div>
            
            </div>
        </div>

        </>
    )
}

import React, {useEffect, useState} from "react";


function ContentLoader(){

    const [contentType, setContentType] = useState('posts');
    const [content, setContent] = useState([]);

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/'+contentType)
      .then((response)=>response.json())
        .then((json)=>setContent(json));
    },[contentType]);

        return (

            <div className="App">
                <h2> Content loaded- useEffect example</h2>
                <div>
                    <button onClick={()=>{setContentType('posts')}}> Posts </button>
                    <button onClick={()=>{setContentType('comments')}}> Comments </button>
                    <button onClick={()=>{setContentType('users')}}> Users </button>
                 </div>

                 {content.length === 0 ? <h3>Loading...</h3> : 
                  <ContentList content={content} contentType={contentType} />
                 
                 }
            </div>
        );
    
}


function ContentList({content, contentType}){

    return (
        <div>
            <h3>{contentType.toUpperCase()}</h3>
            <div>
                {content.map((item)=>{
                    console.log(item);
                      return <div className = "content-item" key={item.id}> {item.id} - {item.title || item.name} </div>
                })}
            </div>
        </div>
    );      
}

export default ContentLoader;
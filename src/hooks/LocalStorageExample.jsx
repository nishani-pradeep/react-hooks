import useLocalSotrage from "./custom/useLocalStorage";


function LocalStorageExample() {
    const [value, setValue ] = useLocalSotrage("name", "");

    const handleTextChange = (event)=>{
        setValue(event.target.value);
    }
    return(
        <div className="App">
            <h2>Local Storage - custom hook example</h2>

            <input type ="text" placholder = "Enter your name" value = {value}
             onChange={handleTextChange} />
            
                <p>Your name is: {value}</p>
                
        </div>
    )
}

export default LocalStorageExample;
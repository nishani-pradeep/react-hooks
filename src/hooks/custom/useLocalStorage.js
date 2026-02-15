import {useEffect, useState} from "react";


function getStoredValue(key,initialValue){
	let storedValue = JSON.parse(window.localStorage.getItem(key));
    return storedValue ? storedValue : initialValue instanceof Function ? initialValue() : initialValue;
}

function useLocalSotrage(key, initialValue){

  const [value, setValue] = useState(()=>{
    return getStoredValue(key,initialValue);
  });


  useEffect(()=>{
     window.localStorage.setItem(key, JSON.stringify(value));
  },[value]);

  return [value, setValue];

}

export default useLocalSotrage;
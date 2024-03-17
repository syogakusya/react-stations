// @ts-check

import { useEffect, useState } from "react"
import { BreedsSelect } from "./BreedsSelect.jsx";

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [typeOfDogList, setTypeOfDogList] = useState([]);
  useEffect(() => {
    const fetchBreeds = async () => {
      const response = await fetch('https://dog.ceo/api/breeds/list/all');
      const dataJson = await response.json();
      setBreeds(Object.keys(dataJson['message']));
    }
    fetchBreeds();
  }, []);
  //console.log(breeds);
    const fetchTypeOfDogList = async (typeOfDog, size) =>{
      let listSize = size;
      if(listSize > 12){
        listSize = 12;
      }
      //console.log('https://dog.ceo/api/breed/'+typeOfDog+'/images/random/'+listSize);
      const response = await fetch('https://dog.ceo/api/breed/'+typeOfDog+'/images/random/'+listSize);
      const dataJson = await response.json();
      setTypeOfDogList((dataJson['message']));
    }
  //console.log(typeOfDogList);
  return(
    <div>
      <BreedsSelect breeds={breeds} fetchDogList={fetchTypeOfDogList} typeOfDog={typeOfDogList}/>
    </div>
  )
}

export default DogListContainer

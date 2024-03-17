// @ts-check
import {useEffect, useState} from "react"
import DogImage from "./DogImage"

export const Description = () => {
  const [dogUrl, setDogUrl] = useState();
  useEffect(() => {
    getDogUrlRandom();
  }, [])
  function getDogUrlRandom(){
    let url = "https://dog.ceo/api/breeds/image/random"
    fetch(url)
    .then(data => {
      return data.json();
    })
    .then(dogJson => {
      setDogUrl(dogJson['message']);
    })
  }
  return (
    <div className="mainCenter">
        <p className="toptext">Doggyのcuteな写真を表示するぜ</p>
        <DogImage imageUrl={dogUrl}/><br />
        <button onClick={getDogUrlRandom}>変更！</button>
    </div>
  )
}

export default Description

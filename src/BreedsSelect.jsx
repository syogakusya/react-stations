// @ts-check
import {useState} from 'react'
export const BreedsSelect = (props) => {
  const [selectedBreed, setSelectedBreed] = useState("affenpinscher");
  const breedsList = props.breeds;
  const typeOfDogList =props.typeOfDog;
  console.log(typeOfDogList);
  //console.log(selectedBreed);
  return(
    <div className='mainCenter'>
      <select onChange={e => setSelectedBreed(e.target.value)} value={selectedBreed}>
        {breedsList.map(d => (<option value={d} key={d}>{d}</option>))}
      </select>
      <button onClick={() => props.fetchDogList(selectedBreed, 6)}>表示</button><br />
      <div className='imgContainer'>
      {
        typeOfDogList.map(d => (<img src={d}  key={d}/>))
      }
      </div>
    </div>
  )
    }

export default BreedsSelect

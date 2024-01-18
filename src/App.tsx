import './App.css'
import {useState} from "react";

interface measurements {
  scaledMeasurements: string;
  width?: number | undefined;
  height?: number | undefined;
  scale?: number | undefined;
}

function App() {
  const [measurements, setMeasurements] = useState<measurements>();

  const updateData = (key: string, value: number) => {
    setMeasurements(prevState => ({
      ...prevState,
      [key]: value
    }))
  }

  const calcResolution = () => {
    const scaleFactor: number = measurements?.scale / 100;
    console.log(scaleFactor)
    const scaledWidth: number = measurements?.width / scaleFactor;
    const scaledHeight: number = measurements?.height / scaleFactor;

    setMeasurements(prevState => ({
      ...prevState,
      scaledMeasurements: `${scaledWidth} X ${scaledHeight}`
    }))

  }

  return (
    <div className={'container'}>
      <h1>Display Resolution calculator</h1>
      <small>Calculate the 'Looks Like' display resolution</small>
      <div className={'measurements'}>
        <input className={'dimension'} type={"number"} inputMode={'numeric'} placeholder={'Width'}
               onChange={e => updateData('width', e.target.value)}/>
        <span>X</span>
        <input className={'dimension'} type={"number"} inputMode={'numeric'} placeholder={'Length'}
               onChange={e => updateData('height', e.target.value)}/>

      </div>
      <input className={'scale'} type={"number"} inputMode={'numeric'} placeholder={'Scale'}
             onChange={e => updateData('scale', e.target.value)}/>

      <button onClick={calcResolution}>Calculate</button>

      <p>{measurements?.scaledMeasurements}</p>
    </div>
  )
}

export default App

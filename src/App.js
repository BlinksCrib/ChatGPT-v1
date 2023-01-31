import './App.css'
import { Configuration, OpenAIApi } from 'openai'
import { useState } from 'react'
import { arrayItems } from './AIOptions/main'
import OptionSelection from './components/OptionSelection';
import Translation from './components/Translation';

function App() {
  const [prompt, setPrompt] = useState("")  
  const [result, setResult] = useState('')
  const [resultImg, setResultImg] = useState('')

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_Open_AI_Key,
  })

  const openai = new OpenAIApi(configuration)

  const generateImage = async () => {
   const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    })
    setResultImg(response.data.data[0].url)
  }

  const [option, setOption] = useState({})
  const [input, setInput] = useState('')

   const selectOption = (option) => {
     setOption(option)
   }

   const doStuff = async () => {
     let object = { ...option, prompt: input }

     const response = await openai.createCompletion(object)

     setResult(response.data.choices[0].text)
   }


  return (
    <>
      <div className='App'>
        {Object.values(option).length === 0 ? (
          <OptionSelection
            arrayItems={arrayItems}
            selectOption={selectOption}
          />
        ) : (
          <Translation doStuff={doStuff} setInput={setInput} result={result} />
        )}
      </div>
      <div className='app-main'>
        <h3>Generate an Image using Open AI Api</h3>
        <input
          type='text'
          placeholder='Type something to Generate an Image...'
          className='app-input'
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button onClick={generateImage} className='action-btn'>
          Generate an Image
        </button>
        {resultImg.length > 0 ? (
          <img className='result-image' src={resultImg} alt='' />
        ) : (
          <></>
        )}
      </div>
    </>
  )
}

export default App

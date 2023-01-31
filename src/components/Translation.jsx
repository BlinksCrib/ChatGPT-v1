const Translation = ({ doStuff, setInput, result, loading }) => {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <textarea
        className='text-area'
        cols={55}
        rows={10}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type Your Question"
      ></textarea>
      <button className='action-btn' onClick={doStuff}>
        {loading ? "Loading..." : "Show Answer"}
      </button>

      <h3 className='result-text'>{result.length > 0 ? result : ''}</h3>
    </div>
  )
}

export default Translation

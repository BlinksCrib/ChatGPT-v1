const OptionSelection = ({ arrayItems, selectOption }) => {
  return (
    <>
      <h1 className='heading'>ChatGPT Clone</h1>

      <div className='grid-main'>
        {arrayItems.map(({name, description, option}, index) => {
          return (
            <div
              className='grid-child'
              key={index++}
              onClick={() => selectOption(option)}
            >
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default OptionSelection

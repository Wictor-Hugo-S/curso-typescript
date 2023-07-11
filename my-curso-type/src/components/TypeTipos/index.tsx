import { useRef, useState } from 'react'


const data = [
  {
    id: 1,
    name: 'wct',
    age: 22
  },
  {
    id: 2,
    name: 'GUGA',
    age: 21,
  },

  {
    id: 3,
    name: 'GALA BONECA',
    age: 20
  }
]


type dataProps = {
  id: number,
  name: string,
  age: number
}


function TypeTipo() {

  const [name, setName] = useState('');
  const [number, setNumber] = useState(0)
  const [valorBooleano, setValorBooleano] = useState(false)

  //____________________________________________

  const [id, setId] = useState<number | null>(null)
  const [rowSelect, setRowSelect] = useState<dataProps | null>(null)

  //______________________________________________


  const inputRef=useRef<HTMLInputElement>(null)

  const handleRowSelect = (data: dataProps) => {

    setRowSelect(data)
  }

  const handleCalc=(a: number, b: number)=>{
    if (a > b )return a +b
    return a-b
;
  }

  console.log(handleCalc(4,2))

  return (
    <>

      {data.map((people) =>
        <div
          key={people.id}
          style={{ cursor: 'pointer' }}
          onClick={() => handleRowSelect(people)}>


          name: {people.name} - age: {people.age}


        </div>



      )}

      <span>{rowSelect?.name}</span>


      <form onSubmit={(data)=>{

        console.log(inputRef.current?.value)
        data.preventDefault()
        
        
        
        } }>

        <input type='text' ref={inputRef}></input>
        <button type='submit'>Enviar</button>
      </form>

    </>
  )
}

export default TypeTipo

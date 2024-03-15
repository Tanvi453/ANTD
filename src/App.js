import { useState } from 'react';
import './App.css';
import { TableData } from './table';

function App() {

  const [person, setPerson] = useState({ fname: "", age: "", address: "" });

  const [isEdit, setIsEdit] = useState(-1);

  const [searched, setSearched] = useState("");

  const [data, setData] = useState(JSON.parse(localStorage.getItem("persons")) || []);

  const handleChange = (e) => {

    console.log(e.target.value);
    setPerson({ ...person, [e.target.name]: e.target.value })

  }

  const handleSubmit = () => {

    if (isEdit !== -1) {
      const updata = data.map((item, index) => {
        if (isEdit === index) {
          return person
        }
        else { return item };
      })

      setData(updata);
      localStorage.setItem("persons", JSON.stringify(updata));
    }

    else {
      setData([...data, person]);
      localStorage.setItem("persons", JSON.stringify([...data, person]));
    }

  }
  console.log(person);
  console.log(data);


  const deletedata = (idxx) => {

    const updated = data.filter((item, index) => { return index !== idxx });
    setData(updated);
    localStorage.setItem("persons", JSON.stringify(updated));

  }


  const editdata = (idx) => {

    setIsEdit(idx);
    const record = data.find((item, index) => { return index === idx });
    console.log(record);
    setPerson(record);

  }


  const searchData = () => {

    // const filteredData = data.filter((item) => { return (item?.fname?.toLocaleLowerCase() === searched?.toLocaleLowerCase()) });
    // console.log(filteredData);
    // setData([...filteredDataa]);


    const filteredDataa = data.filter((item) => { return (item?.fname?.toLocaleLowerCase().includes(searched?.toLocaleLowerCase())) });
    console.log(filteredDataa);
    setData([...filteredDataa]);


  }


  const sortbyFname = () => {

    const sortdata = data.sort((a, b) => { return (a.fname > b.fname ? 1 : -1) });
    console.log(sortdata);
    setData([...sortdata]);

  }


  return (
    <>

      <div>

        <div style={{ backgroundImage: "url(https://img.freepik.com/free-photo/plant-against-blue-wall-background-with-copy-space_53876-98324.jpg?w=1380&t=st=1709196768~exp=1709197368~hmac=8e6b09286789476449e7b719ab64cb6558711ed47f760885af734c0a9613165c)", height: "950px", width: "100%", backgroundSize: "cover", display: "flex", justifyContent: 'center', alignItems: "center" }}>

          <div className='flex flex-col items-center gap-[60px]'>

            <div className='flex flex-col gap-3'>
              <label htmlFor='fname' className='text-2xl font-bold text-[#27420f]'>Full Name:-</label>
              <input type='text' id='fname' name='fname' value={person.fname} onChange={(e) => handleChange(e)} className='bg-transparent h-[25px] w-[500px] rounded-md border-[#c7aca7]' />
            </div>

            <div className='flex flex-col gap-3'>
              <label htmlFor='age' className='text-2xl font-bold text-[#27420f]'>Age:-</label>
              <input type='number' id='age' name='age' value={person.age} onChange={(e) => handleChange(e)} className='bg-transparent h-[25px] w-[500px] rounded-md border-[#c7aca7]' />
            </div>

            <div className='flex flex-col gap-3'>
              <label htmlFor='address' className='text-2xl font-bold text-[#27420f]'>Address:-</label>
              <input type='text' id='address' name='address' value={person.address} onChange={(e) => handleChange(e)} className='bg-transparent h-[25px] w-[500px] rounded-md border-[#c7aca7]' />
            </div>

            <div>
              <button type='submit' onClick={() => handleSubmit()} className='bg-transparent h-[50px] w-[200px] rounded-md border-[#c7aca7] text-[#27420f] text-2xl font-bold mt-[20px]'>Submit</button>
            </div>

          </div>

        </div>

        <div className='flex gap-[20px] justify-center mt-[30px]' >

          <input type="search" id="search" name="search" onChange={(e) => setSearched(e.target.value)} className='border-[#c7aca7] rounded-[5px] h-[30px] w-[300px]' /> <button type='search' onClick={() => searchData()} className='border-[#27420f] rounded-[5px] h-[30px] w-[50px]'> <svg
            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            viewBox="0 0 16 16">
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg> </button >

          <button type="button" onClick={() => sortbyFname()} className='bg-transparent h-[30px] w-[100px] rounded-md border-[#c7aca7] text-[#27420f] font-bold text-[18px]'>Sort</button>

        </div >

        <TableData recordsData={data} deletedata={(e) => { deletedata(e) }} editdata={(e) => { editdata(e) }} />

      </div>

    </>
  );
}

export default App;

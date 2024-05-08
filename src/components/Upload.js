import React, { useState } from 'react'
import Progress from './Progress'

const Upload = () => {
    const [file, setFile] = useState(null)
    const types = ['image/png', 'image/jpeg', 'image/jpg']

    const changeHandler = (e)=>{
        
        let selected = e.target.files[0]
        console.log(selected)
        if(selected && types.includes(selected.type) ){
            setFile(selected)
        } else{
            setFile(null)
            alert('Please select an image file (png or jpg)')
        }

    }
  return (
    <form>
        <label>
         <input type='file' onChange={changeHandler} />
         <span>+</span>
        </label>
        <div className='output'>
            {file && <div>{file.name} </div>}
            {file && <Progress file={file} setFile={setFile} />}
        </div>
    </form>
  )
}

export default Upload
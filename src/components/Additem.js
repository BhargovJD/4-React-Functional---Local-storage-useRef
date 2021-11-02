import React from 'react'
import { useRef } from 'react';

export default function Additem({newItem, setNewItem, submit}) {
      // useRef
      const inputRef = useRef();

    return (
        <div>
            <form onSubmit={(e)=>submit(e)}>
  <div className="mb-3">
    <label>Add item</label>
    <input ref={inputRef}   type="text" className="form-control" id="" aria-describedby="emailHelp" value={newItem} onChange={(e)=>setNewItem(e.target.value)}/>

  </div>

  <button onClick={()=>{inputRef.current.focus()}} type="submit" className="btn btn-primary">Add item</button>
</form>
<hr/>
        </div>
    )
}

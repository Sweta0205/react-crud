import React, { useState } from 'react';


const Create = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const postData = () => {
        console.log(firstName);
        console.log(lastName);
}
  return (
    
    <div>
       <form className="create-form">
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>

                
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>

              
                  
                <button onClick={postData} type='submit'>Submit</button>



            </form>


    
    </div>
  )
}

export default Create

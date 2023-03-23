import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { DataAppContext } from './tempelate/DataApp';

const Search = () => {
    const initialData = {
        form: '',
        to: '',
        date:'',
      }

      const localcontext=useContext(DataAppContext);
      const {appState,setAppState}=localcontext;
      const {searchfrom,searchto,searchdate}=appState;

      const navigate= useNavigate();
      const [formdata,setFormdata]=useState(initialData);
      const updateData = (e) => {
        console.log(e.target.id, e.target.value);
        let tempObj = {};
        tempObj[e.target.id] = e.target.value.trim();
        setFormdata({
          ...formdata, ...tempObj
        });
      }
      const searchFn = () => {
        if(!window.location.href.indexOf('list')>=0){
            navigate('/list');
        }
        
      }

    return (
        <div>
            From <input type="text" id="form" onChange={updateData} value={formdata.form} /><br></br>

            To <input type="text" id="to" onChange={updateData} value={formdata.to} /><br></br>
            Date <input type="date" id="date" onChange={updateData} value={formdata.date} /><br></br>

            <button onClick={searchFn}>Search</button>
        </div>
    )
}

export default Search
"use client"
import { useEffect, useState } from "react"

const Header: React.FC = () => {
    const [datas,setDatas] = useState([]);

    useEffect(() =>{
        fetch('/api').then(res => res.json()).then(data => setDatas(data));
    },[])

    const unique = datas.filter((e,i) => 
                    datas.findIndex(obj => obj.position === e.position ) === i);
    return (
    <div className="w-full px-3 py-6 bg-cyan-400 flex flex-col gap-4">
        <h3 className="text-3xl font-medium">Football Player List</h3>
        <div className="flex gap-2 items-center">
            <p>Position :</p>
            <select className="bg-cyan-800 text-white px-2 py-1 rounded-md" name="positions" id="positions">
                <option value="All Position">All Position</option>
                {
                   unique.map((e,i) => ( <option key={i} value={e.position} className="capitalize">{e.position}</option>
                   ))
                }
            </select>
        </div>
    </div>
  )
}



export default Header

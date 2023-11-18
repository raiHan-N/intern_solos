
const Card = () => {
  return (
    <div className="w-[20%] bg-cyan-200 rounded-lg flex gap-2 px-2 py-4">
      <div className="flex-1 rounded-2xl">
      <img src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" className="object-cover w-full h-full"/>
      </div>
      <div>
        <h3 className="font-semibold text-2xl">Player Fullname</h3>  
        <h3>Position</h3>

        <div className="flex flex-col">
        <div className="flex w-full justify-between"><p className="flex-1">City</p><p>:Player City</p></div>
        <div className="flex w-full justify-between"><p className="flex-1">Contry</p><p>:Player Country</p></div>
        <div className="flex w-full justify-between "><p className="flex-1">Phone</p><p>:Player Phone</p></div>
        <div className="flex w-full justify-between "><p className="flex-1">Email</p><p>:Player Email</p></div>
        </div>
      </div>      
    </div>
  )
}

export default Card

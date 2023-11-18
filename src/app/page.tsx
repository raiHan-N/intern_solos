import { useEffect, useState } from 'react';
import Header from '../components/Header'  
import Card from '@/components/Card';

export default function Home() {
  const [datas,setDatas] = useState([]);

    useEffect(() =>{
        fetch('/api').then(res => res.json()).then(data => setDatas(data));
    },[])
  return (
    <main>
      <Header/>
      <Card/>
    </main>
  )
}

import React, { useEffect, useState } from 'react'
import BasicCard from './Basiccard'
import Switch from './Switch'
import Slider from './Slider'
import Select from './Select'

export default function Dashboard() {


    const [online, setOnline] = useState(true)
    const [volume, setVolume] = React.useState(30)
    const [quality, setQuality] = useState(2)

    useEffect(()=>{
        console.log(online)
    },[online])

    useEffect(()=>{
        console.log(volume)
    },[volume])

    useEffect(()=>{
        console.log(quality)
    },[quality])


  return (
    <>

        <div style={{marginTop:20, display:'flex', justifyContent:'center', gap:10}}>
            <BasicCard 
                title='Online Mode'
                body='Is this application connected to the Internet?'
                component={Switch}
                state={online}
                setState={setOnline}
                />
              <BasicCard 
                title='Master Volume'
                body='Overrides all other sound Settings in this application'
                component={Slider}
                state={volume}
                setState={setVolume}
                />
                <BasicCard 
                title='Sound Quality'
                body='Manually control the music quality in event of poor connection'
                component= {Select}
                state={quality}
                setState={setQuality}
            />
        </div> 
        <h1>System Notifications:</h1>
        {!online && <p>Your application is offline. You won't be able to share or stream music to other devices.</p>}
        {volume >= 80 && <p>Listening to music at a high volume could cause long-term hearing loss.</p>}
        {quality === 1 && <p>Music quality is degraded. Increase quality if your connection allows it.</p>}
    </> 
  )
}

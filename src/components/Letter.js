import React, { useRef, useState } from 'react'
import './Letter.css'
import audioFile from './audio.mp3';

const Letter = () => {
    const [isOpen,setIsOpen]=useState(false);
    const [fullSize,setFullSize]=useState(false);
    const audioRef=useRef(null);

    const handleOpen=()=>{
        setIsOpen(true)
        setTimeout(()=>{
            setFullSize(true)
            if(audioRef.current){
                audioRef.current.play()
                    .then(()=>console.log('successful'))
                    .catch((err)=>console.log(err))
            }
        },500);
    }

    const handleClose=()=>{
        setFullSize(false)
        setTimeout(()=>{
            if(audioRef.current){
                audioRef.current.pause()
            }
            setIsOpen(false)
        },500);
    }

  return (
    <div className={`envelope ${isOpen ? 'open':" "}`} onClick={!fullSize ? handleOpen : handleClose}>
        <div className='part1'></div>
        <div className='part2'></div>
        <div className={`letter ${fullSize ? "fullSize":" "}`}>
            my dear ....🖤<br/>
            I never met someone like you and you are soo special for me..The care that you show to me,friendliness and each aspect of you that i love most.<br/>
            in some situations my heart skips heartbeat for a while when i see you and when you are near me...<br/>
            i miss you...:)<br/>
            always yours @Rohith...
        </div>
      <audio src={audioFile} ref={audioRef} onError={(e) => console.error('Audio error:', e.message)} />
    </div>
  )
}

export default Letter

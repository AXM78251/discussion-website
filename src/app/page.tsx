import Image from 'next/image'
import AnthonyPFP from "../../public/me.jpeg"
import AnthonyFunny from "../../public/anthony-fun.jpg"

export default function Home() {
  return (
    <div className = "ta-info-container">
      <div className = "v-stack">
        <div className = "anthony-image">
          
        </div>
        <div className = "info">
          <p className = "name-bold"> Anthony Salinas Suarez</p>
          <p> he/him/his </p>
          <p> anthonysalinas78251@berkeley.edu </p>
          <br></br>
          <p> <b>Disc:</b> Tu 4-5:00PM @ <b>Soda 405</b></p>
          <p> <b>OH:</b> Tu 7-8:00PM @ <b>Soda 283E/H</b>W 1-2:00PM @ <b>Soda 283E/H</b></p>
        </div>
      </div>
      <div className = "v-stack">
        <div className = "nithila-image">

        </div>
        <div className = "info">
          <p className = "name-bold"> Nithila Poongovan </p>
          <p> she/her/hers </p>
          <p> nithila@berkeley.edu </p>
          <br></br>
          <p> <b>Disc:</b> Tu 4-5:00PM @ <b>Soda 405</b></p>
          <p> <b>OH:</b> W 7-8:00PM @ <b>Online</b> & Th 12-1:00PM @ <b>Online</b></p>
        </div>
      </div>
    </div>
  )
}

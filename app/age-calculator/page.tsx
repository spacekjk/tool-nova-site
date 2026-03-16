"use client"
import { useState } from "react"

export default function AgeCalculator() {

  const [birth, setBirth] = useState("")
  const [age, setAge] = useState<number | null>(null)

  const calculateAge = () => {
    if (!birth) return

    const today = new Date()
    const birthDate = new Date(birth)

    let age = today.getFullYear() - birthDate.getFullYear()

    const m = today.getMonth() - birthDate.getMonth()

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }

    setAge(age)
  }

  return (
    <div style={{maxWidth:600, margin:"40px auto", fontFamily:"Arial"}}>
      
      <h1>Age Calculator</h1>

      <p>
        Calculate your exact age based on your birth date.
      </p>

      <input
        type="date"
        value={birth}
        onChange={(e)=>setBirth(e.target.value)}
        style={{padding:10, fontSize:16}}
      />

      <button
        onClick={calculateAge}
        style={{
          marginLeft:10,
          padding:"10px 20px",
          fontSize:16
        }}
      >
        Calculate
      </button>

      {age !== null && (
        <h2 style={{marginTop:20}}>
          Your Age: {age}
        </h2>
      )}

    </div>
  )
}
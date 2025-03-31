import React, { useState, useEffect } from 'react'

function useOnlineStatus() {

  const [online, setOnline] = useState(true)
  useEffect(() => {
    window.addEventListener("online", () => {
      setOnline(true)
    })

    window.addEventListener("offline", () => {
      setOnline(false)
    })
  }, [])


  return online
}

export default useOnlineStatus


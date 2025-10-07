import React, { useEffect, useState } from 'react'

function Header() {
    const [mousePosition, setMousePosition] = useState({y:0, x:0})
    useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <div>
      
    </div>
  )
}

export default Header

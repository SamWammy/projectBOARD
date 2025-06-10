'use client'
import { SignIn } from '@clerk/nextjs'
import { useEffect } from 'react'
import { redirect } from 'next/navigation'

export default function Page() {

     useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script')
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js'
      script.onload = () => {
        import('vanta/dist/vanta.globe.min').then(VANTA => {
          VANTA.default({
            el: '#vanta-bg',
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
          })
        })
      }
      document.body.appendChild(script)
    }
  }, [])
  return( 
    <div id= "vanta-bg" style={{ zIndex : 1, height:'100vh', margin: 0, padding: 0,}} > 
  <div   style={{  display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh',width:'100vw', zIndex: 2,}}> 
  <SignIn 
        afterSignInUrl= {redirect('/home')}
        afterSignUpUrl= {redirect('/home')}

  />
  </div>
  </div>
  )
}
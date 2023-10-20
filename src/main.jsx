import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const notes = [
  {
    id:1,
   title: "FREE",
   price: 0,
   content: {
    text1: "Single User",
    text2: "50GB Storage",
    text3: "Unlimited Public Projects",
    text4: "Community Access",
      },
    uncontent:{
      text5: "Unlimtied Private Projects",
      text6: "Deducated Phone Support",
      text7: "Free Subdomain",
      text8: "Monthly Status Reports",
    },
    important: true
  },
  {
    id:2,
    title: "PLUS",
    price: 9,
    content: {
     text1: "5 User",
     text2: "50GB Storage",
     text3: "Unlimited Public Projects",
     text4: "Community Access",
     text5: "Unlimtied Private Projects",
     text6: "Deducated Phone Support",
     text7: "Free Subdomain",
     
       },
     uncontent:{
     text8: "Monthly Status Reports",
     },
     important: true
  },
  {
    id:3,
    title: "PRO",
    price: 49,
    content: {
     text1: "Unlimited User",
     text2: "50GB Storage",
     text3: "Unlimited Public Projects",
     text4: "Community Access",
     text5: "Unlimtied Private Projects",
     text6: "Deducated Phone Support",
     text7: "Free Subdomain",
     text8: "Monthly Status Reports",
    
     
       },
     
       important: true
  }
]



ReactDOM.createRoot(document.getElementById('root')).render(

    <App notes={notes}/>
 
)

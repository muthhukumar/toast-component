import React from "react"

import Footer from "../Footer"
import ToastProvider from "../ToastProvider/ToastProvider"
import ToastPlayground from "../ToastPlayground/ToastPlayground"

function App() {
  return (
    <>
      <ToastProvider>
        <ToastPlayground />
        <Footer />
      </ToastProvider>
    </>
  )
}

export default App

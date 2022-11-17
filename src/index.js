import React from 'react'

import { createRoot } from 'react-dom/client'
import App from './App'

XMLHttpRequest.prototype.send = function () {
  return false
}

const container = document.getElementById('root')

const root = createRoot(container)
root.render(<App/>)

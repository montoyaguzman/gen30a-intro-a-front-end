import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client'
import React from 'https://esm.sh/react@18.2.0'

const appRootElement = document.getElementById('app')
const root = ReactDOM.createRoot(appRootElement)

const button = React.createElement('button',{class:"btn", 'data-id': 'yellow'},'Click Aquí')
const button2 = React.createElement('button',{class:"btn", 'data-id': 'blue'},'Click Aquí')
const button3 = React.createElement('button',{class:"btn", 'data-id': 'orange'},'Click Aquí')
const div = React.createElement('div',null,[button, button2, button3])

root.render(div)
/* 
<body>

    <div id="app"></div>

    <script type="module" src="./app.js"></script>
</body>
*/
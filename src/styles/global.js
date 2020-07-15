import { createGlobalStyle } from 'styled-components'

import 'react-toastify/dist/ReactToastify.css'

import background from '../assets/background.svg'

const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        background: #191920 url(${background}) no-repeat center top;
        /* background: radial-gradient(circle, rgba(152,33,165,1) 3%, rgba(0,0,0,1) 100%) ; */
        /* background: rgb(20,20,25);
        background: linear-gradient(56deg, rgba(20,20,25,1) 0%, rgba(20,20,25,1) 52%, rgba(1,1,1,1) 70%, rgba(0,0,0,1) 100%, rgba(19,19,25,1) 100%); */
        -webkit-font-smoothing: antialised;
    }

    body, input, button{
        font: 14px sans-serif;
    }

    #root{
        max-width: 1020px;
        margin: 0 auto;
        padding: 0 20px 50px;
    }

    button{
        cursor: pointer;
    }
`

export default Global

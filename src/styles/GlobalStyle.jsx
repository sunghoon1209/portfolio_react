import { createGlobalStyle } from "styled-components";

const GlobalStyle =createGlobalStyle`
    /* 리셋 및 전역 css 설정 */
    *{margin: 0; padding:0;box-sizing:border-box}

    @font-face {
    font-family: 'NEXON Lv1 Gothic OTF';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }
    
    body {
        font-family: 'NEXON Lv1 Gothic OTF', 'Pretendard', sans-serif;
        background-color: #f0f4f8;
        color: #333;
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
    }    
    a {
        color: inherit;
        text-decoration: none;
    }    
    ul,li{list-style:none;}
    button {
        font-family: inherit;
        background: none;
        border: none;
        cursor: pointer;
    }

    img {
        max-width: 100%;
        display: block;
    }    
`

export default GlobalStyle;
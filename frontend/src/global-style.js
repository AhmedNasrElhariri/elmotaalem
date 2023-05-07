import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`


    @font-face {
  font-family: 'Roboto';
  src: url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  font-style: normal;
  font-weight: 400;
  font-display: fallback; /* <- this can be added to each @font-face definition */
}
    * {
    }

    body {
      margin: 0;
      padding:0;
      font-family: 'Roboto', sans-serif;     
    }

    .no-list-style {
      list-style-type:none;
    }

    .cursor-pointer{
      cursor: pointer;
    }

    ::-webkit-scrollbar {
      width: 7px;
      background-color: yellow;
    }

    ::-webkit-scrollbar-track {
      background: #ffffff;
    }

    ::-webkit-scrollbar-thumb {
      background: #ededed;
      border-radius: 10px;
    }

    .rs-picker-select-menu-item{
      padding: 0 !important;
    }

`;

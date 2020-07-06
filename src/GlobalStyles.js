import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    
* {
        box-sizing: border-box;
}

:root {
  --sand: #F7EEDF;
  --darkgreen: #245f49;
  --freshgreen: #9bb449;
  --softgreen: #cfd7b9;
  --lightgreen: #f1f5ef;
  --brown: #938773;
  --darkgrey: #44494a;
  --lightgrey: #c9cfce;
  --softgrey: #a7b2af;
  --sun-yellow: #ffd422;
}



body {
  margin: 0;
  max-width: 375px;
  background-color: var(--lightgreen);
  font-family: 'Overpass', sans-serif;
}
`

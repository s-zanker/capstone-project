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

img {
  max-width: 100%;
}

h1, h2, h3, h4, h5, h6, p{
  margin: 0;
}

h1 {
  font-family: Chivo;
  font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: var(--freshgreen);}

h2 {
  font-family: Chivo;
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: var(--darkgreen);
}

h4 {
  font-family: Chivo;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  color: var(--darkgreen);}

link {
  font-family: Overpass;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: var(--sun-yellow);
}

p {
  font-family: Overpass;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: 0.3px;
  color: #2c3f58;
}

`

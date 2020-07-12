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
  margin: 0 auto;
  background-color: var(--lightgreen);
  font-family: 'Overpass', sans-serif;
}

img {
  max-width: 100%;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  font-family: 'Chivo', serif;
  font-weight: normal;
  font-style: normal;
  letter-spacing: normal;
}

h1 {
  font-size: 40px;
  font-weight: bold;
  color: whitesmoke;
}

h2 {
  font-size: 25px;
  font-weight: bold;
  line-height: 1.5;
  color: var(--darkgreen);
}

h3 {
  font-size: 25px;
  line-height: 1.5;
  color: var(--darkgreen);
}

h4 {
  font-size: 20px;
  line-height: 1.6;
  color: var(--darkgreen);
}

a {
  font-size: 14px;
  line-height: 1.5;
  color: var(--darkgreen);
}

p {
  font-size: 14px;
  line-height: 1.57;
  letter-spacing: 0.3px;
  color:var(--darkgrey);
}

.p-green {
  font-size: 14px;
  line-height: 1.57;
  letter-spacing: 0.3px;
  color: var(--darkgreen);
}

`

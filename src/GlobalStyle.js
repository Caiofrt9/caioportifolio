import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  outline: 0;
  border: 0;
  text-decoration: none;
}
:root {
  --color-bg: #1f1f38;
  --color-bg-variant: #2c2c6c;
  --color-primary: #4db5ff;
  --color-primary-variant: rgba(77, 181, 255, 04)
  --color-white: #fff;
  --color-light: rgba(255, 255, 255, .6);

  --transition: all 400ms ease; 

  --container-width-lg: 75%;
  --container-width-md: 86%;
  --container-width-ms: 90%;
}

body{
  background-color: #03091F;
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  color: white;
  background:var(--color-bg);
  line-height: 1.7;
}

.container {
  width: var(--container-width-lg);
  margin: 0 auto;

}

h1, h2, h3, h4, h5 {
  font-weight: 500;
}

h1{
  font-size: 2.5rem;

}

section {
  margin-top: 9rem;
  height: 100vh;
}

section > h2,section > h5{
  text-align: center;
  color: var(--color-light) ;
}

section > h2 {
  color: var(--color-primary);
  margin-bottom: 3rem;
}

.text-light{
  color: var(--color-light);
  transition: var(--transition);
}



html{
  scroll-behavior: smooth;
}

::-webkit-scrollbar{
  display: none;
}


a{
  
  color: var(--color-white);
  transition: var(--transition)
 
}

a:hover{
  color: var(--color-white);
}

.btn {
  width: max-content;
  display: inline-block;
  color: var(--color-primary);
  padding: 0.75rem 1.2rem;
  border-radius: 0.4rem;
  cursor: pointer; 
  border: 1px solid var(--color-primary);
  transition: var(--transition);

} 

.btn:hover{
  background: var(--color-white);
  color: var(--color-bg);
  border-color: transparent;
}

.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-bg);

}

img{
  display: block;
  width: 100%;
  object-fit: cover;
}





`

export default GlobalStyle

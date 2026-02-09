import styled from "styled-components"

const DemoButton = styled.button`
background-color:${(props)=>props.$primary?"grey":"green"};
color:white;
padding: 10px 20px;
border: none;
border-radius:5px;
cursor:pointer;
display:block;
margin:0 auto;

&:hover{
background-color:purple;}

&:focus
{
  outline:2 px solid white;
}`;

export const HomeButton = styled.button`
background-color:grey;
color:green;
padding: 10px 20px;
border: none;
border-radius:5px;
cursor:pointer;
display:block;
margin:0 auto;
`

export default DemoButton;
import styled from 'styled-components';
import '../App.css';
import { accessUrl } from "../Helpers/spotifyLogic";


 export const Login = () => {
  return (
    <>
     <h1>this is the login page</h1>
     <a href={accessUrl}>log in</a>
    </>
  )
}

const TitleBox = styled.div`
  position: absolute;
    width: 58%;
    height: 40px;
    padding-bottom: 15px;

    margin-top: 10% ;
    margin-left: 20% ;

    color: red ;

    justify-content: center;
    background: #BD0DC0;

  
`;
  

import styled from 'styled-components';
import '../App.css';
import { accessUrl } from "../Helpers/spotifyLogic";


 export const Login = () => {
  return (
    <TitleBox>
        <h1>Login Page</h1>
        <p>this site is for testing and personal use, I will not be making money off this page.</p>
     <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
     <a href={accessUrl}>Login to Spotify</a>
    </TitleBox>
     
    
  )
}

const TitleBox = styled.div`
  position: absolute;
    width: 58%;
    height: 40px;
    padding-bottom: 15px;

    margin-top: 10% ;
    margin-left: 20% ;

    color: white ;

    justify-content: center;
    /* background: #BD0DC0; */

  
`;
  

import styled from 'styled-components';

export const LoginWrapper = styled.div`
   position: absolute;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   background:#eee;
`;

export const Logo = styled.div`
  position: absolute;
  left: 50px;
  top: 60px;
  width: 100px;
  height: 46px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`;

export const LoginBox = styled.div`
  width: 400px;
  height: 280px;
  margin: 120px auto;
  padding-top: 20px;
  background:#fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
`;

export const Input = styled.input`
  display: block;
  width: 220px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  margin: 10px auto;
  color:#777;
`;

export const Button = styled.div`
  width: 220px;
  height: 30px;
  line-height: 30px;
  margin: 10px auto;
  color: #fff;
  background:#3194d0;
  border-radius: 15px;
  text-align: center;
  cursor: pointer;
`;
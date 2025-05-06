import styled from 'styled-components';


const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  text-align: center;
  justify-content: center;
  margin: 10% auto;
`;

const Title = styled.h1`
  color: #2c3e50;
  font-size: 2rem;
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;

const Footer = styled.p`
  margin-top: 20px;
  font-size: 1rem;
  color: #7f8c8d;
`;

export { Container, Title, Text, Footer };

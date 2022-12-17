import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  max-width: 380px;
  display: grid;
  gap: 20px;
  text-align: center;
  margin: 0 auto;
  padding: 140px 20px 100px;
`;

const Title = styled.h1`
  color: rgba(255, 255, 255, 1);
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
`;

const Description = styled.p`
  max-width: 240px;
  color: black;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 150%;
  margin: 0 auto;
`;

const DescriptionSecond = styled.p`
  max-height: object-fit
  max-width: 240px;
  color: purple;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 150%;
  margin: 0 auto;
`;

export default function TextSection() {
  return (
    <Wrapper>
      <Title>♡Three.js in React♡</Title>
      <Description>
        This is a developer workspace for background design and 3D objects.
        The techs that I use in this project; Three.js, React Styled-Components.
      </Description>
      <DescriptionSecond>
        Try to play with the objects!
      </DescriptionSecond>
    </Wrapper>
  );
}

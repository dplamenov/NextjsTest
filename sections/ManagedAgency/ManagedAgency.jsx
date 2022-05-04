import {
  Heading,
  StyledContainer,
  Subtitle,
  RightContainer,
  Flex,
  Element
} from "./elements";
import Image from "next/image";

export const ManagedAgency = () => {
  return (
    <StyledContainer style={{ background: "url('img/background.png')"}}>
      <StyledContainer style={{ maxWidth: '50%' }}>
        <Heading>Managed agency selection</Heading>
        <Subtitle>Stengthen your onboarding process</Subtitle>
        <Flex>
          <Image src="/img/video.png" width="400px" height="600px" alt="image" />
          <RightContainer>
            <Element>
              <h4>Brief</h4>
              <p style={{textAlign: 'left'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, sapiente.
              </p>
            </Element>
            <Element>
              <h4>Search</h4>
              <p style={{ textAlign: 'left' }}>

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, sapiente.
              </p>
            </Element>
            <Element>
              <h4>Pitch</h4>
              <p style={{ textAlign: 'left' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, sapiente.
              </p>
            </Element>
          </RightContainer>
        </Flex>
      </StyledContainer>
    </StyledContainer>
  );
};

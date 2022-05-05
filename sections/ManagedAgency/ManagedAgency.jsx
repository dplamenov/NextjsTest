import {
  Heading,
  StyledContainer,
  Subtitle,
  RightContainer,
  Flex,
  Element,
  Icon
} from "./elements";
import Image from "next/image";

export const ManagedAgency = () => {
  return (
    <StyledContainer style={{ background: "url('img/background.png')"}}>
      <StyledContainer style={{ maxWidth: '40%' }}>
        <Heading>Managed agency selection</Heading>
        <Subtitle>Stengthen your onboarding process</Subtitle>
        <Flex>
          <Image src="/img/video.png" width="350px" height="500px" alt="image" />
          <RightContainer>
            <Element>
              <Icon src="/img/brief.png" width="50px" height="50px" alt="image" />
              <div style={{marginLeft: '20px'}}>
                <h4>Brief</h4>
                <p style={{ textAlign: 'left' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, sapiente.
                </p>
              </div>
            </Element>
            <Element>
              <Icon src="/img/brief.png" width="50px" height="50px" alt="image" />
              <div style={{ marginLeft: '20px' }}>
                <h4>Search</h4>
                <p style={{ textAlign: 'left' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, sapiente.
                </p>
              </div>
            </Element>
            <Element>
              <Icon src="/img/brief.png" width="50px" height="50px" alt="image" />
              <div style={{ marginLeft: '20px' }}>
                <h4>Pitch</h4>
                <p style={{ textAlign: 'left' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, sapiente.
                </p>
              </div>
            </Element>
          </RightContainer>
        </Flex>
      </StyledContainer>
    </StyledContainer>
  );
};

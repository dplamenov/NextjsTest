import {
  Heading,
  StyledContainer,
  Subtitle
} from "./elements";
import Image from "next/image";

export const ManagedAgency = () => {
  return (
    <StyledContainer style={{ background: "url('img/background.png')"}}>
      <StyledContainer style={{ maxWidth: '50%' }}>
        <Heading>Managed agency selection</Heading>
        <Subtitle>Stengthen your onboarding process</Subtitle>
        <Image src="/img/video.png" width="400px" height="600px" alt="image" />
      </StyledContainer>
      
    </StyledContainer>
  );
};

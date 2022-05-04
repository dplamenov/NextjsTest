import styled from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  align-items: center;
  display: block;
  /* width: 70%;  */
`;

export const Heading = styled((props) => <SectionBigHeading {...props}  />)`
text-align: center;
`;

export const Subtitle = styled((props) => <SectionSubheading {...props}  />)`
text-align: center;
`;


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

export const Subtitle = styled((props) => <SectionSubheading {...props} />)`
text-align: center;
`;

export const RightContainer = styled((props) => <div {...props}  />)`
text-align: center;
margin-left: 50px;
`;

export const Flex = styled((props) => <div {...props} />)`
display: flex;
`;

export const Element = styled((props) => <div {...props} />)`
background: lightgray;
height: 150px;
font-family: sans-serif;
padding: 5px;
margin: 10px 0;
border-radius: 10px;
text-align: left;
`;



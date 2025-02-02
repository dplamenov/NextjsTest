import Image from "next/image";
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
@media (max-width: 768px) {
  margin-left: 0;
}
`;

export const Flex = styled((props) => <div {...props} />)`
display: flex;
@media (max-width: 768px) {
  flex-direction: column;
}
`;

export const Element = styled((props) => <div {...props} />)`
background: rgb(244, 244, 244);
height: 100px;
font-family: sans-serif;
padding: 15px;
margin: 10px 0;
border-radius: 10px;
text-align: left;
display: flex;
align-items:center;
`;


export const Icon = styled((props) => <Image {...props} />)`
margin-right: 10px;
display: block;
`;

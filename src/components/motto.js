import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import parse from 'html-react-parser'
import { lighten } from 'polished'

import { Container, Section, SectionHeading } from './styled/global'

import vars from '../vars'

const MottoWrapper = styled.div`
  display: grid;

  @media (min-width: ${vars.breakpointLarge}) {
    grid-template-columns: 1.05fr 1.6fr;
    gap: 1rem;

    > div:first-child {
      border-right: solid 0.125rem ${vars.colorGreenSmall};
    }
  }
`

const MottoHeadingWrapper = styled.div`
  @media (min-width: ${vars.breakpointLarge}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const MottoHeading = styled(SectionHeading)`
  font-size: ${vars.fontSizeHeading4};
  margin-bottom: 1rem;
  margin-right: 1rem;

  @media (min-width: ${vars.breakpointLarge}) {
    font-size: ${vars.fontSizeHeading5};
  }
`

const MottoContent = styled.div`
  a {
    color: ${lighten(0, vars.colorGreenSmall)};
    transition: color 250ms ${vars.ease};

    :hover,
    :focus {
      color: ${lighten(0.05, vars.colorGreenSmall)};
      transition: color 250ms ${vars.ease};
    }
  }

  @media (min-width: ${vars.breakpointLarge}) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.5em;
    p {
      margin-bottom: 0;
      font-size: ${vars.fontSizeTextLarge};
      color: ${({ bg }) =>
        bg !== 'colorWhite' ? vars.colorWhite : vars.colorAlmostBlack};
    }
  }
`

const Motto = ({
  mainHeadingText,
  paragraphContent,
  smallGreenHeadingText,
  sectionBackgroundColor,
}) => {
  return (
    <Section bg={sectionBackgroundColor}>
      <Container>
        <MottoWrapper>
          <MottoHeadingWrapper>
            <MottoHeading
              color={
                sectionBackgroundColor !== 'colorWhite'
                  ? vars.colorWhite
                  : vars.colorAlmostBlack
              }
            >
              <span className="green-subtext">{smallGreenHeadingText}</span>
              {mainHeadingText}
            </MottoHeading>
          </MottoHeadingWrapper>
          <MottoContent bg={sectionBackgroundColor}>
            {paragraphContent && parse(paragraphContent)}
          </MottoContent>
        </MottoWrapper>
      </Container>
    </Section>
  )
}

export const fragment = graphql`
  fragment MottoSection on WpPage_Layoutsections_Components_MottoSection {
    fieldGroupName
    mainHeadingText
    paragraphContent
    smallGreenHeadingText
    sectionBackgroundColor
  }
`

export default Motto

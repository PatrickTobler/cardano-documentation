import * as React from 'react'
import styled from '@emotion/styled'

import GridSectionEntry from './GridSectionEntry'

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 1.5rem;
  padding-top: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 3rem;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
  }
`

const GridSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 767px) {
    :nth-child(3) {
      padding-top: 1.5rem;
    }
  }
`

const GridSectionHeading = styled.h4`
  color: #1c1e21;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  margin-bottom: 0.5rem;
`

const WebsitesGrid = () => (
  <StyledGrid>
    <GridSection>
      <GridSectionHeading>Core tech:</GridSectionHeading>
      <GridSectionEntry
        color={'#F1F5FF'}
        imgSrc={'assets/websites-grid/dev-portal.svg'}
        url={'https://developers.cardano.org/'}
        index={0}
      />
      <GridSectionEntry
        color={'#F1F5FF'}
        imgSrc={'assets/websites-grid/node-tests.svg'}
        url={'https://tests.cardano.intersectmbo.org/'}
        index={4}
      />
    </GridSection>

    <GridSection>
      <GridSectionHeading>Smart contracts:</GridSectionHeading>
      <GridSectionEntry
        color={'#4BB4D51A'}
        imgSrc={'assets/websites-grid/plutus.svg'}
        url={'https://plutus.cardano.intersectmbo.org/docs/'}
        index={1}
      />
      <GridSectionEntry
        color={'#511CF7'}
        imgSrc={'assets/websites-grid/marlowe.svg'}
        url={'https://docs.marlowe.iohk.io/docs/introduction'}
        index={5}
      />
      <GridSectionEntry
        color={'#25272E'}
        imgSrc={'assets/websites-grid/aiken.png'}
        url={'https://aiken-lang.org/'}
        index={8}
      />
      <GridSectionEntry
        color={'#F1F5FF'}
        imgSrc={'assets/websites-grid/builder-tools.svg'}
        url={'https://developers.cardano.org/tools/'}
        index={10}
      />
    </GridSection>

    <GridSection>
      <GridSectionHeading>Scalability:</GridSectionHeading>
      <GridSectionEntry
        theme={
          'linear-gradient(90deg, rgba(93, 160, 180, 0.40) 0%, rgba(243, 215, 235, 0.40) 100%);'
        }
        imgSrc={'assets/websites-grid/hydra.svg'}
        url={'https://hydra.family/head-protocol/'}
        index={2}
      />
      <GridSectionEntry
        color={'#000000'}
        imgSrc={'assets/websites-grid/mythril.svg'}
        url={'https://mithril.network/doc/'}
        index={6}
      />
    </GridSection>

    <GridSection>
      <GridSectionHeading>Sustainability:</GridSectionHeading>
      <GridSectionEntry
        color={'#0128AA'}
        text={'Intersect'}
        url={'https://docs.intersectmbo.org/'}
        index={3}
      />
      <GridSectionEntry
        color={'#016C83'}
        imgSrc={'assets/websites-grid/sancho-net.svg'}
        url={'https://sancho.network/'}
        index={7}
      />
      <GridSectionEntry
        theme={'linear-gradient(90deg, #EAEFFD 0%, #FCF3F0 100%);'}
        imgSrc={'assets/websites-grid/gov-tool.svg'}
        url={'https://docs.gov.tools/'}
        index={9}
      />
      <GridSectionEntry
        color={'rgba(42, 65, 232, 0.10)'}
        imgSrc={'assets/websites-grid/catalyst.svg'}
        url={'https://docs.projectcatalyst.io/'}
        index={11}
      />
    </GridSection>
  </StyledGrid>
)

export default WebsitesGrid
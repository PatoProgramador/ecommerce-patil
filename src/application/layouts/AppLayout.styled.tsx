import styled from 'styled-components'
export const ContainerLayout = styled.div`
  background: #46043b;
  padding: 0px;
`

export const HeaderLayout = styled.div`
  display: flex;
  height: 120px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 30px 16px 40px;
  gap: 8px;
  background: rgb(132, 28, 125);
  box-shadow: rgba(0, 0, 0, 0.404) -8px 8px 26px;
  border-radius: 0px 0px 20px 20px;
`

export const TextHeaderLayou = styled.p`
  font-family: 'Elliot Pro';
  font-weight: 400;
  font-size:40px;
  text-align: center;
  line-height: 19.2px;
  color: aliceblue;
  padding: 0px 15px;
  margin: 5px;
  cursor: pointer;
`

interface ImageLayoutProps {
  w?: string;
  h?: string;
}
export const HeaderImageLayout = styled.img<ImageLayoutProps>`
  width: ${(props) => props.w || '120px'};
  height: ${(props) => props.h || '85px'};

  @media (max-width: 480px) {
    display: none;
  }
`

export const SecondImageLayout = styled.img<ImageLayoutProps>`
  width: ${(props) => props.w || '200px'};
  height: ${(props) => props.h || '60px'};
  cursor: pointer;
`

interface TextLayoutProps {
  fw?: string;
  fz?: string;
  mb?: string;
}

export const TextLayout = styled.div<TextLayoutProps>`
  font-family: 'Mulish', sans-serif;
  font-style: normal;
  font-weight: ${(props) => props.fw || '400'};
  font-size: ${(props) => props.fz || '14px'};
  line-height: 120%;
  color: #FFFFFF;
  margin-bottom: ${(props) => props.mb || '8px'};
`
interface FooterContainerNavProps {
  color?: string;
  backcolor?: string;
  paddingt?: string;
  pad?: string;
  h?: string;
  displayM?: string;
}

export const FooterContainerNav = styled.div<FooterContainerNavProps>`
  font-family: 'Mulish', sans-serif;
  font-style: normal;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 18px 24px;
  gap: 24px;
  width: 100%;
  height: auto;
  background: rgb(0, 0, 0);
  border-top: 1rem;
  border-top: solid;
  border-color: rgb(132, 28, 125);
  color: white;
`
interface FooterRowProps {
  dis?: string;
  fw?: string;
  w?: string;
  ac?: string;
  jc?: string;
  pad?: string;
  m?: string;
  ff?: string;
  txal?: string;
  dis900?: string;
  w900?: string;
  pad900?: string;
  m900?: string;
  tal900?: string;
  ai?: string;
}

export const FooterRow = styled.div<FooterRowProps>`
  display: ${(props) => props.dis || 'flex'};
  flex-wrap: ${(props) => props.fw || 'wrap'};
  width: ${(props) => props.w || '100%'};
  align-items: ${(props) => props.ai || 'center'};
  align-content: ${(props) => props.ac || 'center'};
  justify-content: ${(props) => props.jc || 'center'};
  padding: ${(props) => props.pad || ' '};
  margin: ${(props) => props.m || '0px 0 12px'};
  font-family: ${(props) => props.ff || 'Mulish, sans-serif'};
  font-size: 11.2px;
  text-align: ${(props) => props.txal || ' '};
 @media (max-width: 900px) {
    display: ${(props) => props.dis900 || 'flex'};
    width: ${(props) => props.w900 || ' '};
    padding: ${(props) => props.pad900 || 'unset'};
    margin: ${(props) => props.m900 || ' '};
  }
  @media (max-width: 550px) {
    display: ${(props) => props.dis900 || 'flex'};
    width: ${(props) => props.w900 || ' '};
    padding: ${(props) => props.pad900 || 'unset'};
    margin: ${(props) => props.m900 || ' '};
    text-align: ${(props) => props.tal900 || ' '};
  }
`

interface FooterColProps {
  dis?: string;
  wrap?: string;
  w?: string;
  mw?: string;
  minh?: string;
  ac900?: string;
  jc?: string;
  pad?: string;
  m?: string;
  bgcolor?: string;
  ff?: string;
  dis900?: string;
  w900?: string;
  pad900?: string;
  m900?: string;
  w550?: string;
  minh550?: string;
}

export const FooterCol = styled.div<FooterColProps>`
  display: ${(props) => props.dis || 'block'};
  flex-wrap: ${(props) => props.wrap || 'wrap'};
  width: ${(props) => props.w || ' '};
  max-width: ${(props) => props.mw || ' '};
  min-height: ${(props) => props.minh || ' '};
  align-items: center;
  align-content: ${(props) => props.ac900 || 'center'};
  justify-content: ${(props) => props.jc || 'center'};
  padding: ${(props) => props.pad || ' '};
  margin: ${(props) => props.m || '0 7px'};
  background-color: ${(props) => props.bgcolor || ''};

  @media (max-width: 900px) {
    display: ${(props) => props.dis900 || ' '};
    width: ${(props) => props.w900 || ' '};
    padding: ${(props) => props.pad900 || 'unset'};
    margin: ${(props) => props.m900 || ' '};
  }

  @media (max-width: 550px) {
    width: ${(props) => props.w550 || ' '};
    min-height: ${(props) => props.minh550 || ' '};
  }
`

export const FooterImageLayout = styled.img<ImageLayoutProps>`
  width: ${(props) => props.w || '120px'};
  height: ${(props) => props.h || '85px'};
`

interface FooterLinkProps {
  width?: string;
  left?: string;
  cursor?: string;
  size?: string;
  line?: string;
  tdec?: string;
  displayD?: string;
  displayM?: string;
}

export const FooterLink = styled.a<FooterLinkProps>`
  margin: 10px 0 0 0;
  width: ${(props) => props.width || '100%'};
  margin-left: ${(props) => props.left || ' '};
  font-style: normal;
  font-weight: 400;
  cursor: ${(props) => props.cursor || 'pointer'};
  font-size: ${(props) => props.size || '12.8px'};
  line-height: ${(props) => props.line || ''};
  color: #616267 !important;
  text-decoration-style: dotted;
  text-underline-position: under;
  text-decoration: ${(props) => props.tdec || ' '};

  &:hover {
    color: #0091da;
    text-decoration: none;
  }

  display: ${(props) => props.displayD || 'block'};

  @media (max-width: 700px) {
    display: ${(props) => props.displayM || 'block'};
  }
`

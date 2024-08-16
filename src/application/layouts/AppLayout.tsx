import React, { Fragment, ReactNode } from 'react'
import * as S from './AppLayout.styled'

import { AppImgUrlAssets } from '@app/assets/app.img-url.assets'

const appImgUrlAssets = new AppImgUrlAssets()

const inLogo = appImgUrlAssets.inLogo
const gitLogo = appImgUrlAssets.gitLogo
const patoLogo = appImgUrlAssets.patoLogo
const cartLogo = appImgUrlAssets.shoppingCart

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <S.ContainerLayout>
        <S.HeaderLayout>
          <S.ImageLayout src={patoLogo}></S.ImageLayout>
          <S.SecondImageLayout src={cartLogo}></S.SecondImageLayout>
        </S.HeaderLayout>
        {children}
        <S.FooterContainerNav>
          <S.FooterRow className='rights' m='10px 0 0' dis="flex" fw="" ai="start">
            <S.FooterCol w="50%" m="0">
              <S.ImageLayout w="110px" h="auto" src={patoLogo}></S.ImageLayout>
              <S.FooterRow className='socials' jc="start" m="0">
                <S.FooterCol m="26px 16px 24px 0">
                  <a
                    target='_blank'
                    href='https://www.linkedin.com/in/kevinpatdev/'
                    rel='noreferrer'
                  >
                    <img
                      width='20px'
                      height='20px'
                      src={inLogo}
                      alt='In'
                    />
                  </a>
                </S.FooterCol>
                <S.FooterCol m="26px 16px 24px 0">
                  <a
                    target='_blank'
                    href='https://github.com/PatoProgramador'
                    rel='noreferrer'
                  >
                    <img
                      width='20px'
                      height='20px'
                      src={gitLogo}
                      alt='Github'
                    />
                  </a>
                </S.FooterCol>
              </S.FooterRow>
              <S.TextLayout fw="700" fz="16px">Contacto</S.TextLayout>
              <S.TextLayout mb="0">skpates18@gmail.com</S.TextLayout>
              <S.TextLayout>350 781 0906</S.TextLayout>
            </S.FooterCol>
            <S.FooterCol mw="50%" m="0">
              <S.TextLayout fw="700" fz="16px">Legal</S.TextLayout>
              <S.TextLayout mb="0">Términos y condiciones</S.TextLayout>
              <S.TextLayout>Aviso de privacidad</S.TextLayout>
              <S.TextLayout mb="25.5px">© Copyright PatoProgramador 2024</S.TextLayout>
              <S.TextLayout>Bogotá, Colombia</S.TextLayout>
            </S.FooterCol>
          </S.FooterRow>
        </S.FooterContainerNav>
      </S.ContainerLayout>
    </Fragment>
  )
}

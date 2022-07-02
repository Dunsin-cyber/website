// sivu feature request page

import { Box, LightMode } from '@chakra-ui/react'
import * as React from 'react'
import FeedBack from 'components/canny-feedback'
import Header from 'components/header'
import { AdBanner } from 'components/secondary/ad-banner'
import SEO from 'components/seo'

const featurereq = () => {
  return (
    <>
      <LightMode>
        <Box data-theme='light' bg='chakra-body-bg' color='chakra-body-text'>
          <SEO
            title={'Feature Reqeuests'}
            description={'Sivu feature requests page'}
          />
          <AdBanner />
          <Header />
          <LightMode>
            <Box
              w='100%'
              data-theme='light'
              bg='white'
              color='white'
              pt={10}
              p={5}
            >
              <FeedBack />
            </Box>
          </LightMode>
        </Box>
      </LightMode>
    </>
  )
}

export default featurereq

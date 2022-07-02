/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import { Box, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect } from 'react'

const BoardToken = 'cdb1eab6-811c-ba6f-5b76-71dbf2c358c6'

const Feedback = () => {
  const bg = useColorModeValue('white', 'gray.800')
  useEffect(() => {
    ;(function (w, d, i, s) {
      function l() {
        if (!d.getElementById(i)) {
          var f = d.getElementsByTagName(s)[0],
            e = d.createElement(s)
          ;(e.type = 'text/javascript'),
            (e.async = !0),
            (e.src = 'https://canny.io/sdk.js'),
            f.parentNode.insertBefore(e, f)
        }
      }
      if ('function' != typeof w.Canny) {
        var c = function () {
          c.q.push(arguments)
        }
        ;(c.q = []),
          (w.Canny = c),
          'complete' === d.readyState
            ? l()
            : w.attachEvent
            ? w.attachEvent('onload', l)
            : w.addEventListener('load', l, !1)
      }
    })(window, document, 'canny-jssdk', 'script')

    Canny('render', {
      boardToken: BoardToken,
      basePath: null, // See step 2
      ssoToken: null, // See step 3
    })
  }, [])

  return (
    <Box>
      <div data-canny />
    </Box>
  )
}

export default Feedback

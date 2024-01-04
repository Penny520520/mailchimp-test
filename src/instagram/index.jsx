import React from 'react'
import InstagramEmbed from 'react-instagram-embed';
console.log(InstagramEmbed)
export default function InstagramTest() {
  return (
    <div>
      <InstagramEmbed
        url='https://www.instagram.com/sweethomelitter'
        clientAccessToken='IGQWROQXFaSWlqUFNKTEFZAbGpfbkZAPMTUycHNMNEZAuUXFpNkc5Y0R4UkdHOHBLSzNQSXpJdW0zV2pYcmdTbHdIT1l5RVg0YW0yazQybzdGdm94ZA2RUOGVKbUQ5U2J0MXl6T1N1WFllMXdSRG1zMVdJdXVQU29Md2cZD'
        maxWidth={320}
        hideCaption={false}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
    </div>
  )
}

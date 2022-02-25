import { Box } from '@chakra-ui/react'
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
 return (
  <Box>
   <SocialIcon url="https://twitter.com/advocacy_gender" style={{height: 25, width: 25, marginRight: '0.2rem'}} />
   <SocialIcon url="https://web.facebook.com/GANET-231009341027099" style={{height: 25, width: 25, marginRight: '0.2rem'}} />
   <SocialIcon url="https://www.youtube.com/channel/UC6T78paIi72AzJ6ulwT3OCg" style={{height: 25, width: 25, marginRight: '0.2rem'}} />
   <SocialIcon url="https://www.instagram.com/genderadvocacy/" style={{height: 25, width: 25, marginRight: '0.2rem'}} />
  </Box>
 )
}

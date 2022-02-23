import {
 Menu,
 MenuButton,
 MenuList,
 MenuItem,
 IconButton,
 Center,
 Divider,
 Text,
 Heading,
 Image
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import img from '../images/logo.jpg'


import { HamburgerIcon } from '@chakra-ui/icons'

export default function Navbar() {
 return (<div>
  <Divider /><br />

  <Menu>
   <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
   />
   <MenuList>
    <MenuItem>
     <Link to='/'>
      Home
     </Link>
    </MenuItem>
    <MenuItem>
     <Link to="/about">
      About
     </Link>
    </MenuItem>
    <MenuItem>
    <Link to="/contact">
     Contact
    </Link>
    </MenuItem>
    <MenuItem>
    <Link to="/faq">
     FAQ
    </Link>
    </MenuItem>
   </MenuList>

  </Menu>
  <Center>
  <Image
  borderRadius='full'
  boxSize='150px'
  mr={3}
  src={img}
  alt='Dan Abramov'
/>

   <Heading color='#702963'>
    GENDER ADVOCACY NETWORK <span style={{color: 'red'}}>(GANET)</span>
   </Heading><br />
   
  </Center>

  <Divider />
  <Center><Text style={{color: 'red', fontWeight: '480'}}><i>"Connecting Women and Girls, Building Partnerships"</i></Text></Center>
  <Divider />


 </div>
 );
}

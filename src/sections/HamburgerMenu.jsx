import  {useDisclosure, IconButton,Link, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
  import {HamburgerIcon } from '@chakra-ui/icons'

import React from 'react'




export default function HamburgerMenu (){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
     
       <Menu color={'black'}>
  <MenuButton
  background={'white'}
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />
  <MenuList color={'black'}>
    <MenuItem  >  
      <Link href='#home'>Home</Link>
    </MenuItem>
    <MenuItem  >
    <Link href='#about'>About</Link>
    </MenuItem>
    <MenuItem  >
    <Link href='#projects'>Projects</Link>
    </MenuItem>
    <MenuItem  >
    <Link href='#contact'>Contact</Link>
    </MenuItem>   
  </MenuList>
</Menu>
    )
  }


  
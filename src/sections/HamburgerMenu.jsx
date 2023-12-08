import  {useDisclosure,Box,Button, IconButton,Link, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
  import {HamburgerIcon } from '@chakra-ui/icons'

import React from 'react'




export default function HamburgerMenu (){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
     
       <Menu  closeOnBlur='true' closeOnSelect='true' color={'black'}>
  <MenuButton
     backgroundColor={'white'}
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />
  <MenuList position={'fixed'} right={'0'} width='30%'  color={'black'}
  textAlign={'center'}
  >
   
      <Link href='#home'><Button variant ="ghost" width={'100%'}>Home</Button></Link>
    
  
    <Link href='#about'><Button  variant ="ghost" width={'100%'}>About</Button></Link>
    

    <Link href='#projects'><Button variant ="ghost" width={'100%'}>Projects</Button></Link>

  
    <Link href='#contact'><Button variant ="ghost"  width={'100%'}>Contact</Button></Link>
    <Link href='#education'><Button variant ="ghost"  width={'100%'}>Education</Button></Link>
 
  </MenuList>
</Menu>
    )
  }


  
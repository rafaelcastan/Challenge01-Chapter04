import { Link, Flex, Icon, IconButton, Image } from "@chakra-ui/react";
import { useRouter } from 'next/router'
import {IoIosArrowBack} from 'react-icons/io';


export default function Header (){

  const router = useRouter()

  console.log(router.asPath!== "/")

    return(

        <Flex 
          as="header"
          align="center"
          justify="center"
          h={["50", "100"]}
        >
          {(router.asPath !== "/") && (
            <Link href="/">
            <IconButton
              aria-label="Return button"
              icon={<Icon as={IoIosArrowBack}/>}
              position="absolute"
              left={["4.27vw", "9.723vw"]}
              top={["6px", "30px"]}
              bg="none"
              _hover={{backgroundColor:"null"}}
              fontSize={[16,32]}
            />
          </ Link>
          )}
            <Image 
              h={["5", "2.871rem"]} 
              w={["5.063rem", "11.5rem"]} 
              src="/Logo.svg" 
              alt="World Trip Logo"
              my={["4", "7"]}
            />

        </Flex>
    )
}
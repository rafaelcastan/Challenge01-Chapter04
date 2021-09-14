import { Button, Flex, Icon, IconButton, Image } from "@chakra-ui/react";
import {IoIosArrowBack} from 'react-icons/io';


export default function Header (){
    return(

        <Flex 
          as="header"
          align="center"
          justify="center"
          h={["50", "100"]}
        >
            <IconButton
              aria-label="Return button"
              icon={<Icon as={IoIosArrowBack}/>}
              position="absolute"
              left={["4.27vw", "9.723vw"]}
              bg="none"
              fontSize={[16,32]}
            />

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
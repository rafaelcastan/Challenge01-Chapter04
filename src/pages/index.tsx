import { Flex, Image, VStack, useBreakpointValue, Text, Divider } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Header from '../components/Header'
import {BannerAds} from '../components/Swiper/Swiper'

const Home: NextPage = () => {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg:true,
  })



  return (

      <Flex
      w="100%"
      h="100vh" 
      direction="column"
      >

        <Header />

        <VStack spacing={["9", "20"]}>

        {!isWideVersion ? (

          <VStack 
            spacing="9"
            w="100%"
          >

            <Image 
              w="100%"
              src="/MBanner.svg" 
              alt="Banner" 
            />

            <Image 
              w="73.34vw"
              src="/MTravelTypes.svg" 
              alt="Banner" 
            />

          </VStack>

        )
        :
        (
          <VStack spacing="20">

            <Image 
              w="100%"
              src="/Banner.svg" 
              alt="Banner" 
            />

            <Image 
              w="80.56vw"
              src="/TravelTypes.svg" 
              alt="Banner" 
            />
            
          </VStack>

        )}

        <Divider 
          orientation="horizontal" 
          borderColor="gray.900" 
          w="90px" 
          alignSelf="center"
          border="2px"
        />

  

        <Flex 
        fontSize={["20px", "30px", "36px"]}
        alignSelf="center"
        justify="center"
        >
          <Text textAlign="center">
            Vamos nessa? 
            <Text>
              Então escolha seu continente
            </Text>
          </Text>
        </Flex>

        <Flex 
          w={["100vw", "100vw", "100vw",  "86.112vw"]}
          alignSelf="center"
          pb={["24px", "40px"]}
        >
          <BannerAds />
        </Flex>
      
       
      </VStack>

      </Flex>

  )
}

export default Home

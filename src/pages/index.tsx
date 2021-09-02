import { Flex, Image, VStack, useBreakpointValue } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Header from '../components/Header'


const Home: NextPage = () => {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg:true,
  })

  return (

      <Flex
      w="100vw" 
      h="100vh" 
      direction="column"
      >

        <Header />

      {!isWideVersion ? (

        <VStack spacing="9">

          <Image 
            w="100vw"
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
            w="100vw"
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
       
      </Flex>

  )
}

export default Home

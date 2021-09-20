import { Flex, useBreakpointValue,Image, Text, HStack } from '@chakra-ui/react'
import type { GetServerSideProps, NextPage } from 'next'
import CityCards from '../components/CityCards'
import ContinentInfoNumbers from '../components/ContinentInfo'
import Header from '../components/Header'

interface ContinentInfoProps  {
  Continent : string
}


export default function ContinentInfo ({Continent}:ContinentInfoProps) {

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
        
        <Flex>
          <Image 
            w="100%"
            h="34.723vw"
            src={`/${Continent}.jpg`} 
            alt={` Cidade da ${Continent}`}
          />
          <Text
            position="absolute"
            color="white"
            fontSize="3rem"
            marginLeft="9.7222vw"
            alignSelf="flex-end"
            marginBottom="4.1vw"
          >
            {Continent}
          </Text>
        </Flex>

        <Flex
          mx="9.7222vw"
          my="5.556vw"
          justifyContent="space-between"
        >
          <Text
            w="41.667vw"
            fontSize="1.5rem"
            textAlign="justify"
          > 
            A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>

          <HStack spacing="2.917vw">

          <ContinentInfoNumbers quantity={50} text="países"/>

          <ContinentInfoNumbers quantity={60} text="línguas"/>

          <ContinentInfoNumbers quantity={27} text="cidades +100"/>
          

          </HStack>

        </Flex>

        <Flex mx="9.7222vw" direction="column" pb="140px">
          <Text fontSize="2.25rem">
            Cidades +100
          </Text>

          <HStack spacing="45px">
          <CityCards />
          <CityCards />
          </HStack>
          

        </Flex>

      </Flex>

    )
  }


export const getServerSideProps: GetServerSideProps = async ({req, params, resolvedUrl, query }) =>{

  const continentes = ["Asia", 
  "AmericadoNorte", 
  "AmericadoSul", 
  "Europa", 
  "Oceania", 
  "Africa"]

  const routeVerification = continentes.includes(resolvedUrl.slice(1))

  console.log(query)
  console.log(resolvedUrl)
  
  if (!routeVerification) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {Continent:query.slug},
  }
}

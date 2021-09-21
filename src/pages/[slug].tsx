import { Flex, useBreakpointValue,Image, Text, HStack, SimpleGrid } from '@chakra-ui/react'
import type { GetServerSideProps } from 'next'
import CityCards from '../components/CityCards'
import ContinentInfoNumbers from '../components/ContinentInfo'
import Header from '../components/Header'

interface ContinentInfoProps  {
  continent : string
}


export default function ContinentInfo ({continent}:ContinentInfoProps) {

    return (

      <Flex
      w="100%"
      h="100vh" 
      direction="column"
      >

        <Header />
        
        <Flex position="relative">
          <Image 
            w="100%"
            h="34.723vw"
            src={`/${continent}.jpg`} 
            alt={` Cidade da ${continent}`}
          />
          <Text
            position="absolute"
            color="white"
            fontSize={["1.75rem","3rem"]}
            marginLeft={["50%","50%", "9.7222vw"]}
            transform={["translateX(-50%)", "translateX(-50%)", "translateX(0%)"]}
            alignSelf={["center","center",  "flex-end"]}
            marginBottom={["0", "0", "4.1vw"]}
          >
            {continent}
          </Text>
        </Flex>

        <Flex
          mx="9.7222vw"
          my={["24px","5.556vw"]}
          justifyContent="space-between"
          direction={["column", "column", "column", "column", "row"]}
        >
          <Text
            w= {["100%", "100%", "100%", "100%", "41.667vw"]}
            fontSize={["0.875rem", "1.5rem"]}
            textAlign="justify"
            mb={["16px", ""]}
            color="gray.600"
          > 
            A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>

          <HStack spacing="2.917vw">

          <ContinentInfoNumbers quantity={50} text="países"/>

          <ContinentInfoNumbers quantity={60} text="línguas"/>

          <ContinentInfoNumbers quantity={27} text="cidades +100" info="Quantidade de cidades entre as 100 mais visitadas do mundo"/>
          

          </HStack>

        </Flex>

        <Flex mx="9.7222vw" direction="column" pb={["16px", "140px"]} >
          <Text fontSize={["1.5rem", "2.25rem"]} mb="40px" color="gray.700">
            Cidades +100
          </Text>

          <SimpleGrid flex="1" gap="45px" minChildWidth="256px" align="center" justifyItems="center">
          <CityCards city={continent} country={continent}/>
          <CityCards city={continent} country={continent}/>
          <CityCards city={continent} country={continent}/>
          <CityCards city={continent} country={continent}/>
          <CityCards city={continent} country={continent}/>
          </SimpleGrid>
          

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
  
  if (!routeVerification) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {continent:query.slug},
  }
}

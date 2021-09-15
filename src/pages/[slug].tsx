import { Flex, useBreakpointValue } from '@chakra-ui/react'
import type { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Header from '../components/Header'


const ContinenteInfo : NextPage = () => {

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
        

      </Flex>

    )
  }

export default ContinenteInfo

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
    props: {},
  }
}

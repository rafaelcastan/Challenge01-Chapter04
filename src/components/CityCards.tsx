import { Flex, Image, VStack, Text, HStack } from "@chakra-ui/react";

interface CityCardsProps {
    city:string
    country: string
}


export default function CityCards ({city, country}: CityCardsProps){
    return(
        <Flex  direction="column" w="256px" h="279px" justifyContent="space-between"
            border="solid" 
            borderColor="yellow.400" 
            borderWidth="thin" 
            borderRadius="3%"
            overflow="hidden"
        >
            <Image src={`${city}.jpg`} alt={`${city} city image`} w="100%"/>

            <HStack 
              my="auto"
              mx="1.67vw" 
              justifyContent="space-between" 
            >

            <VStack alignSelf="start" alignItems="flex-start">
                <Text color="gray.700">
                    {`${city}`}
                </Text>
                <Text color="gray.400">
                    {country}
                </Text>
            </VStack>

            <Image src={`${city}.jpg`} alt={`${city} country flag image`}  borderRadius="50%" w="30px" h="30px" />
            </HStack>
        </Flex>
    )
}
import { Flex, Image, VStack, Text, HStack } from "@chakra-ui/react";


export default function CityCards (){
    return(
        <Flex  direction="column" w="256px" h="279px" justifyContent="space-between"
            border="solid" 
            borderColor="yellow.400" 
            borderWidth="thin" 
            borderRadius="3%"
            overflow="hidden"
        >
            <Image src="/Europa.jpg" alt="Europa City" w="100%"/>

            <HStack 
              pb="25px" 
              px="24px" 
              justifyContent="space-between" 
            >

            <VStack alignSelf="start" alignItems="flex-start">
                <Text>
                    Londres
                </Text>
                <Text>
                    Reino Unido
                </Text>
            </VStack>

            <Image src="/Europa.jpg" alt="Europa City" borderRadius="50%" w="30px" h="30" />
            </HStack>
        </Flex>
    )
}
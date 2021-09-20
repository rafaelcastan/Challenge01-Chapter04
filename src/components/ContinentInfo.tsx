import { Flex, Text } from "@chakra-ui/react";

interface ContinentInfoNumbersProps {
    quantity: number
    text:string
}

export default function ContinentInfoNumbers ({quantity, text}:ContinentInfoNumbersProps){
    return(
        <Flex 
            direction="column" 
            alignItems="center"
            
          > 
            <Text fontSize="3rem" textColor="yellow.400">
              {quantity}
            </Text>
            <Text fontSize="1.5rem">
              {text}
            </Text>
          </Flex>
    )
}
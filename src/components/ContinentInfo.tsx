import { Flex, Text, HStack, Tooltip, Icon } from "@chakra-ui/react";
import {BsFillInfoCircleFill} from "react-icons/bs";

interface ContinentInfoNumbersProps {
    quantity: number
    text:string
    info?:string
}

export default function ContinentInfoNumbers ({quantity, text, info}:ContinentInfoNumbersProps){
    return(
        <Flex 
            direction="column" 
            alignItems={["flex-start", "center"]}
          > 
            <Text fontSize={["1.5rem", "3rem"]} textColor="yellow.400">
              {quantity}
            </Text>
            <HStack>
              <Text fontSize={["1.125rem", "1.5rem"]} color="gray.700">
                {text}
              </Text>
              {info && (
                <Tooltip  label={info} fontSize="md" aria-label="A tooltip">
                <span>
                  <BsFillInfoCircleFill color="#7d7d7d"/>
                </span>
              </Tooltip>
              )}

            </HStack>
          </Flex>
    )
}
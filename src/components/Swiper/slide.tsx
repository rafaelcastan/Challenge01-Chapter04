import { Flex, Heading, Image, Text, useBreakpointValue, VStack } from "@chakra-ui/react"

interface SlideProps {
    title?:  string,
    subtitle?: string,
    imageUrl: string, 
}

export const Slide = ({title, subtitle, imageUrl}:SlideProps) => {

    const isWideScreen = useBreakpointValue({
        base: false,
        lg:true,
      })

    const width = (isWideScreen ? ("86.112vw"):("100%"))
    const height = (isWideScreen ? ("31.25vw"):("66.67vw"))

    return (
        <Flex 
        justify="center"
        align="center"
        >

          <Image   w={width} h={height} src={imageUrl} alt={`Imagem de uma cidade da ${title}`}/>

          <VStack 
            position="absolute" 
            direction="column" 
            alignItems="center"
            textColor="white"
            spacing="5"
          >
            <Heading fontSize={["24px", "48px"]}>{title}</Heading>
            <Text fontSize={["14px", "24px"]}>{subtitle}</Text>
          </VStack>   

      </Flex>
    )
}
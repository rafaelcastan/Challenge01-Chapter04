import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools"


export const theme = extendTheme ({
    styles:{
        global:{
            body:{
                bg:"white"
            }
        }
    },
    fonts:{
        heading:"Poppins",
        body: "Poppins"
    },
})
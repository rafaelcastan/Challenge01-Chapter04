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
        body: "Poppins",
    },
    colors: {
        yellow:{
            400:"#FFBA08"
        },
        gray:{
            200:"#DADADA",
            300:"#999999",
            700:"#47585B"
        }
    }
        
})
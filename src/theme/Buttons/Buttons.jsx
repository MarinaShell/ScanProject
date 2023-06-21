import { createTheme } from "@mui/material/styles";
import { Colors } from "../Colors/Colors";

const theme = createTheme({
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'main'},
                    style: {
                        backgroundColor: Colors.colorBlue,
                        color: Colors.colorWhite
                        
                    }
                    
                }
            ]
        }
    }
})

export { theme }
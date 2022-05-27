import Image from "next/image"
import { Container, SocialButton } from "./styles"
import { Nav } from "react-bootstrap"


export default function SocialBar(props) {

    return(

    <Container>

       <SocialButton href="https://www.facebook.com/Williamdeangelo">
        <Image src="/Facebook.png" width={60} height={60} />
       </SocialButton>
    
        <SocialButton href="https://www.instagram.com/wil_horse/" >
            <Image src="/Instagram.png" width={60} height={60} />
        </SocialButton>

        <SocialButton href="https://www.linkedin.com/in/willian-de-angelo-7a7a16138/">
            <Image src="/Linkedin.png" width={60} height={60} />
        </SocialButton>

        <SocialButton href="https://github.com/wdangelo" >
            <Image src="/Github.png" width={60} height={60} />
        </SocialButton>

    </Container>

    )
}
import Image from "next/image"
import { Container, SocialButton } from "./styles"

export default function SocialBar(props) {

    return(

    <Container>

       <SocialButton href="https://www.facebook.com/Williamdeangelo">
        <Image src="/icons8-facebook-240.png" width={60} height={60} />
       </SocialButton>
        <SocialButton href="https://www.instagram.com/wil_horse/" >
            <Image src="/icons8-instagram-240.png" width={60} height={60} />
        </SocialButton>

        <SocialButton href="https://www.linkedin.com/in/willian-de-angelo-7a7a16138/">
            <Image src="/icons8-linkedin-circled-240.png" width={60} height={60} />
        </SocialButton>

        <SocialButton href="https://github.com/wdangelo" >
            <Image src="/GitHub-Mark-Light-64px.png" width={60} height={60} />
        </SocialButton>

    </Container>

    )
}
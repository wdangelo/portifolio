import { Card, Figure } from "react-bootstrap";


import william from "../../../public/william.jpeg"
export default function DisplayCard(){
    return(

<Figure>
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src="../../../public/william.jpeg"
  />
  <Figure.Caption>
    William de angelo
  </Figure.Caption>
</Figure>
    )
}
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
const arr=[
    {Img:"https://node01.flagstat.net/media/catalog/product/big/6307.webp", Tex:" Algeria "},
    {Img:"https://node01.flagstat.net/media/catalog/product/big/1556.webp", Tex: " Bahrain"},
    {Img:"https://node01.flagstat.net/media/catalog/product/big/1519.webp", Tex: " Egypt"},
    {Img:"https://node01.flagstat.net/media/catalog/product/big/1787.webp", Tex: " Iran"},
    {Img:"https://node01.flagstat.net/media/catalog/product/big/1783.webp",Tex: " Iraq"},
    {Img:"https://node01.flagstat.net/media/catalog/product/big/1812.webp",Tex: " Jordan"},
    {Img:"https://node01.flagstat.net/media/catalog/product/big/2054.webp", Tex: " Tunisia"},
    {Img:"https://node01.flagstat.net/media/catalog/product/big/1919.webp", Tex: " Oman"},
    {Img:"https://node01.flagstat.net/media/catalog/product/big/1851.webp", Tex: " Kuwait"},
    {Img:"https://node01.flagstat.net/media/catalog/product/big/1876.webp", Tex: " Mrocco"},
    {Img:"https://node01.flagstat.net/media/catalog/product/big/1837.webp", Tex: " Qatar"},
    {Img:"https://node01.flagstat.net/media/catalog/product/big/1984.webp", Tex: " Saudi_arabia"},
    {Img:"https://node01.flagstat.net/media/catalog/product/big/2028.webp", Tex: " Sudan"}
];
const rendercard = (ca)=>{
return(

<Card style={{ width: '18rem' , margin: '10px' }}>
<Card.Img variant="top" src={ca.Img} />
<Card.Body>
  <Card.Title style={{textAlign:'center'}}>{ca.Tex}</Card.Title>
  <Button variant="primary">Information</Button>
</Card.Body>
</Card>

)
};
const Cards = () => {
  return (
    <Container>
    <div className='cardss'>
 {arr.map(rendercard)}     
    </div>
    </Container>
  )
}

export default Cards

import React from 'react'
import { Container } from 'react-bootstrap'
import Flex from '../../../components/layouts/Flex'
import Image from '../../../components/layouts/Image'
import "./Venice.css"

const Venice = () => {
  return (
    <Container>
        <Flex className="venice_part">
            <div className='venice_bio'>
                <h3>Go to Venice</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page ...</p>
            </div>
            <Flex className="venice_imgPart">
                <div className='venice_img'>
                    <Image src="assets/images/homePage/venice1.png"/>
                    <div>80$</div>
                </div>
            </Flex>
        </Flex>
    </Container>
  )
}

export default Venice
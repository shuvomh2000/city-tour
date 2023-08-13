import React from 'react'
import { Container } from 'react-bootstrap'
import Flex from "../../../components/layouts/Flex"
import Image from "../../../components/layouts/Image"
import "./services.css"

const services = () => {
  return (
    <div className='service_part'>
        <Container>
            <Flex className="service_inner">
                {/* service 1 */}
                <Flex className="service1">
                    <div>
                        <Image src="assets/images/homePage/global.svg"/>
                    </div>
                    <div>
                        <h4>BEST SELECTION</h4>
                        <p>Morbi semper fames lobortis ac hac penatibus</p>
                    </div>
                </Flex>
                {/* service 2 */}
                <Flex className="service1">
                    <div>
                        <Image src="assets/images/homePage/price.svg"/>
                    </div>
                    <div>
                        <h4>BEST PRICE GUARANTEE</h4>
                        <p>Morbi semper fames lobortis ac hac penatibus</p>
                    </div>
                </Flex>
                {/* service 3 */}
                <Flex className="service1">
                    <div>
                        <Image src="assets/images/homePage/support.svg"/>
                    </div>
                    <div>
                        <h4>24/7 SUPPORT</h4>
                        <p>Morbi semper fames lobortis ac hac penatibus</p>
                    </div>
                </Flex>
            </Flex>
        </Container>
    </div>
  )
}

export default services
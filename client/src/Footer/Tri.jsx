import React from 'react'
import { Box, Button, HStack, Input, SimpleGrid, Stack, Text, Divider, Link, Image, Flex } from "@chakra-ui/react"
import { extendTheme } from '@chakra-ui/react'
import { FaRegEnvelope, FaFacebookF, FaMapMarkerAlt, FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsApple } from "react-icons/bs"
//twi AiFillTwitterCircle ai
//face FaFacebookF fa  insta FaInstagramSquare
const Tri = () => {

    const breakpoints = {
        sm: '320px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
        '2xl': '1536px',
      }

      const theme = extendTheme({ breakpoints })
    return (
        <Stack w="100%" h="100%" backgroundColor="#F7F6F2">
            <Divider w="100%" borderColor='#4B5666' backgroundColor="#F7F6F2" />
            <SimpleGrid columns={[1, 1, 1, 1]} backgroundColor="#F7F6F2"  w="100%" h="100%">

                <Box w={["100%", "100%", "100%", "100%"]}  direction={["row", "row", "row", "row"]} h="150px" backgroundColor="#F7F6F2" >
                    <Box w="85%" h="95%" m="auto" backgroundColor="#F7F6F2">
                        <HStack w={["100%", "100%", "100%", "100%"]} h="100px" backgroundColor="#F7F6F2">
                            <Box w={["100%", "100%", "100%", "100%"]} h="100%" backgroundColor="#F7F6F2" >
                                <Text fontSize={["12px", "14px", "16px", "18px"]} fontWeight="600" lineHeight={2} backgroundColor="#F7F6F2">Sign Up for Email</Text>
                                <Text fontSize={["9px", "10px", "13px", "13px"]} color="#5C5C5F" backgroundColor="#F7F6F2">Receive early access to new arrivals, sales, exclusive content, events</Text>
                                <Text fontSize={["9px", "10px", "13px", "13px"]} color="#5C5C5F" backgroundColor="#F7F6F2"> and much more!</Text>
                            </Box>
                            <Box h="100%"  backgroundColor="#F7F6F2" w={["50%", "60%", "75%", "90%"]}>
                                <Text  fontSize="15px" color="#5C5C5F" backgroundColor="#F7F6F2" >Email Address*</Text>
                                <Input size='lg' w={["100px", "200px", "300px", "400px"]} borderColor='#4B5666' backgroundColor="#FFFFFF" />
                                <Button backgroundColor='#4B5666' color="#FFFFFF" m={["2px", "3px", "6px", "6px"]}>
                                    SUBMIT
                                </Button>
                            </Box>

                        </HStack>
                        <Box w={["100%", "100%", "100%", "100%"]}><Text fontSize="13px" color="#5C5C5F" backgroundColor="#F7F6F2">By signing up, you will receive Anthropologie offers, promotions and other commercial messages. You are also agreeing to Anthropologie’s Privacy Policy. You may unsubscribe at any time.</Text></Box>
                    </Box>
                    <Box mb={4} backgroundColor="#F7F6F2" w={["0%", "70%", "100%", "100%"]}> <Divider w="100%" m="auto" borderColor='#4B5666' mt="30px" /></Box>
                    <SimpleGrid columns={[2, 1, 1, 1]} backgroundColor="#F7F6F2" w="100%" h="auto">
                        <HStack w={["50%", "70%", "85%", "85%"]} h="250px"  backgroundColor="#F7F6F2" m="auto" spacing={10}>

                            <Box w={["150px", "180px", "220px", "250px"]} h="200px" backgroundColor="#F7F6F2">
                                <Text fontSize="13" p={1} backgroundColor="#F7F6F2">Help</Text>
                                <Link href="https://www.anthropologie.com/#order-inquiry" fontSize={["10px", "10px", "12px", "12px"]} color="#26262C" p={1} fontFamily="sans-serif">Track Your Order</Link><br />
                                <Link href="https://www.anthropologie.com/#order-inquiry" fontSize={["10px", "10px", "12px", "12px"]} color="#26262C" p={1} fontFamily="sans-serif">Start A Return Or Exchange (US)</Link ><br />
                                <Link href="https://www.anthropologie.com/help/returns-exchanges" fontSize={["10px", "10px", "12px", "12px"]} color="#26262C" p={1} fontFamily="sans-serif">Returns & Exchanges</Link><br />
                                <Link href="https://www.anthropologie.com/help/shipping-info" fontSize={["10px", "10px", "12px", "12px"]} color="#26262C" p={1} fontFamily="sans-serif">Shipping</Link><br />
                                <Link href="https://www.anthropologie.com/help/customer-service" fontSize={["10px", "10px", "12px", "12px"]} color="#26262C" p={1} fontFamily="sans-serif">Customer Service</Link><br />
                                <Link href="https://www.anthropologie.com/help/current-promotions" fontSize={["10px", "10px", "12px", "12px"]} color="#26262C" p={1} fontFamily="sans-serif">Current Promotions</Link><br />
                                <Link href="https://www.anthropologie.com/help/recall" fontSize={["10px", "10px", "12px", "12px"]} color="#26262C" p={1} fontFamily="sans-serif">Product Recalls</Link><br />
                            </Box>
                            <Box w="250px" h="200px" backgroundColor="#F7F6F2">
                                <Text fontSize="13" p={1} backgroundColor="#F7F6F2">About US</Text>
                                <Link href="https://www.anthropologie.com/help/our-story" fontSize={["10px", "10px", "12px", "12px"]} color="#26262C" p={1} fontFamily="sans-serif">Our Story</Link><br />
                                <Link href="https://anthropologieevents.splashthat.com/" fontSize={["10px", "10px", "12px", "12px"]} color="#26262C" p={1} fontFamily="sans-serif">Events</Link><br />
                                <Link href="https://www.anthropologie.com/help/stories-community-greater-good" fontSize={["10px", "10px", "12px", "12px"]} color="#26262C" p={1} fontFamily="sans-serif">A Greater Good</Link><br />
                                <Link href="https://www.anthropologie.com/help/diversity-and-inclusion" fontSize={["10px", "10px", "12px", "12px"]} color="#26262C" p={1} fontFamily="sans-serif">Diversity & Inclusion</Link><br />
                                <Link href="https://www.anthropologie.com/stories" fontSize={["10px", "10px", "12px", "12px"]} color="#26262C" p={1} fontFamily="sans-serif">Stories</Link>
                            </Box>
                            <Box w="250px" h="200px" backgroundColor="#F7F6F2">
                                <Text fontSize="13" p={1} backgroundColor="#F7F6F2">Services</Text>
                                <Link href="https://www.anthropologie.com/help/anthro-loyalty" fontSize={["10px", "10px", "12px", "12px"]} color="#26262C" p={1} fontFamily="sans-serif">AnthroPerks</Link><br />
                                <Link href="https://www.anthropologie.com/help/gift-card" fontSize={["10px", "10px", "12px", "12px"]} color="#26262C" p={1} fontFamily="sans-serif">Gift Cards</Link><br />
                                <Link href="https://www.anthropologie.com/help/design-trade-program" fontSize={["10px", "10px", "12px", "12px"]} color="#26262C" p={1} fontFamily="sans-serif">AnthroLiving Designer & Trade Program</Link><br />
                                <Link href="https://www.anthropologie.com/help/furniture-guide" fontSize={["10px", "10px", "12px", "12px"]} color="#26262C" p={1} fontFamily="sans-serif">Furniture: Guides & Services</Link><br />
                                <Link href="https://www.anthropologie.com/help/curbside-pick-up" fontSize={["10px", "10px", "12px", "12px"]} color="#26262C" p={1} fontFamily="sans-serif">Store Pickup & Collection Points</Link><br />
                                <Link href="https://www.anthropologie.com/help/klarna" fontSize={["10px", "10px", "12px", "12px"]} color="#26262C" p={1} fontFamily="sans-serif">Klarna</Link><br />

                            </Box>
                            <Box w="250px" h="200px" backgroundColor="#F7F6F2">
                                <Text fontSize="13" p={2} backgroundColor="#F7F6F2">Connect</Text>
                                <Link href="https://www.anthropologie.com/help/contact-us" fontSize={["10px", "10px", "12px", "12px"]} color="#26262C" p={1} fontFamily="sans-serif">Contact Us</Link><br />
                                <Link href="https://www.anthropologie.com/help/connect-with-us" fontSize={["10px", "10px", "12px", "12px"]} color="#26262C" p={1} fontFamily="sans-serif">Stay Connected</Link><br />
                                <Link href="https://www.urbn.com/work-with-us" fontSize={["10px", "10px", "12px", "12px"]} color="#26262C" p={1} fontFamily="sans-serif">Careers</Link><br />
                                <Link href="https://www.anthropologie.com/help/personal-styling" fontSize={["10px", "10px", "12px", "12px"]} color="#26262C" p={1} fontFamily="sans-serif">Styling Services</Link><br />
                                <Link href="https://www.anthropologie.com/help/request-catalog" fontSize={["10px", "10px", "12px", "12px"]} color="#26262C" p={1} fontFamily="sans-serif">Request A Catalog</Link><br />
                            </Box>
                            <Box w="250px" h="200px" backgroundColor="#F7F6F2" >
                                <HStack backgroundColor="#F7F6F2">
                                    <Box p={1} backgroundColor="#F7F6F2"> <FaMapMarkerAlt /></Box>
                                    <Box backgroundColor="#F7F6F2"><Link fontSize={["10px", "10px", "12px", "12px"]} href="https://www.anthropologie.com/stores" color="#167A92">Store Locator</Link></Box>
                                </HStack>
                                <HStack backgroundColor="#F7F6F2">
                                    <Box p={2} backgroundColor="#F7F6F2"> <FaRegEnvelope /></Box>
                                    <Box backgroundColor="#F7F6F2"><Link fontSize={["10px", "10px", "12px", "12px"]} href="https://www.anthropologie.com/#email-sign-up" color="#167A92">Email</Link></Box>
                                </HStack>

                            </Box>

                        </HStack>


                    </SimpleGrid>
                    <HStack w={["50%", "50%", "60%", "60%"]}  h="50px" m="auto" align="right" backgroundColor="#F7F6F2" mt={5} >

                        <HStack border="2px solid black" w={["10%", "15%", "20%", "20%"]} h="100%" borderRadius={1} backgroundColor="#F7F6F2">
                            <Box backgroundColor="#F7F6F2"><BsApple /></Box>
                            <Box backgroundColor="#F7F6F2" ><Link >
                                <Text fontSize={["10px", "10px", "12px", "12px"]} backgroundColor="#F7F6F2">
                                    Download on the
                                </Text>
                                <Text fontSize="15px" fontWeight="600" backgroundColor="#F7F6F2" >
                                    App Store
                                </Text>
                            </Link></Box>
                        </HStack>

                        <Box w={["20%", "20%", "30%", "40%"]} h="100%" backgroundColor="#F7F6F2">
                            <HStack spacing={2} alignItems="center" justifyContent="center" mt="15px" backgroundColor="#F7F6F2">
                                <Box backgroundColor="#F7F6F2"><FaFacebookF /></Box>
                                <Box backgroundColor="#F7F6F2"><AiFillTwitterCircle /></Box>
                                <Box backgroundColor="#F7F6F2"><FaInstagramSquare /></Box>
                                <Box backgroundColor="#F7F6F2"></Box>
                            </HStack>

                        </Box>

                    </HStack>

                        <Box w={["85%", "85%", "85%", "85%"]} h="90px" m="auto" mt={2} backgroundColor="#F7F6F2">
                            <Image w={["70%", "70%", "100%", "100%"]} h="100%" src="https://images.ctfassets.net/5de70he6op10/2DRgCRXNIEkk0wIqUo2ywa/20ea44a95fb361eaf034b42eec179d44/_site_footer__download_app_enable_push_.jpg" />

                        </Box>
                    
                </Box>
            </SimpleGrid>


        </Stack>
    )
}

export default Tri

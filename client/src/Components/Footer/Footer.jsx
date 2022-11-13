import React from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Input,
  Text,
  Link,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { CiLocationOn } from "react-icons/ci";
import { AddIcon, EmailIcon } from "@chakra-ui/icons";
import { BsInstagram } from "react-icons/bs";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaRegEnvelope, FaFacebookF, FaMapMarkerAlt, FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsApple } from "react-icons/bs"


const Footer = () => {
  const [isSmallerThan] = useMediaQuery("(min-width: 769px)");
  return (
    <Box bg={"#f7f6f2"} w={"100%"} p={"5%"} fontSize={"14px"}>
      <Box>
        <Flex
          justifyContent={"space-between"}
          direction={isSmallerThan ? "row" : "column"}
        >
          <Box
            textAlign={"left"}
            lineHeight={"8"}
            w={isSmallerThan ? "45%" : "100%"}
            fontSize={["xs", "xs", "sm", "sm"]}
          >
            <Text fontWeight={"semibold"}>Sign Up for Email</Text>
            <Box lineHeight={"5"}>
              <Text>
                Receive early access to new arrivals, sales, exclusive content,
                events
              </Text>
              <Text>and much more!</Text>
            </Box>
          </Box>
          <Box
            w={isSmallerThan ? "45%" : "100%"}
            fontSize={["xs", "xs", "sm", "sm"]}
          >
            <Text align={"left"}>
              Email Address <span style={{ color: "red" }}>*</span>
            </Text>
            <Flex gap={"14px"} direction={isSmallerThan ? "row" : "column"}>
              <Input
                type="text"
                h={"2.5rem"}
                w={isSmallerThan ? "75%" : "100%"}
              />
              <Button bg={"#4b5666"} color={"white"} p={"5"}>
                Submit
              </Button>
            </Flex>
          </Box>
        </Flex>
        <Box>
          <Text textAlign={"left"} my={"5"} fontSize={["xs", "xs", "sm", "sm"]}>
            By signing up, you will receive Anthropologie offers, promotions and
            other commercial messages. You are also agreeing to Anthropologie’s
            Privacy Policy. You may unsubscribe at any time.
          </Text>
        </Box>
      </Box>
      <Divider p={"5"} />

      {isSmallerThan ? (
        <Flex textAlign={"left"} justifyContent={"space-between"}>
          <Box>
            <Text fontSize={"md"} fontWeight={"semibold"}>
              Help
            </Text>
            <List spacing={2} mt={"2"}>
              <ListItem><Link href="https://www.anthropologie.com/#order-inquiry">Track Your Order</Link></ListItem>
              <ListItem><Link href="https://www.anthropologie.com/#order-inquiry" >Start A Return Or Exchange (US)</Link ></ListItem>
              <ListItem><Link href="https://www.anthropologie.com/help/returns-exchanges" >Returns & Exchanges</Link></ListItem>
              <ListItem><Link href="https://www.anthropologie.com/help/shipping-info" >Shipping</Link></ListItem>
              <ListItem><Link href="https://www.anthropologie.com/help/customer-service" >Customer Service</Link></ListItem>
              <ListItem><Link href="https://www.anthropologie.com/help/current-promotions" >Current Promotions</Link></ListItem>
              <ListItem><Link href="https://www.anthropologie.com/help/recall" >Product Recalls</Link></ListItem>
            </List>
          </Box>
          <Box>
            <Text fontSize={"md"} fontWeight={"semibold"}>
            About US
            </Text>
            <List spacing={2} mt={"2"}>
              <ListItem><Link href="https://www.anthropologie.com/help/our-story">Our Story</Link></ListItem>
              <ListItem><Link href="https://anthropologieevents.splashthat.com/">Events</Link></ListItem>
              <ListItem><Link href="https://www.anthropologie.com/help/stories-community-greater-good">A Greater Good</Link></ListItem>
              <ListItem><Link href="https://www.anthropologie.com/help/diversity-and-inclusion">Diversity & Inclusion</Link></ListItem>
              <ListItem><Link href="https://www.anthropologie.com/stories">Stories</Link></ListItem>
              <ListItem><Link href="https://www.anthropologie.com/help/klarna" >Klarna</Link></ListItem>
            </List>
          </Box>
          <Box>
            <Text fontSize={"md"} fontWeight={"semibold"}>
            Services
            </Text>
            <List spacing={2} mt={"2"}>
              <ListItem><Link href="https://www.anthropologie.com/help/anthro-loyalty" >AnthroPerks</Link></ListItem>
              <ListItem><Link href="https://www.anthropologie.com/help/gift-card" >Gift Cards</Link></ListItem>
              <ListItem><Link href="https://www.anthropologie.com/help/design-trade-program" >AnthroLiving Designer & Trade Program</Link></ListItem>
              <ListItem><Link href="https://www.anthropologie.com/help/furniture-guide" >Furniture: Guides & Services</Link></ListItem>
              <ListItem><Link href="https://www.anthropologie.com/help/curbside-pick-up" >Store Pickup & Collection Points</Link></ListItem>
              <ListItem></ListItem>
            </List>
          </Box>
          <Box>
            <Text fontSize={"md"} fontWeight={"semibold"}>
            Connect
            </Text>
            <List spacing={2} mt={"2"}>
              <ListItem><Link href="https://www.anthropologie.com/help/contact-us" >Contact Us</Link></ListItem>
              <ListItem><Link href="https://www.anthropologie.com/help/connect-with-us" >Stay Connected</Link></ListItem>
              <ListItem><Link href="https://www.urbn.com/work-with-us" >Careers</Link></ListItem>
              <ListItem><Link href="https://www.anthropologie.com/help/personal-styling" >Styling Services</Link></ListItem>
              <ListItem><Link href="https://www.anthropologie.com/help/request-catalog" >Request A Catalog</Link></ListItem>
            </List>
          </Box>
          <Box color={"#3289a4"} lineHeight={"7"} mx={"2"}>
            <Flex alignItems={"center"} gap={"7px"}>
              <Icon as={CiLocationOn} />
              <Text>Store Locator</Text>
            </Flex>
            <Flex alignItems={"center"} gap={"7px"}>
              <Icon as={EmailIcon} />
              <Text>Get Email</Text>
            </Flex>
          </Box>
        </Flex>
      ) : (
        <Box>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h1>
                <AccordionButton>
                  <Box m={"auto"}>
                    <Flex alignItems={"center"} gap={"7px"} color={"#3289a4"}>
                      <Icon as={CiLocationOn} />
                    <Link href="https://www.anthropologie.com/stores">Store Locator</Link>
                    </Flex>
                  </Box>
                </AccordionButton>
              </h1>
            </AccordionItem>
            <AccordionItem>
              <h1>
                <AccordionButton>
                  <Box m={"auto"}>
                    <Flex alignItems={"center"} gap={"7px"} color={"#3289a4"}>
                      <Icon as={EmailIcon} />
                     <Link href="https://www.anthropologie.com/#email-sign-up">Email</Link> 
                    </Flex>
                  </Box>
                </AccordionButton>
              </h1>
            </AccordionItem>
            <AccordionItem>
              <h1>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Help
                  </Box>
                  <AddIcon />
                </AccordionButton>
              </h1>
              <AccordionPanel pb={4}>
                <List spacing={5} mt={"2"} textAlign={"left"}>
                  <ListItem>Track Your Order</ListItem>
                  <ListItem>Return & Exchanges</ListItem>
                  <ListItem>Shipping</ListItem>
                  <ListItem>Customer Service</ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h1>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                  About Us
                  </Box>
                  <AddIcon />
                </AccordionButton>
              </h1>
              <AccordionPanel pb={4}>
                <List spacing={2} mt={"2"} textAlign={"left"}>
                  <ListItem>Track Your Order</ListItem>
                  <ListItem>Return & Exchanges</ListItem>
                  <ListItem>Shipping</ListItem>
                  <ListItem>Customer Service</ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h1>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                  Services
                  </Box>
                  <AddIcon />
                </AccordionButton>
              </h1>
              <AccordionPanel pb={4}>
                <List spacing={2} mt={"2"} textAlign={"left"}>
                  <ListItem>Track Your Order</ListItem>
                  <ListItem>Return & Exchanges</ListItem>
                  <ListItem>Shipping</ListItem>
                  <ListItem>Customer Service</ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h1>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                  Connect
                  </Box>
                  <AddIcon />
                </AccordionButton>
              </h1>
              <AccordionPanel pb={4}>
                <List spacing={2} mt={"2"} textAlign={"left"}>
                  <ListItem>Track Your Order</ListItem>
                  <ListItem>Return & Exchanges</ListItem>
                  <ListItem>Shipping</ListItem>
                  <ListItem>Customer Service</ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      )}

      <Flex justifyContent={"center"} my={"10"}>
        <Flex alignItems={"center"} gap={"15px"}>
          <Image
            src={
              "https://images.ctfassets.net/5de70he6op10/4gWq1G4qLLgmqlNeHfzV2T/55298745127c36c5876f4013434c0c37/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917_Copy_2.svg"
            }
            alt={"apple store"}
          />
          <Icon color={"#3289a4"} fontSize={"xl"} as={FaFacebookF} />
          <Icon color={"#3289a4"} fontSize={"xl"} as={AiFillTwitterCircle} />
          <Icon color={"#3289a4"} fontSize={"xl"} as={FaInstagramSquare} />
          {/* <Icon color={"#3289a4"} fontSize={"xl"} as={BsInstagram} /> */}
        </Flex>
      </Flex>

      <Image
        my={"5"}
        src={
          "https://images.ctfassets.net/5de70he6op10/2DRgCRXNIEkk0wIqUo2ywa/20ea44a95fb361eaf034b42eec179d44/_site_footer__download_app_enable_push_.jpg"
        }
        alt={"banner"}
      />
      <Flex justifyContent={"center"} gap="10px">
        <Text borderRight={"2px solid grey"} pr={"7px"}>
          France
        </Text>
        <Text borderRight={"2px solid grey"} pr={"7px"}>
          US
        </Text>
        <Text borderRight={"2px solid grey"} pr={"7px"}>
          UK
        </Text>
        <Text borderRight={"2px solid grey"} pr={"7px"}>
          GERMANY
        </Text>
        <Text borderRight={"none"}>France</Text>
      </Flex>
    </Box>
  );
};

export default Footer;

import React from "react";
import "./Biodata.scss";
import photo from "../asset/biodataPhoto.jpg";
import { Flex, Button, ButtonGroup, Image } from "@chakra-ui/react";

const ProgressBar = ({ value, name }) => {
  return (
    <Flex className="bar" w="100%">
      <Flex className="load-bar" w={value} justifyContent="space-between">
        <span>{name}</span>
        <span>{value}</span>
      </Flex>
    </Flex>
  );
};

const Biodata = (props) => {
  return (
    <div id={props.id} className="biodata">
      <div className="photo">
        <Image src={photo} alt="About me" height="100%" width="auto" />
      </div>
      <div className="text">
        <h1>
          <b>About Me</b>
        </h1>
        <h2>
          UNDERGRADUATE STUDENT OF <b>AEROSPACE ENGINEERING</b>
        </h2>
        <p>
          I am <b>Octavianus Bagaswara Adi</b>. Lorem Ipsum is simply dummy text
          of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book.
        </p>
        <div className="skill-bar">
          <ProgressBar name="SOLIDWORKS" value="80%" />
          <ProgressBar name="XFLR5" value="93%" />
          <ProgressBar name="Microsoft Office" value="97%" />
        </div>
        <ButtonGroup className="button-group" spacing="6" size="lg">
          <Button
            borderColor="black"
            bgColor="#0a0708"
            color="#b1b1b1"
            variant="outline"
            fontFamily="Merriweather Sans"
            fontSize="1rem"
            _hover={{
              borderColor: "#0a0708",
              color: "black",
              bgColor: "#b1b1b1",
            }}
          >
            Download CV
          </Button>
          <Button
            borderColor="#0a0708"
            color="#0a0708"
            variant="outline"
            fontFamily="Merriweather Sans"
            fontSize="1rem"
            _hover={{
              bgColor: "#0a0708",
              color: "#b1b1b1",
            }}
          >
            Contact Me
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Biodata;

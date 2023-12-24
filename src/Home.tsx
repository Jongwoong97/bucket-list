import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Image

interface ImageProps {
  backgroundImage?: string;
}

const Image = styled.div<ImageProps>`
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  border-radius: 8px;
  opacity: 0.3;
  background-image: url(${(props) => props.backgroundImage});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;
  position: absolute;
`;

const IconContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Icon = styled(motion.img)`
  height: 70px;
  width: 70px;
  margin-right: 20px;
`;

// Text
interface TextProps {
  color?: string;
  fontSize?: string;
  italic?: boolean;
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const TextWrapper = styled.div`
  height: 100vh;
  z-index: 1;
  position: absolute;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 50vh;
  width: 100vw;
`;
const LinkCustom = styled(Link)``;

const Text = styled.div<TextProps>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-family: SOYOMapleBoldTTF;
  font-weight: 800;
  font-style: ${(props) => (props.italic ? "italic" : "normal")};
  line-height: 83px;
  z-index: 1;

  a {
    text-decoration: none;
    &:visited {
      color: ${(props) => props.color};
    }
    &:link {
      color: ${(props) => props.color};
    }
  }
  ${LinkCustom} {
    &:hover {
      color: turquoise;
    }
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <Image backgroundImage={"home.jpg"}></Image>
      <TextWrapper>
        <TextContainer>
          <Text color="#c17e01" fontSize="92px" italic={false}>
            <Link to="/">OUR BUCKET LIST</Link>
          </Text>
        </TextContainer>
        <TextContainer>
          <IconContainer
            transition={{ ease: "easeOut", duration: 2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Icon
              src="shared-icon.png"
              animate={{ y: [0, -10] }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                time: [0, 1],
                repeat: Infinity,
                type: "spring",
                repeatType: "reverse",
              }}
            />
            <Text color="black" fontSize="64px">
              <LinkCustom to="/shared">Shared Bucket List</LinkCustom>
            </Text>
          </IconContainer>
          <IconContainer
            transition={{ ease: "easeOut", duration: 2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Icon
              src="personal-icon.png"
              animate={{ y: [0, -10] }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                time: [0, 1],
                repeat: Infinity,
                type: "spring",
                repeatType: "reverse",
              }}
            />
            <Text color="black" fontSize="64px">
              <LinkCustom to="/personal">Personal Bucket List</LinkCustom>
            </Text>
          </IconContainer>
        </TextContainer>
      </TextWrapper>
    </Wrapper>
  );
};

export default Home;

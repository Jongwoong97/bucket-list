import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const TitleAndHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100vw;
  height: 30vh;
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: start;
  height: 30vh;
  position: relative;
`;

const Title = styled.div`
  color: #b3a053;
  font-size: 92px;
  font-family: SOYOMapleBoldTTF;
  font-weight: 900;
  font-style: normal;
  line-height: 119px;
  z-index: 1;
  margin: 0 0 5vh 5vw;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 10vh 12vw 0 0;
`;

const Icon = styled(motion.img)`
  height: 70px;
  width: 70px;
  margin-left: 10px;
`;

const SubtitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
`;

const Subtitle = styled.div`
  color: black;
  font-size: 52px;
  font-family: SOYOMapleBoldTTF;
  font-weight: 600;
  font-style: normal;
  line-height: px;
  z-index: 1;
  margin: 0px 75px;
`;

const IconComponent = () => (
  <svg
    style={{
      color: "#030303",
      fill: "#030303",
      fontSize: "52px",
      width: "52px",
      height: "52px",
    }}
    viewBox="0 0 512 512"
  >
    <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"></path>
  </svg>
);

const SliderContainer = styled.div`
  width: 100vw;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SliderGaugeBack = styled.div`
  position: relative;
  height: 8px;
  width: 90vw;
  background-color: #f2f2f2;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0;
`;

const SliderGauge = styled(motion.div)`
  position: absolute;

  width: 0px;
  height: 8px;
  background-color: rgba(90, 200, 250, 1);
  border-radius: 20px;
  z-index: 10;
  opacity: 1;
`;

const DetailContainer = styled.div`
  margin: 2vh 0;
  height: 46vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  position: relative;

  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CheckboxAndBucket = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100vw;
  margin: 10px 5%;
`;

const Checkbox = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  pointer-events: auto;
  color: rgba(3, 3, 3, 1);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(3, 3, 3, 0.1);
  border: 4px solid rgba(3, 3, 3, 1);
  margin-right: 15px;
  font-weight: 800;
`;

interface BucketProps {
  isChecked?: boolean | string;
}
const Bucket = styled.span<BucketProps>`
  font-size: 20px;
  font-family: SOYOMapleBoldTTF;
  font-weight: 800;
  font-style: normal;
  text-decoration: ${(props) => (props.isChecked ? "line-through" : "none")};
`;

const Ground = styled.div`
  height: 10vh;
  width: 100vw;
  background-color: #9c6500;
`;

const SharedBucket = () => {
  // const bucketList = [
  //   ["세계일주!!!", false],
  //   ["무나물 밥...", false],
  //   ["결혼", false],
  //   ["세계일주!!!", true],
  //   ["무나물 밥...", false],
  //   ["결혼", true],
  //   ["세계일주!!!", false],
  //   ["무나물 밥...", true],
  //   ["결혼", false],
  //   ["세계일주!!!", false],
  //   ["무나물 밥...", false],
  //   ["결혼", false],
  // ];
  const bucketList = [
    ["2024♥", false],
    ["허브농장 가기", false],
    ["바닷가 풍경 예쁜 곳 함께 놀러가기", false],
    ["훠궈 먹기", false],
    ["마라탕 먹기", true],
    ["마라샹궈 먹기", false],

    ["Logical Thinking 문제 같이 풀기", false],
    ["서로 요리해주기", false],
    ["같이 열심히 운동해서 멋진 남녀 되기 (지연: 난 멋진 누나가 될래)", false],
    ["음식 세계일주 하기", false],
    ["독일 음식 먹기 - 후보지: 악소", false],
    ["중동 음식 먹기 - 후보지: 클레오", false],
    ["일본에서 야끼소바 빵 먹기", false],
  ];

  const pushIsChecked = () => {
    const newArray = [];
    for (let i = 0; i < bucketList.length; i++) {
      newArray.push(bucketList[i][1]);
    }
    return newArray;
  };

  const [isCheckedArray, setCheckedArray] = React.useState(pushIsChecked());

  const ChangeCheckedArray = (idx: any) => {
    setCheckedArray([
      ...isCheckedArray.slice(0, idx),
      !isCheckedArray[idx],
      ...isCheckedArray.slice(idx + 1, isCheckedArray.length),
    ]);
  };

  return (
    <Wrapper>
      <TitleAndHome>
        <TitleContainer>
          <Title>OUR BUCKET LIST</Title>
        </TitleContainer>
        <IconContainer>
          <Link to="/">
            <Icon
              src="home-icon.png"
              whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
            />
          </Link>
          <Link to="/shared">
            <Icon
              src="shared-icon.png"
              whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
            />
          </Link>
          <Link to="/personal">
            <Icon
              src="personal-icon.png"
              whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
            />
          </Link>
        </IconContainer>
      </TitleAndHome>
      <SubtitleContainer>
        <Subtitle>Jieyeon</Subtitle>
        <IconComponent />
        <Subtitle>Jongwoong</Subtitle>
      </SubtitleContainer>
      <SliderContainer>
        <SliderGaugeBack>
          <SliderGauge
            initial="initial"
            animate="animate"
            variants={{
              initial: { width: 0 },
              animate: {
                width: `${(
                  (isCheckedArray.filter(Boolean).length / bucketList.length) *
                  100
                ).toFixed(2)}%`,
              },
            }}
            transition={{ duration: 0.5 }}
          />
        </SliderGaugeBack>
      </SliderContainer>
      <DetailContainer>
        {bucketList.map((element, idx) => {
          return (
            <CheckboxAndBucket>
              <Checkbox onClick={() => ChangeCheckedArray(idx)}>
                {isCheckedArray[idx] ? "✓" : ""}
              </Checkbox>
              <Bucket isChecked={isCheckedArray[idx]}>{element[0]}</Bucket>
            </CheckboxAndBucket>
          );
        })}
      </DetailContainer>
      <Ground />
    </Wrapper>
  );
};

export default SharedBucket;

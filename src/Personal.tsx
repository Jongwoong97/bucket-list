import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
  justify-content: space-around;
  height: 10vh;
`;

const Subtitle = styled.div`
  color: black;
  font-size: 52px;
  font-family: SOYOMapleBoldTTF;
  font-weight: 600;
  font-style: normal;
  z-index: 1;
  width: 25vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 70px;
  width: 70px;
  margin-left: 20px;
`;

interface SliderGaugeProps {
  color: string;
}

const SliderContainer = styled.div`
  width: 100vw;
  height: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const SliderGaugeBack = styled.div`
  position: relative;
  height: 8px;
  width: 25vw;
  background-color: #f2f2f2;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0;
`;

const SliderGauge = styled(motion.div)<SliderGaugeProps>`
  position: absolute;

  width: "0px";
  height: 8px;
  background-color: ${(props) => props.color};
  border-radius: 20px;
  z-index: 10;
  opacity: 1;
`;

const DetailContainer = styled.div`
  margin: 2vh 0;
  height: 46vh;
  width: 100vw;

  display: flex;
  align-items: center;
`;

const CheckboxAndBucketContainer = styled.div`
  width: 50vw;
  height: 46vh;
  margin: 0 5%;

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
  width: 50vw;
  margin: 10px 0%;
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

const PersonalBucket = () => {
  const bucketList1 = [
    ["세계일주!!!", false],
    ["무나물 밥...", false],
    ["결혼", false],
    ["세계일주!!!", true],
    ["무나물 밥...", false],
    ["결혼", true],
    ["세계일주!!!", false],
    ["무나물 밥...", true],
    ["결혼", false],
    ["세계일주!!!", false],
    ["무나물 밥...", false],
    ["결혼", false],
  ];

  const pushIsChecked = (bucketList: Array<Array<string | boolean>>) => {
    const newArray = [];
    for (let i = 0; i < bucketList.length; i++) {
      newArray.push(bucketList[i][1]);
    }
    return newArray;
  };

  const [isCheckedArray1, setCheckedArray1] = React.useState(
    pushIsChecked(bucketList1)
  );

  const ChangeCheckedArray1 = (idx: any) => {
    setCheckedArray1([
      ...isCheckedArray1.slice(0, idx),
      !isCheckedArray1[idx],
      ...isCheckedArray1.slice(idx + 1, isCheckedArray1.length),
    ]);
  };

  const bucketList2 = [
    ["잠", true],
    ["세계일주!!!", false],
    ["무나물 밥...", false],
    ["결혼", false],
    ["세계일주!!!", true],
    ["무나물 밥...", false],
    ["결혼", true],
    ["세계일주!!!", false],
    ["무나물 밥...", true],
    ["결혼", false],
    ["세계일주!!!", false],
    ["무나물 밥...", false],
    ["결혼", false],
  ];

  const [isCheckedArray2, setCheckedArray2] = React.useState(
    pushIsChecked(bucketList2)
  );

  const ChangeCheckedArray2 = (idx: any) => {
    setCheckedArray2([
      ...isCheckedArray2.slice(0, idx),
      !isCheckedArray2[idx],
      ...isCheckedArray2.slice(idx + 1, isCheckedArray2.length),
    ]);
  };

  return (
    <Wrapper>
      <TitleAndHome>
        <TitleContainer>
          <Title>OUR BUCKET LIST</Title>
        </TitleContainer>
        <IconContainer>
          <Link to={`${process.env.PUBLIC_URL}/`}>
            <Icon
              src="home-icon.png"
              whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
            />
          </Link>
          <Link to={`${process.env.PUBLIC_URL}/shared`}>
            <Icon
              src="shared-icon.png"
              whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
            />
          </Link>
          <Link to={`${process.env.PUBLIC_URL}/personal`}>
            <Icon
              src="personal-icon.png"
              whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
            />
          </Link>
        </IconContainer>
      </TitleAndHome>

      <SubtitleContainer>
        <Subtitle>
          Jieyeon <Image src="tomato.jpeg" />
        </Subtitle>
        <Subtitle>
          Jongwoong <Image src="broccoli.jpeg" />
        </Subtitle>
      </SubtitleContainer>
      <SliderContainer>
        <SliderGaugeBack>
          <SliderGauge
            color="rgba(255, 59, 48, 1)"
            initial="initial"
            animate="animate"
            variants={{
              initial: { width: 0 },
              animate: {
                width: `${(
                  (isCheckedArray1.filter(Boolean).length /
                    bucketList1.length) *
                  100
                ).toFixed(2)}%`,
              },
            }}
            transition={{ duration: 0.5 }}
          />
        </SliderGaugeBack>
        <SliderGaugeBack>
          <SliderGauge
            color="rgba(76, 217, 100, 1)"
            initial="initial"
            animate="animate"
            variants={{
              initial: { width: 0 },
              animate: {
                width: `${(
                  (isCheckedArray2.filter(Boolean).length /
                    bucketList2.length) *
                  100
                ).toFixed(2)}%`,
              },
            }}
            transition={{ duration: 0.5 }}
          />
        </SliderGaugeBack>
      </SliderContainer>
      <DetailContainer>
        <CheckboxAndBucketContainer>
          {bucketList1.map((element, idx) => {
            return (
              <CheckboxAndBucket>
                <Checkbox onClick={() => ChangeCheckedArray1(idx)}>
                  {isCheckedArray1[idx] ? "✓" : ""}
                </Checkbox>
                <Bucket isChecked={isCheckedArray1[idx]}>{element[0]}</Bucket>
              </CheckboxAndBucket>
            );
          })}
        </CheckboxAndBucketContainer>
        <CheckboxAndBucketContainer>
          {bucketList2.map((element, idx) => {
            return (
              <CheckboxAndBucket>
                <Checkbox onClick={() => ChangeCheckedArray2(idx)}>
                  {isCheckedArray2[idx] ? "✓" : ""}
                </Checkbox>
                <Bucket isChecked={isCheckedArray2[idx]}>{element[0]}</Bucket>
              </CheckboxAndBucket>
            );
          })}
        </CheckboxAndBucketContainer>
      </DetailContainer>
      <Ground />
    </Wrapper>
  );
};

export default PersonalBucket;

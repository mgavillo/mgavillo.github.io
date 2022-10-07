import React, { FunctionComponent, useEffect, useState, useRef } from "react";
import { Arrow } from "../../Components/Arrow";
import "./Whoami.scss";

interface SkillProps {
  text: string;
  percent: number;
}
const Skill = ({ text, percent }: SkillProps) => {
  const bar = React.createRef<HTMLDivElement>();

  useEffect(() => {
    if (!bar.current) return;
    bar.current.style.width = `calc( ${percent}% + 10px`;
  }, []);
  return (
    <div className="skill">
      <div>{text}</div>
      <div className="bar-container">
        <div ref={bar} className="bar" />
      </div>
    </div>
  );
};

interface CategorieProps {
  text: string;
  index: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  selected: boolean;
}
const Categorie = ({ text, index, setSelected, selected }: CategorieProps) => {
  return (
    <div
      className={selected ? "cat selected" : "cat"}
      onClick={() => setSelected(index)}
    >
      <div>
        <h3>{text}</h3>
      </div>
    </div>
  );
};

const skills = [
  [
    { text: "html/css/javascript", percent: 90 },
    { text: "Typescript", percent: 60 },
    { text: "React", percent: 80 },
    { text: "Three js ", percent: 70 },
  ],
  [],
  [],
];

export const Whoami: FunctionComponent = () => {
  const [selected, setSelected] = useState<number>(0);

  const decreaseSelected = () => {
    selected !== 0 ? setSelected(selected - 1) : setSelected(2)
  }

  const increaseSelected = () => {
    selected !== 2 ? setSelected(selected + 1) : setSelected(0)
  }
  return (
    <div id="whoami-wrapper" className="home-wrapper">
      <h2>My name is Marie</h2>
      <div id="split">
        <div id="character-container">
          <div id="character-wrapper">
            <Arrow side="left" size={30} clickAction={decreaseSelected}/>
            <div id="character"></div>
            <Arrow side="right" size={30} clickAction={increaseSelected}/>
          </div>
          {selected === 0 && <h3>Creative developer</h3>}
          {selected === 1 && <h3>Graphic designer</h3>}
          {selected === 2 && <h3>3D artist</h3>}
        </div>
        <div id="infos-container">
          <div id="categories">
            <Categorie
              text="code"
              index={0}
              setSelected={setSelected}
              selected={selected === 0}
            />
            <Categorie
              text="2D"
              index={1}
              setSelected={setSelected}
              selected={selected === 1}
            />
            <Categorie
              text="3D"
              index={2}
              setSelected={setSelected}
              selected={selected === 2}
            />
          </div>
          {skills[selected].map((element) => {
            return <Skill text={element.text} percent={element.percent} />;
          })}
        </div>
      </div>
    </div>
  );
};

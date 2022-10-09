import React, {
  createRef,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import { ActionButton } from "../../Components/ActionButton";
import { Arrow } from "../../Components/Arrow";
import "./GalleryPreview.scss";

const randomIntFromInterval = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

var currTransl: Array<any> = [];
var carouselWidth: number = 0;
var currentTransl: number = 0;
export const GalleryPreview: FunctionComponent = () => {
  const focused = 4;
  const carousel = createRef<HTMLDivElement>();
  const carouselContainer = createRef<HTMLDivElement>();
  const [translated, setTranslated] = useState<number>(0);
  const [imageArray, setImageArray] = useState([
    { index: 0, width: randomIntFromInterval(100, 600) },
    { index: 1, width: randomIntFromInterval(100, 600) },
    { index: 2, width: randomIntFromInterval(100, 600) },
    { index: 3, width: randomIntFromInterval(100, 600) },
    { index: 4, width: randomIntFromInterval(100, 600) },
    { index: 5, width: randomIntFromInterval(100, 600) },
    { index: 6, width: randomIntFromInterval(100, 600) },
    { index: 7, width: randomIntFromInterval(100, 600) },
    { index: 8, width: randomIntFromInterval(100, 600) },
    { index: 9, width: randomIntFromInterval(100, 600) },
    { index: 10, width: randomIntFromInterval(100, 600) },
  ]);
  const [translating, setTranslating] = useState<boolean>(false);

  useEffect(() => {
    if (!carousel.current || !carouselContainer.current) return;
    const left = carouselContainer.current.getBoundingClientRect().left;
    const offset =
      carousel.current.children[focused].getBoundingClientRect().left - left;
    carouselWidth = carouselContainer.current.clientWidth;

    let desiredOffset =
      carouselWidth / 2 - carousel.current.children[focused].clientWidth / 2;
    let calc = desiredOffset - offset;
    carousel.current.style.transform = `translateX(${calc}px)`;
    setTranslated(calc);
  }, []);

  const moveArrayRight = () => {
    let array = [...imageArray];
    array.push(array[0]);
    array.splice(0, 1);
    setImageArray(array);
  };

  const moveArrayLeft = () => {
    let array = [...imageArray];
    let end = array.length - 1;
    array.unshift(array[end]);
    array.splice(end + 1, 1);
    setImageArray(array);
  };

  const blockAnims = () => {
    setTranslating(true);
    setTimeout(() => {
      setTranslating(false);
    }, 1000);
  }
  const slideRight = () => {
    if (!carousel.current || !carouselContainer.current || translating) return;
    let carouselStyle = carousel.current.style;

    carousel.current.classList.remove("animate");
    //change array but dont move
    let moveOffset = carousel.current.children[0].clientWidth + 20;
    moveArrayRight();
    let translate = moveOffset + translated;
    carouselStyle.transform = `translateX(${translate}px)`;

    //move to new place
    let focus = carousel.current.children[focused + 1];
    let prev = carousel.current.children[focused];
    let offset = prev.clientWidth / 2 + 20 + focus.clientWidth / 2;
    carousel.current.classList.add("animate");
    carouselStyle.transform = `translateX(${translate - offset}px)`;
    setTranslated(translate - offset);
    blockAnims()
  };

  const slideLeft = () => {
    if (!carousel.current || !carouselContainer.current || translating) return;
    let carouselStyle = carousel.current.style;

    carousel.current.classList.remove("animate");
    //change array but dont move
    let l = imageArray.length - 1;
    let moveOffset = carousel.current.children[l].clientWidth + 20;
    moveArrayLeft();
    let translate = translated - moveOffset;
    carouselStyle.transform = `translateX(${translate}px)`;

    //move to new place
    let focus = carousel.current.children[focused - 1];
    let prev = carousel.current.children[focused];
    let offset = (prev.clientWidth / 2) + 20 + (focus.clientWidth / 2);
    carousel.current.classList.add("animate");
    carouselStyle.transform = `translateX(${translate + offset}px)`;
    blockAnims()
  };

  return (
    <div id="galleryPreview-wrapper" className="home-wrapper">
      <h2>I love creating new stuff</h2>
      <div id="galleryPreview-container">
        <Arrow side="left" size={50} clickAction={slideLeft} />
        <div ref={carouselContainer}>
          <div ref={carousel} id="carousel">
            {imageArray.map((element) => {
              return (
                <div
                  className="image"
                  key={element.index}
                  style={{ width: element.width }}
                >
                  {element.index}
                </div>
              );
            })}
          </div>
        </div>

        <Arrow side="right" size={50} clickAction={slideRight} />
      </div>
      <div id="button-container">
        <ActionButton text="browse more" />
      </div>
    </div>
  );
};

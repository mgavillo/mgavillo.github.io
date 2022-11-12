import React, {
  createRef,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from "react";
import { ActionButton } from "../../Components/ActionButton";
import { Arrow } from "../../Components/Arrow";
import "./GalleryPreview.scss";
import images from "../../Gallery/files.json";
import { Link } from "react-router-dom";

var carouselWidth: number = 0;
export const GalleryPreview: FunctionComponent = () => {
  const focused = 3;
  const carousel = useRef<HTMLDivElement | null>(null);
  const carouselContainer = useRef<HTMLDivElement | null>(null);
  const [translated, setTranslated] = useState<number>(0);
  const [imageArray, setImageArray] = useState<Array<string>>(images);
  const [translating, setTranslating] = useState<boolean>(false);

  const offsetFirst = () => {
    if (!carousel.current || !carouselContainer.current) return;
    carousel.current.style.transform = `translateX(0px)`;

    const children = carousel.current.children[focused] as HTMLImageElement;
    const left = carouselContainer.current.getBoundingClientRect().left;
    const offset = children.getBoundingClientRect().left - left;

    carouselWidth = carouselContainer.current.clientWidth;

    let desiredOffset = carouselWidth / 2 - children.clientWidth / 2;
    let calc = desiredOffset - offset;
    carousel.current.style.transform = `translateX(${calc}px)`;
    setTranslated(calc);
  };

  useEffect(() => {
    window.addEventListener("load", (e) => offsetFirst());
    window.addEventListener("resize", (e) => offsetFirst());

    // window.onload((e) => offsetFirst(imageArray.length -1))
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
  };
  const slideRight = () => {
    if (!carousel.current || translating) return;
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
    blockAnims();
  };

  const slideLeft = () => {
    if (!carousel.current || translating) return;
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
    let offset = prev.clientWidth / 2 + 20 + focus.clientWidth / 2;
    carousel.current.classList.add("animate");
    carouselStyle.transform = `translateX(${translate + offset}px)`;
    blockAnims();
  };

  const goToGallery = () => {};

  return (
    <div id="galleryPreview-wrapper" className="home-wrapper">
      <h2>I love creating delightful stuff</h2>
      <div id="galleryPreview-container">
        <Arrow side="left" size={50} clickAction={slideLeft} />
        <div ref={carouselContainer}>
          <div ref={carousel} id="carousel">
            {imageArray.map((image, index) => {
              return (
                <img
                  className="image"
                  alt=""
                  key={index}
                  src={"/images/" + image}
                />
              );
            })}
          </div>
        </div>

        <Arrow side="right" size={50} clickAction={slideRight} />
      </div>
      <div id="button-container">
        <Link to="/Gallery">
          <ActionButton text="browse more" action={goToGallery} />
        </Link>
      </div>
    </div>
  );
};

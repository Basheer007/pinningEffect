import { StickydivInterface } from "../Interfaces/StickydivInterface";
import { forwardRef } from "react";

const StickyDiv = forwardRef<HTMLDivElement, StickydivInterface>(
  (props, ref) => {
    const { image, desc } = props;
    return (
      <div
        ref={ref}
        className="h-[70vh] bg-white flex items-center rounded-lg sticky top-[0%]"
      >
        <div className="w-1/2  flex-1 px-2 font-medium">{desc}</div>
        <div className="w-1/2  flex-1 flex items-center  h-full px-2">
          <img
            src={image}
            alt="imageBackground"
            className="h-[70%] w-full object-cover rounded-lg"
          />
        </div>
      </div>
    );
  }
);

export default StickyDiv;

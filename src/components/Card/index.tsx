import React from "react";
import { ICard } from "../../interfaces/Card.interface";

export const Card: React.FC<ICard & { type?: "addNew" }> = ({
  images,
  title,
  type,
}) => {
  if (type && type === "addNew") {
    return (
      <div
        className="
        rounded-xl
          w-72
          m-auto"
      >
        <div
          className="
          flex
          rounded-xl
          items-center
          justify-center
          bg-blue-light
          bg-opacity-70
          w-72 h-48
        "
        >
          <i className="fas text-7xl text-blue fa-plus"></i>
        </div>
        <div>
          <h4 className="text-blue text-center mt-0.5 mb-3 text-lg font-semibold">
            {title}
          </h4>
        </div>
      </div>
    );
  }
  if (images.length === 1)
    return (
      <div
        className="
        rounded-xl
          w-72
          m-auto"
      >
        <div
          className="
          flex
        "
        >
          <img
            className=" object-cover rounded-xl border-2 w-72 h-48"
            src={images[0]}
            alt={`${title} images`}
          />
        </div>
        <div>
          <h4 className=" mt-0.5 mb-3 text-lg font-semibold">{title}</h4>
          <span className="font-normal text-sm">
            {images.length} propiedades guardadas
          </span>
        </div>
      </div>
    );
  if (images.length === 2)
    return (
      <div
        className="
        rounded-xl
          w-72
          m-auto"
      >
        <div
          className="
          flex
          relative
          h-48
        "
        >
          {images.map((image, index) => (
            <img
              key={image}
              className={`absolute rounded-xl border-2 top-0 z-${
                index === 0 ? "30" : "20"
              } left-${index === 0 ? "0" : "20"} object-cover w-${
                index === 0 ? "40" : "52"
              } h-48`}
              src={image}
              alt={title + " images"}
            />
          ))}
        </div>
        <div>
          <h4 className="mt-0.5 mb-3 text-lg font-semibold">{title}</h4>
          <span className="font-normal text-sm">
            {images.length} propiedades guardadas
          </span>
        </div>
      </div>
    );
  // 3 IMAGES
  return (
    <div
      className="
      rounded-xl
          w-72
          m-auto"
    >
      <div
        className="
          flex
          relative
          h-48
        "
      >
        {images.slice(0, 3).map((image, index) => (
          <img
            key={image}
            className={`absolute rounded-xl border-2 top-0 z-${
              index === 0 ? "30" : index === 1 ? "20" : "0"
            } left-${
              index === 0 ? "0" : index === 1 ? "28" : "44"
            } object-cover w-${
              index === 0 ? "40" : index === 1 ? "28" : "32"
            } h-48`}
            src={image}
            alt={title + " images"}
          />
        ))}
        {images.length > 3 && (
          <div className="bg-green-dark absolute z-10 top-0 rounded-xl left-44 w-32 h-48 bg-opacity-70"></div>
        )}
        <span className=" font-semibold text-white absolute z-20 left-60 top-1/2">
          {images.length - 3 !== 0 && "+ " + images.length}
        </span>
      </div>
      <div>
        <h4 className="mt-0.5 mb-3 text-lg font-semibold">{title}</h4>
        <span className="font-normal text-sm">
          {images.length} propiedades guardadas
        </span>
      </div>
    </div>
  );
};

import React from "react";

const Card = ({ data }) => {
  const {
    city,
    image,
    location,
    address,
    room,
    bath,
    bed,
    area,
    rent,
    popular,
    for_rent,
    for_sale,
  } = data;
  return (
    <div className="p-2 bg-white rounded-lg w-96 drop-shadow-md ">
      <div className="relative h-56">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full h-full rounded-lg"
        />
        <div className="absolute w-full top-4 ">
          <div className="relative flex items-center justify-between px-4">
            {for_rent ? (
              <div className="px-3 py-2 text-blue-700 bg-white rounded-full">
                For Rent
              </div>
            ) : (
              <div className="px-3 py-2 text-blue-700 bg-white rounded-full">
                For Sale{" "}
              </div>
            )}
            <div className="flex items-center justify-center p-1 bg-white rounded-full">
              <span className="text-blue-700 material-symbols-outlined">
                favorite
              </span>
            </div>
          </div>
        </div>

        {popular ? (
          <>
            <button className="absolute px-4 py-2 font-semibold text-white bg-blue-700 rounded -bottom-2 -left-2">
              Popular
            </button>
          </>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-center">
          <span className="font-normal text-yellow-300 material-symbols-outlined">
            location_on
          </span>
          <span className="text-sm font-normal text-slate-700">{location}</span>
        </div>
        <span className="text-lg font-semibold">{address}</span>
        <div className="flex items-center justify-evenly">
          <div>
            <span className="material-symbols-outlined text-slate-500 ">
              location_city
            </span>
            <div className="font-medium text-slate-500">{`${room} Room`}</div>
          </div>
          <div>
            <span className="material-symbols-outlined text-slate-500 ">
              bed
            </span>
            <div className="font-medium text-slate-500">{`${bed} Bed`}</div>
          </div>
          <div>
            <span className="material-symbols-outlined text-slate-500">
              bathtub
            </span>
            <div className="font-medium text-slate-500">{`${bath} Bath`}</div>
          </div>
          <div>
            <span className="material-symbols-outlined text-slate-500">
              grid_4x4
            </span>
            <div className="font-medium text-slate-500">{`${area} sft`}</div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex">
            <span className="text-lg font-bold text-blue-600">{`$ ${rent}`}</span>
            <span className="pt-1">/month</span>
          </div>
          <button className="px-4 py-2 font-semibold border border-blue-600 rounded-full">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

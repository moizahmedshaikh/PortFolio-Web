import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

type Props = {
  review: {
    name: string;
    review: string;
    rating: number;
    profession: string;
    image: string;
  };
};

const ReviewCard = ({ review }: Props) => {
  const { name, rating, profession, image, review: clientReview } = review;

  return (
    <div className="rounded-lg bg-[#140c1c] m-4">
      <div className="p-6">
        <Image src="/images/q.png" alt="image" height={50} width={50} />
        <p className="text-white text-opacity-70">{clientReview}</p>
        <Image
          src="/images/q.png"
          alt="image"
          height={50}
          width={50}
          className="ml-auto"
        />
        <div className="px-6 py-3 mb-3 mx-auto w-fit rounded-full flex items-center space-x-3 bg-indigo-900 text-white font-bold">
          <span>{rating}/5</span>
          <FaStar className="text-yellow-400" />
        </div>
        <div className="bg-gray-100 rounded-lg">
          <div className="p-6 flex items-end space-x-6">
            <Image
              src={image}
              alt="image"
              height={40}
              width={40}
              className="rounded-full"
            />
            <div className="flex flex-col">
                <h2 className="text-lg font-bold">{name}</h2>
                <p className="text-base text-gray-700">{profession}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

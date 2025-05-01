import { FaEye, FaStar, FaShareAlt, FaBookmark } from "react-icons/fa";

function CategoryNewsCard({ news }) {
  const { title, author, image_url, details, rating, total_view } = news;

  return (
    <div className="bg-base-100 shadow-md rounded-xl overflow-hidden border">
      {/* Author + Icons */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="text-sm font-semibold">{author.name}</h3>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500">
          <FaBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="font-bold text-lg px-4">{title}</h2>

      {/* Image */}
      <figure className="px-4 pt-4">
        <img
          src={image_url}
          alt="news"
          className="w-full rounded-lg object-cover h-48"
        />
      </figure>

      {/* Details */}
      <div className="p-4 space-y-2">
        <p className="text-sm text-gray-600">
          {details.length > 100 ? `${details.slice(0, 200)}...` : details}
        </p>
        <button className="text-red-500 font-semibold hover:underline">
          Read More
        </button>
      </div>

      {/* Stats (Rating + Views) */}
      <div className="flex justify-between items-center p-4 border-t text-sm">
        <div className="flex items-center gap-1 text-orange-500">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <span>{rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
}

export default CategoryNewsCard;

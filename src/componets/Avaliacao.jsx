import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";

function StarRating({ productId }) {
  const [ratings, setRatings] = useState([]);
  const [userRating, setUserRating] = useState(0);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const savedRatings =
      JSON.parse(localStorage.getItem(`product-ratings-${productId}`)) || [];
    setRatings(savedRatings);

    const userSavedRating = localStorage.getItem(`user-rating-${productId}`);
    if (userSavedRating) setUserRating(parseInt(userSavedRating));

    if (savedRatings.length > 0) {
      const total = savedRatings.reduce((sum, rating) => sum + rating, 0);
      setAverageRating(total / savedRatings.length);
    }
  }, [productId]);

  const handleRating = (newRating) => {
    if (userRating === newRating) return;

    const updatedRatings = [...ratings, newRating];
    setRatings(updatedRatings);
    setUserRating(newRating);

    localStorage.setItem(
      `product-ratings-${productId}`,
      JSON.stringify(updatedRatings)
    );
    localStorage.setItem(`user-rating-${productId}`, newRating);

    const total = updatedRatings.reduce((sum, rating) => sum + rating, 0);
    setAverageRating(total / updatedRatings.length);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg max-w-xs mx-auto">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">
        Avaliação do Produto
      </h3>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            size={28}
            className={`cursor-pointer transition-all duration-200 ${
              star <= userRating
                ? "text-yellow-400 scale-110"
                : "text-gray-300 hover:text-yellow-400 hover:scale-110"
            }`}
            onClick={() => handleRating(star)}
          />
        ))}
      </div>
      <p className="mt-2 text-sm text-gray-600">
        Média:{" "}
        <span className="font-semibold text-gray-800">
          {averageRating.toFixed(1)}
        </span>{" "}
        ({ratings.length} avaliações)
      </p>
    </div>
  );
}

StarRating.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default StarRating;

import { useState, useEffect } from "react";
import { rateRecipe } from "../../managers/RecipeManager";
import { useParams } from "react-router-dom";
import React from "react";
import Lottie from "react-lottie";
import animationData from "./staranimation.json";
import "./Modal.css";

const Modal = ({ isOpen, onClose }) => {
  const { id } = useParams();

  const [newScore, setNewScore] = useState({
    score: 0,
  });

  const [ratingSubmitted, setRatingSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setNewScore({ score: 0 });
      setRatingSubmitted(false);
    }
  }, [isOpen]);

  const closeModal = () => {
    onClose();
  };

  const handleRatingSubmit = (evt) => {
    evt.preventDefault();
    rateRecipe(id, newScore)
      .then(() => setRatingSubmitted(true)) // Set ratingSubmitted to true upon successful rating submission
      .catch((error) => console.error(error));
  };

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>
          X
        </button>
        {ratingSubmitted ? (
          <div>
            <Lottie options={defaultOptions} height={120} width={120} />
            <p>Rating submitted successfully!</p>
          </div>
        ) : (
          <form className="rating_form">
            <label>Score:</label>
            <input
              required
              autoFocus
              type="number"
              placeholder="Rate 1-5"
              value={newScore.score}
              onChange={(evt) => {
                const copy = { ...newScore };
                copy.score = parseInt(evt.target.value);
                setNewScore(copy);
              }}
            />
            <button onClick={handleRatingSubmit} className="btn btn-primary">
              Rate Recipe
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Modal;





// import { useNavigate, useParams } from "react-router-dom";






//   const [showModal, setShowModal] = useState(true); // Set showModal to true by default

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   function LottieAnimation() {
//     const options = {
//       loop: true,
//       autoplay: true,
//       animationData: animationData,
//     };

//     return <Lottie options={options} />;
//   }

//   return (
//     <>
//       <Modal show={showModal} onHide={closeModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Rating Form</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
        //   <form className="rating_form">
        //     <label>Score:</label>
        //     <input
        //       required
        //       autoFocus
        //       type="number"
        //       placeholder="Rate 1-5"
        //       value={newScore.score}
        //       onChange={(evt) => {
        //         const copy = { ...newScore };
        //         copy.score = parseInt(evt.target.value);
        //         setNewScore(copy);
        //       }}
        //     />
        //     <button
        //       onClick={(evt) => {
        //         evt.preventDefault();
        //         rateRecipe(id, newScore)
        //           .then(() => closeModal()) // Close the modal after rating submission
        //           .catch((error) => console.error(error));
        //       }}
        //       className="btn btn-primary"
        //     >
        //       Rate Recipe
        //     </button>
        //   </form>

//           <div>
//             {/* Other components */}
//             <LottieAnimation />
//             {/* Other components */}
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <button onClick={closeModal}>Close</button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };


 // I'd really like to make the rating form into a modal on the RecipeList.js
    // Or just an interactive star selection (radio button) with a modal that returns to the user a message saying the rating was successful

//   const handleScoreChange = (e) => {
//     setScore(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!score) {
//       console.error("Score is required");
//       return;
//     }

//     rateRecipe(id, score)
//       .then((data) => {
//         console.log("Recipe rated successfully", data);
//         window.location.href = "/recipes";
//       })
//       .catch((error) => {
//         console.error("Failed to rate the recipe.", error);
//       });
//   };
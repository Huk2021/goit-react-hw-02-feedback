import React from "react";
import { PropTypes } from "prop-types";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map((option) => (
    <button type="button" key={option} onClick={() => onLeaveFeedback(option)}>
      {option}
    </button>
  ));
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

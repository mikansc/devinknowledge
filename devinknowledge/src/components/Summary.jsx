import PropTypes from "prop-types";
import { SummaryCard } from "./SummaryCard";
export const Summary = ({}) => {
  return (
    <div className="summary-container">
      <SummaryCard title="back-end" count={18} />
      <SummaryCard title="front-end" count={129} />
    </div>
  );
};

Summary.propTypes = {};

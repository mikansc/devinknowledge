import PropTypes from "prop-types";
import { useAppContext } from "../context/app-context";
import { SummaryCard } from "./SummaryCard";
export const Summary = ({}) => {
  const { categories } = useAppContext();
  return (
    <div className="summary-container">
      {categories.map((category, idx) => (
        <SummaryCard key={idx} title={category.title} count={category.count} />
      ))}
    </div>
  );
};

Summary.propTypes = {};

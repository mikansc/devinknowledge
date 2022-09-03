import PropTypes from "prop-types";
export const CardList = ({ children }) => {
  return <div className="cardList">{children}</div>;
};

CardList.propTypes = {
  children: PropTypes.node,
};

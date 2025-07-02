
function Card({ children, className = "" }) {
  return (
    <div className={`bg-white dark:bg-gray-800 shadow-md p-4 rounded-lg ${className}`}>
      {children}
    </div>
  );
}

export default Card;

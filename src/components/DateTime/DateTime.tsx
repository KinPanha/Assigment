import "./DateTime.css";
const DateTime = () => {
  const showDate = new Date();
  const displayDate =
    showDate.getDate() +
    "/" +
    (showDate.getMonth() + 1) +
    "/" +
    showDate.getFullYear();
  const displayTime =
    showDate.getHours() +
    ":" +
    showDate.getMinutes() +
    ":" +
    showDate.getSeconds();
  return (
    <div className="div">
      <p className="date">Date : {displayDate}</p>
      <p className="date">Time : {displayTime}</p>
    </div>
  );
};

export default DateTime;

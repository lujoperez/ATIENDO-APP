const Status = ({ status }) => {
  const getColor = (status) => {
    let color = "bg-red-600";
    switch (status.toLowerCase()) {
      case "done":
        color = "bg-green-400";
        return color;
      case "started":
        color = "bg-blue-600";
        return color;
      case "not started":
        color = "bg-red-500";
        return color;
    }
    return color;
  };
  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-200 ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default Status;

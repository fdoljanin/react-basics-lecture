import Intern from "./Intern";

const InternList = ({ internList }) => {
  if (internList.length > 2) {
    return <h1>Popunjeno!</h1>;
  }

  return (
    <div>
      {internList.map((internElement, index) => (
        <Intern intern={internElement} index={index} key={internElement.id} />
      ))}
    </div>
  );
};

export default InternList;

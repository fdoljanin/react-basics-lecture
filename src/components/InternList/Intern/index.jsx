const Intern = ({ intern, index }) => {
  return (
    <div className="intern">
      <h2>
        {index} Ime: {intern.name}
      </h2>
      <p>Grad: {intern.city}</p>
    </div>
  );
};

export default Intern;

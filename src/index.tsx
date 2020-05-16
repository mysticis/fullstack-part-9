import React from "react";
import ReactDOM from "react-dom";

interface Courses {
  name: string;
  exerciseCount: number;
}
const App: React.FC = () => {
  const courseName = "Half Stack application development";
  const courseParts = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
    },
  ];

  return (
    <div>
      <Header header={courseName} />
      <Content parts={courseParts} />
      <Total parts={courseParts} />
    </div>
  );
};
const Header: React.FC<{ header: string }> = ({ header }) => <h2>{header}</h2>;
const Content: React.FC<{ parts: Courses[] }> = ({ parts }) => {
  return (
    <div>
      <p>
        {parts[0].name} {parts[0].exerciseCount}
      </p>
      <p>
        {parts[1].name} {parts[1].exerciseCount}
      </p>
      <p>
        {parts[2].name} {parts[2].exerciseCount}
      </p>
    </div>
  );
};
const Total: React.FC<{ parts: Courses[] }> = ({ parts }) => {
  return (
    <p>
      Number of exercises{" "}
      {parts.reduce((carry, part) => carry + part.exerciseCount, 0)}
    </p>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));

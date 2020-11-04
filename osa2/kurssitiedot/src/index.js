import React from 'react';
import ReactDOM from 'react-dom';

const Course = ({course}) => {
  //console.log(course)
  return (
    <div>
        <h1>{course.name}</h1>
        {course.parts.map((part) => 
          <p key={part.id}>
            {part.name}{' '}{part.exercises}
          </p>
        )}
        <p>
          <b>
            total of {course.parts.reduce((acc, curr) => 
            acc + curr.exercises, 0)} exercises
          </b>
        </p>
        
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
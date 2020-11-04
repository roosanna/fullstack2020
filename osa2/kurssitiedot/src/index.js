import React from 'react';
import ReactDOM from 'react-dom';

const Course = ({courses}) => {
  return (
    <div>
      {courses.map((course) =>
          <span key={course.id}>
            <h3>{course.name}</h3>
            <Exercises course={course}/>
            <Total course={course}/>
          </span>
        )}
    </div>
  )
}

const Exercises = ({course}) => {
  return (
    <div>
      {course.parts.map((part) => 
        <p key={part.id}>
          {part.name}{' '}{part.exercises}
        </p>
      )}
    </div>
  )
}

const Total = ({course}) => {
  return (
    <b>
    <p key={course.id}>
      total of {course.parts.reduce((acc, curr) => 
        acc + curr.exercises, 0)} exercises
    </p>
    </b>
  )
}


const Courses = ({courses}) => {
  //console.log(course)
  return (
    <div>
      <Course courses={courses}/>
    </div>
  )
}

const App = () => {
  const courses = [
    {
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h2>Web development curriculum</h2>
      <Courses courses={courses}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
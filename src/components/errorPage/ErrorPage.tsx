import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <>
      <h3> Page not found, please check the link again!</h3>
      <p>
        {' '}
        Click to go back
        <Link to="/">Home</Link>
      </p>
    </>
  )
}

export default ErrorPage

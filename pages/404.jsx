import Button from "../elements/Button";

export default function Custom404() {
	return (
    <div className="div404">
      <h1>404</h1>
      <div className="sushi">Ooops, Il y a un sushi.</div>
      <div className="notFound">page not found</div>
      <img src="/sushi.svg" alt="sushi404"/>
      <Button color="Red">Go Home</Button>
    </div>
	  )
  }
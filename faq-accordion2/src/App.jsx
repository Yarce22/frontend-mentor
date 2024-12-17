import starIcon from "./assets/images/icon-star.svg"

function App() {
  return (
    <>
      <section class="main-container-accordion">
        <div class="icon-container">
          <img src={starIcon} alt="star-icon" />
          <h1>FAQs</h1>
        </div>
        <Question />
	    </section>
    </>
  )
}

export default App

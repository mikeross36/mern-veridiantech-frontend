export default function HomePage() {
  return (
    <section className="home__page">
      <div className="home__container container">
        <div className="home__img-background">
          <img
            src="/images/home-bcg.jpg"
            alt="home background pic"
            className="home__img"
          />
        </div>
        <div className="home__data">
          <h1 className="home__title">VeridianTech</h1>
          <h3 className="home__subtitle">Exploration drones</h3>
          <p className="home__description">
            A high-quality quadcopter is a serious investment and an easy way to
            add production value to a film project or get a unique view for your
            travel vlog
          </p>
          <div className="home__btns">
            <a
              href="http://www.diva-portal.org/smash/get/diva2:1184476/FULLTEXT01.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <button className="button home__button">details</button>
            </a>
            <a
              href="https://blog.feedspot.com/drone_forums/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="button button--gray button--small">
                explore
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

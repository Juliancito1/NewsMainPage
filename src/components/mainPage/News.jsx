import { Container } from "react-bootstrap";

const News = () => {
    return (
        <Container className="border news p-3">
            <h2 className="text-warning mt-4 display-6 fw-bold">New</h2>
            <article className="text-light my-4">
                <a href="" className="text-decoration-none text-light"><h4 className="news-side">
                    Hydrogen VS Electric Cars
                    </h4>
                    </a>
                <p className="lead">Will hydrogen-fueled cars ever catch up to Evs?</p>
                <hr></hr>
            </article>
            <article className="text-light my-4">
                <a href="" className="text-decoration-none text-light"><h4 className="news-side">
                    The Downsides of AI Artistry
                    </h4>
                    </a>
                <p className="lead">What are the possible adverse effects of on-demand AI image generation?</p>
                <hr></hr>
            </article>
            <article className="text-light my-4">
                <a href="" className="text-decoration-none text-light"><h4 className="news-side">
                    Is VC Funding Drying Up?
                    </h4>
                    </a>
                <p className="lead fs-5">Private funding by VC firms is down 50% YOY. We take a look at what that means</p>
            </article>
        </Container>
    );
};

export default News;
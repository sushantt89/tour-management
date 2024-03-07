import React from 'react'
import '../../styles/home.css'
import { Container,Row,Col } from 'reactstrap'
import heroImg from '../../assets/images/hero-img01.jpg'
import heroImg02 from '../../assets/images/hero-img02.jpg'
import heroVideo from '../../assets/images/hero-video.mp4'
import Subtitle from '../../shared/Subtitle'
const Home = () => {
  return (
    <>
    {/* ============== hero section start ============= */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero_content">
              <div className="hero_subtitle d-flex adlign-items-center">
                <Subtitle subtitle={'Know before you go'}/>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/* ============== hero section end ============= */}
    </>
  )
}

export default Home
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import videoST from "../styles/videocontainer.module.css"
import Section from "../components/Section";
import BigButton from "../components/BigButton";
import Carrousel from "../components/Carrousel";
import Script from "next/script";
import {useEffect, useState} from "react";
import VideoModal from "../components/VideoModal";
import MainCard from "../components/MainCard";
import GridAndColumn from "../components/GridAndColumn";
import LightBlue from "../components/LightBlue";
import FloatingButton from "../components/FloatingButton";
import Video from "../components/Video";


export default function Home() {
    const [modal, setModal] = useState(false)
    const { container,
        mainContainer,
        floatA, floatB,
        floatC,
        standContainer,
        sectionContainer,
        imageT,
        innerMain,
        bc,
        carrouselContainer,
        h2Container,
        grid,
        gridCell,
        sectionMessage,
        lightBlueContainer,
        stand } = styles;

    const { containerVid, vidButton } = videoST


    const handleModal = () => {
        if(!modal) {
            setModal(true)
        } else {
            setModal(false)
        }
    }

    useEffect(() => {
        if(modal) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [modal])

  return (
      <>
          <Head>
              <title>Square</title>
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"/>
          </Head>
          <Section>
              <div className={container}>
                  <div className={mainContainer}>
                      <div className={innerMain}>
                          <div>
                              <h1>
                                  Power your business  with Square
                              </h1>
                          </div>
                          <div >
                              <p>
                                  Millions of brands of all sizes trust Square to accept payments, build customer relationships, and grow their business in-store and online.
                              </p>
                          </div>
                          <div className={bc}>
                              <BigButton text={"Get Started"} route={"/"}  isMid={false} />
                              <BigButton text={"Contact Sales"} route={"/"} isMid={false} isWhite={true}/>
                          </div>
                          <div>
                              <p>
                                  See how a business owner uses Square. <button
                                  onClick={handleModal}
                                  className={vidButton}><span> Play video <i className={`bi bi-play-circle`}></i></span></button>
                              </p>
                              {modal && (
                                  <div className={containerVid}>
                                          <VideoModal isOpen={handleModal}/>
                              </div>)}
                          </div>
                      </div>
                  </div>
                 <div className={carrouselContainer}>
                     <Carrousel />
                 </div>
              </div>
          </Section>
          <Section color={true}>
              <div className={sectionContainer }>
                  <div className={h2Container}>
                      <h2>Tools that connect every
                          side of your business.</h2>
                  </div>
                  <div className={grid}>
                      <div className={gridCell}>
                          <MainCard
                              content = {{
                                  title: "Commerce",
                                  message: "Sell in-person, online, or from anywhere. Take secure payments from customers, clients, and more.",
                                  links: "business",
                                  links_title: "See commerce solutions",
                                  tags: [
                                      "Point of sale",
                                      "Online store",
                                      "Payments"
                                  ],
                                  image:"https://images.ctfassets.net/2d5q1td6cyxq/1r3kA5aQbhPe752PWJ6E71/25fd8fecee2060515f31fd3cdd4f8ee9/PD03519_-_USEN_HPQ3_salon_commerce.png?w=1502&h=734&fm=webp&q=85&fit=scale"
                              }}
                          />
                      </div>
                      <div className={gridCell}>
                          <MainCard
                              content = {{
                                  title: "Customers",
                                  message: "Keep customers coming back to your business with personal touches and rewards",
                                  links: "pricing",
                                  links_title: "Explore Customer Directory",
                                  tags: [
                                      "Loyalty Program",
                                      "Email & SMS Marketing",
                                      "Message Hub"
                                  ],
                                  image:"https://images.ctfassets.net/2d5q1td6cyxq/1A438s8DQYebb6fd7dgDHg/fa86761531850c54e536c473f0fe9364/PD03519_-_US_HPQ3_salon_customers.png?w=1502&h=734&fm=webp&q=85&fit=scale"
                              }}
                          />
                      </div>
                      <div className={gridCell}>
                          <MainCard
                              content = {{
                                  title: "Banking",
                                  message: "Access and manage your money as you make it with business banking accounts and services from Square",
                                  links: "resources",
                                  links_title: "See banking solutions",
                                  tags: [
                                      "Checking",
                                      "Savings",
                                      "Loans"
                                  ],
                                  image: "https://images.ctfassets.net/2d5q1td6cyxq/4AkgSqhERemoQAXCQzMu5k/807b0898ecaeeba9d61b855c92e97342/PD03519_-_US_HPQ3_salon_banking.png?w=1502&h=734&fm=webp&q=85&fit=scale"
                              }}
                          />
                      </div>
                      <div className={gridCell}>
                          <MainCard
                              content = {{
                                  title: "Staff",
                                  message: "Manage your team with scheduling, timecards, and full-service payroll, all in one place",
                                  links: "pricing",
                                  links_title: "Check out Payroll",
                                  tags: [
                                      "Team Management",
                                      "Benefits",
                                  ],
                                  image: "https://images.ctfassets.net/2d5q1td6cyxq/1F9OyJtvmSAOPwG7eRK3o3/b08b2a1b21f19a8daef5bedc614eeb6b/PD03519_-_US_HPQ3_salon_staff.png?w=1502&h=734&fm=webp&q=85&fit=scale"
                              }}
                          />
                      </div>
                  </div>
                  <div className={sectionMessage}>
                      <small>Block, Inc. is a financial services company, not a bank. Banking services are provided by Square’s banking affiliate, Square Financial Services, Inc. or Sutton Bank; Members FDIC. Loans are subject to approval.</small>
                  </div>
              </div>
          </Section>
          <Section>
              <div>
                  <div className={h2Container}>
                      <h2>Solution sets for every business type and size.</h2>
                  </div>
                  <GridAndColumn />
              </div>

          </Section>
          <Section>
              <div className={lightBlueContainer}>
                  <LightBlue />
              </div>
          </Section>
          <Section>
              <div className={imageT}>
                  <h2>Meet the new Square Stand.</h2>
              </div>
              <div className={standContainer}>
                  <div className={floatA}>
                      <FloatingButton text={"Smooth checkouts"} position={"left"}/>
                  </div>

                  <img src="https://images.ctfassets.net/2d5q1td6cyxq/6t57lHd0gyqnrIYePOl5eX/8c45ae9b254580d577f77b1ca1c39290/Intro0010_comp_USEN_v009.1060.jpg?w=4000&h=1800&fm=webp&q=85&fit=scale" alt="" className={stand}/>
                  <div className={floatB}>
                      <FloatingButton text={"Built-in payments"} position={"right"}/>
                  </div>
                  <div className={floatC}>
                      <FloatingButton text={"Made to swivel"} position={"right"}/>
                  </div>

              </div>
          </Section>
          <Section>
              <Video />
          </Section>
          <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" strategy={"lazyOnload"}/>
      </>
  )
}

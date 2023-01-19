import React from 'react'
import Footer from '../Footer/Footer'
import st from './AboutUs.module.css'

export default function AboutUs() {
  return (
    <div>
      
      <div className={st.container}>

        <div className={st.aboutUsContainer}>
          <h3 className=' text-center'>Know more about the Shine Team!</h3>
          
          <div className={st.infoDiv}>
            <h4>Who we are?</h4>
            <p>Shine was born from a business idea of some friends who decided to open their own online clothing store, where you can find the latest and best trends in underground, classic and luxury fashion, from the most recognized brands around the world.</p>
          </div>

          <div className={st.infoDiv}>
            <h4>Why choose Shine to buy your clothes?</h4>
            <p>Shine more than an online store, is a fashion technology platform where you can find the most recent collections of the most recognized brands in the world at incredible prices. You will find all kinds of garments, from accessories to footwear, for any occasion and for any gender, in addition your purchases are protected by the mercadopago system and you will have the security of receiving your order at the door of your house.<br/>
            We like to dress you cool and fresh ;)</p>
          </div>

          <h4 className=' text-center mb-8'>Shine Team</h4>
          <div className={st.devsDiv}>

            <div className={st.developer}>
              <span>Victor Falconí</span>
              <img src="/images/profile/Victor.jpeg" alt="Victor Photo" className={st.devImg} />
              <a href="https://www.linkedin.com/in/victor-falconi/">
                <img src="\images\IN.png" alt="LI logo" className={st.linkedLogo} />
              </a>
            </div>

            <div className={st.developer}>
              <span>Pau Gonzalez</span>
              <img src="/images/profile/Pau.jpeg" alt="Pau Photo" className={st.devImg} />
              <a href="https://www.linkedin.com/in/pau-gonzalez-071356230/">
                <img src="\images\IN.png" alt="LI logo" className={st.linkedLogo} />
              </a>
            </div>

            <div className={st.developer}>
              <span>Martin Zacca</span>
              <img src="/images/profile/Martin.jpeg" alt="Martin Photo" className={st.devImg} />
              <a href="https://www.linkedin.com/in/martin-zacca-a5021b257/">
                <img src="\images\IN.png" alt="LI logo" className={st.linkedLogo} />
              </a>
            </div>

            <div className={st.developer}>
              <span>Lenyn Bejar</span>
              <img src="/images/profile/Lenyn.jpeg" alt="Lenyn Photo" className={st.devImg} />
              <a href="https://www.linkedin.com/in/lenyn-bejar-apaza-997577260/">
                <img src="\images\IN.png" alt="LI logo" className={st.linkedLogo} />
              </a>
            </div>

            <div className={st.developer}>
              <span>Lucas Dri</span>
              <img src="/images/profile/Lucas.jpeg" alt="Lucas Photo" className={st.devImg} />
              <a href="https://www.linkedin.com/in/lucas-dri-ba0697241/">
                <img src="\images\IN.png" alt="LI logo" className={st.linkedLogo} />
              </a>
            </div>

            <div className={st.developer}>
              <span>Gianfranco Nievas</span>
              <img src="/images/profile/Gianfranco.jpeg" alt="Gianfranco Photo" className={st.devImg} />
              <a href="https://www.linkedin.com/in/gianfranco-nievas-946134221/">
                <img src="\images\IN.png" alt="LI logo" className={st.linkedLogo} />
              </a>
            </div>
          </div>

        </div>

      </div>

      <Footer/>
    </div>
  )
}
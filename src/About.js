import TextAnimation from "./components/text_stagger_reveal";
import { Zoom } from 'react-awesome-reveal';
import "./styles/About.css";
import App from "./components/list_item";

function About() {
  const bottom_dots = [1, 2, 3];
  return (
    <>
      <div className="About-Background">
      
        <TextAnimation
          children={<div style={{borderBottom: '3px solid', color: '#ffffff'}}><p>ABOUT</p></div>}
          className="title"
          stagger="0"
          duration='2.5'
        ></TextAnimation>
        
        
        <div className="container-group">
          <Zoom down triggerOnce>
          <div
            className="container"
            onMouseEnter={() => {
              document
                .querySelector(".container-text")
                .classList.add("hovered");
            }}
            onMouseLeave={() => {
              document
                .querySelector(".container-text")
                .classList.remove("hovered");
            }}
          >
            <div className="vertical-line"> </div>
            <div className="container-icon" id="passionate-size">
              <svg
                width="60"
                height="61"
                viewBox="0 0 59 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  marginBottom: "4px",
                  marginTop: "5px",
                  marginLeft: "5px",
                  marginRight: "5px",
                }}
              >
                <path
                  d="M29.5059 0.833984C13.6326 0.833984 0.75 13.9007 0.75 30.0006C0.75 46.1006 13.6326 59.1673 29.5059 59.1673C45.3791 59.1673 58.2617 46.1006 58.2617 30.0006C58.2617 13.9007 45.3791 0.833984 29.5059 0.833984ZM30.4548 44.584C29.9372 44.759 29.0458 44.759 28.5282 44.584C24.0423 43.0381 13.9777 36.534 13.9777 25.509C13.9777 20.6382 17.831 16.7007 22.6045 16.7007C25.4225 16.7007 27.9243 18.0715 29.5059 20.2298C31.0587 18.1006 33.5892 16.7007 36.4073 16.7007C41.1807 16.7007 45.034 20.6382 45.034 25.509C45.034 36.534 34.9695 43.0381 30.4548 44.584Z"
                  fill="white"
                />
              </svg>
            </div>
            
              <TextAnimation
                children={
                  <div className="container-text"><p>Passionate</p><p>Cloud/</p><p>DevOps</p><p>Enthusiast</p></div>
                }
                stagger = '0'
                duration='2.5'
              />
            
            <div className="container-subtext">
              My passion for cloud technologies and DevOps methodologies fuels
              my drive to explore, innovate, and contribute to cutting-edge
              projects and initiatives.
              <br></br>
              <br></br>
              <br></br>
            </div>
            <div className="container-bottom">
              {bottom_dots.map((dot, index) => (
                <div key={index} className="container-bottom-dot"></div>
              ))}
              <div className="container-bottom-line"></div>
              {bottom_dots.map((dot, index) => (
                <div key={index} className="container-bottom-dot"></div>
              ))}
            </div>
          </div>
          </Zoom>

          <Zoom down triggerOnce>
          <div className="container">
            <div className="vertical-line"> </div>
            <div className="container-icon">
              <svg
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M47.2195 5.83398H22.7779C12.1612 5.83398 5.83203 12.1632 5.83203 22.7798V47.1923C5.83203 57.8381 12.1612 64.1673 22.7779 64.1673H47.1904C57.807 64.1673 64.1362 57.8382 64.1362 47.2215V22.7798C64.1654 12.1632 57.8362 5.83398 47.2195 5.83398ZM30.5945 48.7673C29.6029 49.759 28.2904 50.4298 26.6862 50.634L22.7487 51.0715C20.5904 51.3048 18.7529 49.4673 18.9862 47.2798L19.4237 43.3132C19.8029 39.784 22.7487 37.5382 25.8695 37.4798C26.1612 37.4507 26.5112 37.4798 26.832 37.509C28.2029 37.684 29.5154 38.3256 30.6237 39.4048C31.7029 40.484 32.3154 41.7673 32.4904 43.0798C32.5195 43.4007 32.5487 43.7215 32.5487 44.0131C32.5487 45.8215 31.8779 47.484 30.5945 48.7673ZM50.8654 22.0215C48.7654 27.2715 43.9529 34.1548 39.3737 38.6465C38.7029 34.5048 35.407 31.2382 31.207 30.6548C35.6987 26.0465 42.6404 21.1757 47.9195 19.0465C48.8529 18.6965 49.7862 18.959 50.3695 19.5423C50.9529 20.184 51.2445 21.0882 50.8654 22.0215Z"
                  fill="white"
                />
              </svg>
            </div>
            <TextAnimation duration='2.5' children={<div className="container-text"><p>Diverse</p><p>Technical</p><p>Proficiency</p></div>} stagger='0'/>
            <div className="container-subtext">
              Proficient in a versatile tech stack ranging from Packer and
              Terraform to GCP, Python, and Kubernetes, I possess a well-rounded
              skill set poised for tackling diverse challenges in the cloud
              computing domain.
            </div>
            <div className="container-bottom">
              {bottom_dots.map((dot, index) => (
                <div key={index} className="container-bottom-dot"></div>
              ))}
              <div className="container-bottom-line"></div>
              {bottom_dots.map((dot, index) => (
                <div key={index} className="container-bottom-dot"></div>
              ))}
            </div>
          </div>
          <div className="container">
            <div className="vertical-line"> </div>
            <div className="container-icon">
              <svg
                width="79"
                height="74"
                viewBox="0 0 79 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M47.239 6.16797H31.7681C28.3448 6.16797 25.5469 8.75797 25.5469 11.9646V14.863C25.5469 18.0696 28.3119 20.6596 31.7352 20.6596H47.239C50.6623 20.6596 53.4273 18.0696 53.4273 14.863V11.9646C53.4602 8.75797 50.6623 6.16797 47.239 6.16797Z"
                  fill="white"
                />
                <path
                  d="M56.7469 14.8617C56.7469 19.7642 52.4677 23.7726 47.234 23.7726H31.7631C26.5294 23.7726 22.2502 19.7642 22.2502 14.8617C22.2502 13.1351 20.2752 12.0559 18.6294 12.8576C13.9881 15.1701 10.8281 19.7642 10.8281 25.0367V54.0509C10.8281 61.6359 17.4444 67.8334 25.5419 67.8334H53.4552C61.5527 67.8334 68.1689 61.6359 68.1689 54.0509V25.0367C68.1689 19.7642 65.009 15.1701 60.3677 12.8576C58.7219 12.0559 56.7469 13.1351 56.7469 14.8617ZM50.4927 39.2509L37.326 51.5842C36.8323 52.0467 36.2069 52.2626 35.5815 52.2626C34.956 52.2626 34.3306 52.0467 33.8369 51.5842L28.8994 46.9592C27.9448 46.0651 27.9448 44.5851 28.8994 43.6909C29.854 42.7967 31.434 42.7967 32.3885 43.6909L35.5815 46.6817L47.0035 35.9826C47.9581 35.0884 49.5381 35.0884 50.4927 35.9826C51.4473 36.8767 51.4473 38.3567 50.4927 39.2509Z"
                  fill="white"
                />
              </svg>
            </div>
            <TextAnimation duration='2.5' children={<div className="container-text"><p>Proactive</p><p>Problem</p><p>Solver</p></div>} stagger='0'/>
            <div className="container-subtext">
              Equipped with a quick learning aptitude and adept time management
              skills, I thrive in dynamic environments where I can proactively
              identify and address challenges, fostering efficiency and
              productivity.
            </div>
            <div className="container-bottom">
              {bottom_dots.map((dot, index) => (
                <div key={index} className="container-bottom-dot"></div>
              ))}
              <div className="container-bottom-line"></div>
              {bottom_dots.map((dot, index) => (
                <div key={index} className="container-bottom-dot"></div>
              ))}
            </div>
          </div>
          </Zoom>

          <Zoom down triggerOnce>
          <div className="container">
            <div className="vertical-line"> </div>
            <div className="container-icon" id="team-player-path">
              <svg
                width="79"
                height="74"
                viewBox="0 0 79 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="11"
                  y="10"
                  width="57"
                  height="58"
                  rx="14"
                  fill="white"
                />
                <path
                  opacity="0.4"
                  d="M36 29C33.38 29 31.25 31.13 31.25 33.75C31.25 36.32 33.26 38.4 35.88 38.49C35.96 38.48 36.04 38.48 36.1 38.49C36.12 38.49 36.13 38.49 36.15 38.49C36.16 38.49 36.16 38.49 36.17 38.49C38.73 38.4 40.74 36.32 40.75 33.75C40.75 31.13 38.62 29 36 29Z"
                  fill="#383C45"
                />
                <path
                  d="M41.0809 41.1509C38.2909 39.2909 33.7409 39.2909 30.9309 41.1509C29.6609 42.0009 28.9609 43.1509 28.9609 44.3809C28.9609 45.6109 29.6609 46.7509 30.9209 47.5909C32.3209 48.5309 34.1609 49.0009 36.0009 49.0009C37.8409 49.0009 39.6809 48.5309 41.0809 47.5909C42.3409 46.7409 43.0409 45.6009 43.0409 44.3609C43.0309 43.1309 42.3409 41.9909 41.0809 41.1509Z"
                  fill="#383C45"
                />
                <path
                  opacity="0.4"
                  d="M46.9894 34.3401C47.1494 36.2801 45.7694 37.9801 43.8594 38.2101C43.8494 38.2101 43.8494 38.2101 43.8394 38.2101H43.8094C43.7494 38.2101 43.6894 38.2101 43.6394 38.2301C42.6694 38.2801 41.7794 37.9701 41.1094 37.4001C42.1394 36.4801 42.7294 35.1001 42.6094 33.6001C42.5394 32.7901 42.2594 32.0501 41.8394 31.4201C42.2194 31.2301 42.6594 31.1101 43.1094 31.0701C45.0694 30.9001 46.8194 32.3601 46.9894 34.3401Z"
                  fill="#383C45"
                />
                <path
                  d="M48.9883 43.5904C48.9083 44.5604 48.2883 45.4004 47.2483 45.9704C46.2483 46.5204 44.9883 46.7804 43.7383 46.7504C44.4583 46.1004 44.8783 45.2904 44.9583 44.4304C45.0583 43.1904 44.4683 42.0004 43.2883 41.0504C42.6183 40.5204 41.8383 40.1004 40.9883 39.7904C43.1983 39.1504 45.9783 39.5804 47.6883 40.9604C48.6083 41.7004 49.0783 42.6304 48.9883 43.5904Z"
                  fill="#383C45"
                />
              </svg>
            </div>
            <TextAnimation duration='2.5' children={<div className="container-text"><p>Collaborative</p><p>Team</p><br></br><p>Member</p></div>} stagger='0'/>
            <div className="container-subtext">
              As evidenced by my active involvement as a core team member in
              various clubs and initiatives, I excel in collaborative settings,
              leveraging my flexibility and multitasking abilities to synergize
              efforts and achieve shared goals.
            </div>
            <div className="container-bottom">
              {bottom_dots.map((dot, index) => (
                <div key={index} className="container-bottom-dot"></div>
              ))}
              <div className="container-bottom-line"></div>
              {bottom_dots.map((dot, index) => (
                <div key={index} className="container-bottom-dot"></div>
              ))}
            </div>
          </div>
          </Zoom>
        </div>  
      </div>
      <div className="More-Background">
        <div className="more-grid">
          <div className="more-title">
            <div className="more-title-starter"></div>
            <div id = "best-services">
            <p>MY BEST</p>
            <p>SERVICES</p>
            </div>
            <div className="more-subtitle">I will help you with finding a solution and solve your problem.</div>
            <div className="more-container">LET’S<br></br>CONNECT</div>
          </div>
          <App/>
        </div>
        <img src={require("./assets/images/unlimited-blk.png") }
            alt="Unlimited"
            id = 'unlimited-blk'
          />
        <div className="end-line"></div>
      </div>
    </>
  );
}

export default About;

"use client";

import SplitText from "@/components/SplitText";
import Background from "@/components/Background";
import TextPressure from "@/components/TextPressure";
import DecryptedText from "@/components/DecryptedText";
import TiltedCard from "@/components/TitledCard";
import Skills from "@/components/Skills";


export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Background />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            zIndex: 10,
            pointerEvents: "none",
          }}
        >
          <SplitText
            text="Kerso"
            className="text-[clamp(3rem,12vw,10rem)] font-bold"
            splitType="chars"
            duration={0.7}
            delay={60}
            ease="power3.out"
            from={{ opacity: 0, y: 60 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="center"
          />
          <SplitText
            text="Scroll down"
            className="text-[clamp(1.5rem,4vw,3rem)] font-medium"
            splitType="chars"
            duration={0.7}
            delay={30}
            ease="power3.out"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="center"
          />
        </div>
      </section>

      {/* Other Content */}
      <section style={{ padding: "4rem 1rem", background: "#18181b", color: "#fff" }}>
        <div style={{maxWidth: 600, margin: "0 auto"}}>
            <TextPressure
          text="About me"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={20}
        />
        </div>
        {/* <p className="text-4xl text-center mt-10">
          Hi, I'm Kerso, a young, Polish code developer with a high skill ;3
        </p> */}
        <div className="flex justify-center items-center mt-20">
          <DecryptedText
            text="Hi, I'm Kerso, a young Polish programmer with high skills ;3"
            animateOn="view"
            revealDirection="start"
            className="text-4xl text-center mt-20"
            encryptedClassName="text-4xl text-center mt-20"
          />
        </div>
        {/* <div className="flex justify-center items-center">
          <DecryptedText
            text="I can code in:"
            animateOn="view"
            revealDirection="start"
            className="text-4xl text-center mt-10"
            encryptedClassName="text-4xl text-center mt-10"
          />
        </div> */}
        {/* <p className="text-4xl text-center mt-5">I can code in:</p> */}
        {/* <RotatingText
          texts={['HTML', 'JavaScript', 'TypeScript', 'Python', 'C#']}
          mainClassName="text-4xl mt-5 justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        /> */}

      </section>
      
      <section style={{ padding: "4rem 1rem", background: "#18181b", color: "#fff" }}>
        <div style={{maxWidth: 600, margin: "0 auto"}}>
          <TextPressure
            text="My skills"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={20}
          />
        </div>

        <Skills/>

      </section>

      <section style={{ padding: "4rem 1rem", background: "#18181b", color: "#fff" }}>
        <div style={{maxWidth: 600, margin: "0 auto"}}>
            <TextPressure
          text="My Projects"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={20}
        />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto max-w-5xl justify-items-center mt-20">
            <TiltedCard
            imageSrc="/kersocloud_logo.png"
            altText="KERSO.CLOUD"
            captionText="KERSO.CLOUD"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text ml-3 mt-3 bg-gray-800/50 p-2 rounded-2xl">
                KERSO.CLOUD
              </p>
            }
            href="https://kerso.cloud"
          />

          <TiltedCard
            imageSrc="/secret.png"
            altText="Secret"
            captionText="Secret"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text ml-3 mt-3 bg-gray-800/50 p-2 rounded-2xl">
                Fakturometr
              </p>
            }
            alertText="This project isn't finished yet!"
          />

          <TiltedCard
            imageSrc="/secret.png"
            altText="Secret"
            captionText="Secret"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text ml-3 mt-3 bg-gray-800/50 p-2 rounded-2xl">
                Library SP14
              </p>
            }
            alertText="This project isn't finished yet!"
          />
        </div>
      </section>

      <footer className="w-full bg-[#18181b] text-gray-400 py-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-base text-center md:text-left">
            © {new Date().getFullYear()} Kerso. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a
              href="https://github.com/Kerso-official"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline transition"
            >
              GitHub
            </a>
            <a
              href="mailto:kerso@kerso.cloud"
              className="hover:text-white hover:underline transition"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>

    </main>
  );
}
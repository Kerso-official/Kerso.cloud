import TextPressure from "../TextPressure";
import TiltedCard from "../TiltedCard";

export default function Projects() {
    return (
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
            href="https://github.com/Kerso-official/Kerso.cloud"
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
                LeafPOS
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
                Placeholder
              </p>
            }
            alertText="I don't have any more projects to show yet!"
          />
        </div>
      </section>
    )
}
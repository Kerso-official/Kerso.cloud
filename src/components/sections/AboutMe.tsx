import TextPressure from "../TextPressure";
import DecryptedText from "../DecryptedText";

export default function AboutMe() {
    return (
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
            text="Hi, I'm Kerso, a young Polish programmer with high skills"
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
    )
}
import Background from "../Background";
import SplitText from "../SplitText";

export default function Hero() {
    return (
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
    )
}
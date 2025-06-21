import TextPressure from "../TextPressure";
import Skills from "../Skills";

export default function MySkills() {
    return (
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
    )
}
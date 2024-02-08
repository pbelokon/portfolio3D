import {
  Text,
  Html,
  PresentationControls,
  Float,
  Environment,
  useGLTF,
  ContactShadows,
} from "@react-three/drei";

export default function Experience() {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  return (
    <>
      <Environment preset="city" />

      <color args={["#241a1a"]} attach="background" />
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={90}
            color={"#0074B7"}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          ></rectAreaLight>

          <primitive position-y={-1.2} object={computer.scene}>
            <Html
              transform
              wrapperClass="portfolio"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src="https://www.pbelokon.com/" frameborder="0"></iframe>
            </Html>
          </primitive>
          <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={0.8}
            position={[2, 0.75, -0.1]}
            rotation-y={-1.25}
            maxWidth={2}
            textAlign="center"
          >
            PAVEL BELOKON
          </Text>
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}

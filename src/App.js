import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import { useCursor, MeshPortalMaterial, CameraControls, Gltf, Text, Preload, Html, Environment } from '@react-three/drei'
import { useRoute, useLocation } from 'wouter'
import { easing, geometry } from 'maath'
import { suspend } from 'suspend-react'

extend(geometry)
const regular = import('@pmndrs/assets/fonts/inter_regular.woff')
const medium = import('@pmndrs/assets/fonts/inter_medium.woff')

export const App = () => (
  <>
    <Canvas camera={{ fov: 75, position: [0, 0, 20] }} eventSource={document.getElementById('root')} eventPrefix="client">
      <color attach="background" args={['#f0f0f0']} />

      <Frame id="01" name={`Blue\nLacy`} author="Blue Lacy" bg="#e4cdac" position={[-1.65, 2, 0]} rotation={[0, 0.5, 0]}>
        {/* Blue Lacy */}
        {/* https://www.zappyhour.co/happy-hour-details?recordId=recn53pSPpCoZTZ1m */}
        <Environment background files="./BlueLacy.hdr" />
        <pointLight position={[2, 2, -180]} intensity={1} color="#fff" />
        <Gltf src="./beer_bottle.gltf" scale={8} position={[5, -2, 0]} />
        <Gltf src="./wine_bottle.gltf" scale={8} position={[0, -2, -5]} />
        <Gltf src="./cocktail.gltf" scale={8} position={[-5, -2, 0]} />
        <pointLight position={[-2, -2, -120]} intensity={1} color="#fff" />
      </Frame>

      <Frame id="02" name={`Lucky\nDuck`} author="Lucky Duck" position={[0, 2, 0]} bg="#e4cdac">
        {/* Lucky Duck */}
        {/* https://www.zappyhour.co/happy-hour-details?recordId=rec1kkOwy5hUam6hd */}
        <Environment background files="./LuckyDuck.hdr" />
        <pointLight position={[2, 2, -180]} intensity={1} color="#fff" />
        <Gltf src="./beer_bottle.gltf" scale={8} position={[5, -2, 0]} />
        <Gltf src="./ham_bone.gltf" scale={4} position={[0, -2, -5]} />
        <Gltf src="./cocktail.gltf" scale={8} position={[-5, -2, 0]} />
        <pointLight position={[-2, -2, -120]} intensity={1} color="#fff" />
      </Frame>

      <Frame id="03" name={`ATX\nCocina`} author="ATX Cocina" bg="#d1d1ca" position={[1.65, 2, 0]} rotation={[0, -0.5, 0]}>
        {/* ATX Cocina */}
        {/* https://www.zappyhour.co/happy-hour-details?recordId=recD1rSZ9ooLuLJCh */}

        <Environment background files="./ATXCocina.hdr" />
        <pointLight position={[2, 2, -180]} intensity={1} color="#fff" />
        <Gltf src="./ham_bone.gltf" scale={4} position={[0, -2, -5]} />
        <Gltf src="./cocktail.gltf" scale={8} position={[-5, -2, 0]} />
        <pointLight position={[-2, -2, -120]} intensity={1} color="#fff" />
      </Frame>

      <Frame id="04" name={`Bar\nMoxy`} author="Bar Moxy" bg="#e4cdac" position={[-1.65, 0, 0]} rotation={[0, 0.5, 0]}>
        {/* Bar Moxy */}
        {/* https://www.zappyhour.co/happy-hour-details?recordId=recMSQ6HwVsTPa8Ci */}
        <Environment background files="./BarMoxy.hdr" />
        <pointLight position={[2, 2, -180]} intensity={1} color="#fff" />
        <Gltf src="./beer_bottle.gltf" scale={8} position={[5, -2, 0]} />
        <Gltf src="./cocktail.gltf" scale={8} position={[0, -2, -5]} />
        <pointLight position={[-2, -2, -120]} intensity={1} color="#fff" />
      </Frame>

      <Frame id="05" name="Hank's" author="Hank's">
        {/* Hank's */}
        {/* https://www.zappyhour.co/happy-hour-details?recordId=recjg3w9agW47fJDB */}
        <Environment background files="./Hanks.hdr" />
        <pointLight position={[2, 2, -180]} intensity={1} color="#fff" />
        <Gltf src="./beer_bottle.gltf" scale={8} position={[5, -2, 5]} />
        <Gltf src="./ham_bone.gltf" scale={4} position={[5, -2, -5]} />
        <Gltf src="./wine_bottle.gltf" scale={8} position={[-5, -2, -5]} />
        <Gltf src="./cocktail.gltf" scale={8} position={[-5, -2, 5]} />
        <pointLight position={[-2, -2, -120]} intensity={1} color="#fff" />
      </Frame>

      <Frame id="06" name="Saturn" author="Omar Faruq Tawsif" bg="#d1d1ca" position={[1.65, 0, 0]} rotation={[0, -0.5, 0]}>
        {/* Saturn */}
        {/* https://www.zappyhour.co/happy-hour-details?recordId=recj62oKRRYxT972C */}
        <Environment background files="./Saturn.hdr" />
        <pointLight position={[2, 2, -180]} intensity={1} color="#fff" />
        <Gltf src="./ham_bone.gltf" scale={4} position={[-5, -2, 0]} />
        <Gltf src="./beer_bottle.gltf" scale={8} position={[5, -2, 0]} />
        <Gltf src="./cocktail.gltf" scale={8} position={[0, -2, -5]} />
        <pointLight position={[-2, -2, -120]} intensity={1} color="#fff" />{' '}
      </Frame>

      <Frame id="07" name={`ex1`} author="Omar Faruq Tawsif" bg="#e4cdac" position={[-1.65, -2, 0]} rotation={[0, 0.5, 0]}>
        <Gltf src="pickles_3d_version_of_hyuna_lees_illustration-transformed.glb" scale={8} position={[0, -0.7, -2]} />
      </Frame>
      <Frame id="08" name="ex2" author="Omar Faruq Tawsif" position={[0, -2, 0]}>
        <Gltf src="fiesta_tea-transformed.glb" position={[0, -2, -3]} />
      </Frame>
      <Frame id="09" name="ex3" author="Omar Faruq Tawsif" bg="#d1d1ca" position={[1.65, -2, 0]} rotation={[0, -0.5, 0]}>
        <Gltf src="still_life_based_on_heathers_artwork-transformed.glb" scale={2} position={[0, -0.8, -4]} />
      </Frame>
      <Rig />
      <Preload camera />
    </Canvas>
  </>
)

// function Frame({ id, name, author, bg, width = 1, height = 1.61803398875, children, ...props }) {
function Frame({ id, name, author, bg, width = 1.61803398875, height = 1, children, ...props }) {
  const portal = useRef()
  const [, setLocation] = useLocation()
  const [, params] = useRoute('/item/:id')
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  useFrame((state, dt) => easing.damp(portal.current, 'blend', params?.id === id ? 1 : 0, 0.2, dt))
  return (
    <group {...props}>
      <Text font={suspend(medium).default} fontSize={0.2} anchorY="top" anchorX="left" lineHeight={0.8} position={[-0.375, 0.415, 0.01]} material-toneMapped={false}>
        {/* <Text font={suspend(medium).default} fontSize={0.2} anchorY="top" anchorX="left" lineHeight={0.8} position={[-0.375, 0.715, 0.01]} material-toneMapped={false}> */}
        {name}
      </Text>
      <Text font={suspend(regular).default} fontSize={0.1} anchorX="right" position={[0.7, -0.359, 0.01]} material-toneMapped={false}>
        {/* <Text font={suspend(regular).default} fontSize={0.1} anchorX="right" position={[0.4, -0.659, 0.01]} material-toneMapped={false}> */}/{id}
      </Text>
      <Text font={suspend(regular).default} fontSize={0.04} anchorX="right" position={[0.0, -0.377, 0.01]} material-toneMapped={false}>
        {/* <Text font={suspend(regular).default} fontSize={0.04} anchorX="right" position={[0.0, -0.677, 0.01]} material-toneMapped={false}> */}
        {author}
      </Text>
      <mesh name={id} onDoubleClick={(e) => (e.stopPropagation(), setLocation('/item/' + e.object.name))} onPointerOver={(e) => hover(true)} onPointerOut={() => hover(false)}>
        <roundedPlaneGeometry args={[width, height, 0.1]} />
        <MeshPortalMaterial ref={portal} events={params?.id === id} side={THREE.DoubleSide}>
          <color attach="background" args={[bg]} />
          {children}
        </MeshPortalMaterial>
      </mesh>
    </group>
  )
}

function Rig({ position = new THREE.Vector3(0, 0, 2), focus = new THREE.Vector3(0, 0, 0) }) {
  const { controls, scene } = useThree()
  const [, params] = useRoute('/item/:id')
  useEffect(() => {
    const active = scene.getObjectByName(params?.id)
    if (active) {
      active.parent.localToWorld(position.set(0, 0.5, 0.25))
      active.parent.localToWorld(focus.set(0, 0, -2))
    }
    controls?.setLookAt(...position.toArray(), ...focus.toArray(), true)
  })
  return <CameraControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
}

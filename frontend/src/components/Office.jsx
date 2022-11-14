import * as THREE from 'three'
import { Vector3 } from 'three'
import React from "react";
import { useFrame } from '@react-three/fiber'
import { useGLTF, useScroll } from "@react-three/drei";

const cameraPositionCurve = new THREE.CatmullRomCurve3([
  new Vector3(-8, 1, 7),
  new Vector3(-8, 1, 7),
  new Vector3(-8, 1, 7),
  new Vector3(0, 5, 5),
  new Vector3(1, 6, 5),
  new Vector3(5, 3, 3),
  new Vector3(6, 2, -8)
])
const cameraLookAtCurve = new THREE.CatmullRomCurve3([
  new Vector3(0, 0, 0),
  new Vector3(0, 0, -6),
  new Vector3(0, 0, -6),
  new Vector3(0, 6, 2),
  new Vector3(0, 6, 0),
  new Vector3(0, 0, -6),
  new Vector3(0, -2, -3)
])
const cameraLookAt = new Vector3(0, 0, 0)

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

export default function Office(props) {
  const scroll = useScroll()
  const { nodes, materials } = useGLTF("/Office.glb");
  
  useFrame((state, delta) => {
    cameraPositionCurve.getPoint(scroll.offset, state.camera.position)
    cameraLookAtCurve.getPoint(scroll.offset, cameraLookAt)
    state.camera.lookAt(cameraLookAt)
  })
  
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, -1.37]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.49, 0.74, 1.35]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_58.geometry}
              material={materials.M_Sigarettes_512}
            />
          </group>
          <group position={[0.49, 0.75, 1.35]} scale={[1, 0.45, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_64.geometry}
              material={materials.M_Sigarettes_512}
            />
          </group>
          <group position={[-0.05, 0.74, 0.88]} rotation={[0, -0.74, 0]}>
            <group position={[0.01, 0.12, 0.01]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_6.geometry}
                material={materials.M_Cactus_1024}
              />
            </group>
            <group position={[0, 0.12, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_8.geometry}
                material={materials.M_Cactus_1024}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.M_Cactus_1024}
            />
          </group>
          <group
            position={[0.92, 0.01, 0.77]}
            rotation={[Math.PI, -0.42, Math.PI]}
            scale={[1.24, 1, 1.24]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_107.geometry}
              material={materials.M_OfficeStool_Bin_2048}
            />
          </group>
          <group
            position={[0.48, 0.75, 1.5]}
            rotation={[1, 0.42, 1]}
            scale={0.5}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_54.geometry}
              material={materials.M_Sigarettes_512}
            />
          </group>
          <group
            position={[0.45, 0.76, 1.31]}
            rotation={[-1.45, -0.19, -2.33]}
            scale={0.5}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_60.geometry}
              material={materials.M_Sigarettes_512}
            />
          </group>
          <group
            position={[0.53, 0.77, 1.41]}
            rotation={[-1.7, -0.14, 0.34]}
            scale={0.5}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_62.geometry}
              material={materials.M_Sigarettes_512}
            />
          </group>
          <group
            position={[0.38, 0.75, 1.51]}
            rotation={[Math.PI, -1.19, -1.89]}
            scale={0.5}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_56.geometry}
              material={materials.M_Sigarettes_512}
            />
          </group>
          <group
            position={[0.45, 0.75, 1.46]}
            rotation={[0, -0.57, 1.57]}
            scale={0.5}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_66.geometry}
              material={materials.M_Sigarettes_512}
            />
          </group>
          <group position={[1, 0.57, 0.62]} rotation={[-3.13, -1, -1.58]}>
            <group
              position={[0.01, -0.03, 0]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={0.38}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_103.geometry}
                material={materials.M_Clipboard_Notepad_1024}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_101.geometry}
              material={materials.M_Clipboard_Notepad_1024}
            />
          </group>
          <group position={[0.06, 0.74, 0.47]} rotation={[0, -0.39, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_14.geometry}
              material={materials.M_Computer_2048}
            />
          </group>
          <group position={[0.53, 0.74, 0.53]} rotation={[0, -0.17, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={materials.M_Computer_2048}
            />
          </group>
          <group
            position={[-0.08, 0.74, 1.28]}
            rotation={[0, 1.53, 0]}
            scale={[1.1, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_18.geometry}
              material={materials.M_Filebox_1024}
            />
          </group>
          <group
            position={[-0.08, 0.74, 1.4]}
            rotation={[-Math.PI, 1.51, -Math.PI]}
            scale={[1.1, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_20.geometry}
              material={materials.M_Filebox_1024}
            />
          </group>
          <group
            position={[-0.08, 0.74, 1.28]}
            rotation={[0, 1.53, 0]}
            scale={[1.1, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_22.geometry}
              material={materials.M_Filebox_1024}
            />
          </group>
          <group
            position={[-0.08, 0.74, 1.4]}
            rotation={[-Math.PI, 1.51, -Math.PI]}
            scale={[1.1, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_24.geometry}
              material={materials.M_Filebox_1024}
            />
          </group>
          <group position={[0.49, 0.74, 0.92]} rotation={[0, 0.17, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_10.geometry}
              material={materials.M_Computer_2048}
            />
          </group>
          <group position={[-0.04, 0.74, 1.56]} rotation={[0, 0.45, 0]}>
            <group position={[0, 0.06, 0]} rotation={[0, 0, 0.81]}>
              <group position={[0, 0.12, 0]} rotation={[0, 0, -0.98]}>
                <group position={[0, 0.28, 0]} rotation={[0, 0, -0.49]}>
                  <group position={[0, 0.37, 0]} rotation={[0, 0, -0.6]}>
                    <group position={[0, 0.08, 0]}>
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_119.geometry}
                        material={materials["M_Lamps_CCTV_2048.001"]}
                      />
                    </group>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_117.geometry}
                      material={materials["M_Lamps_CCTV_2048.001"]}
                    />
                  </group>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_115.geometry}
                    material={materials["M_Lamps_CCTV_2048.001"]}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_113.geometry}
                  material={materials["M_Lamps_CCTV_2048.001"]}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_111.geometry}
                material={materials["M_Lamps_CCTV_2048.001"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_109.geometry}
              material={materials["M_Lamps_CCTV_2048.001"]}
            />
          </group>
          <group position={[0.45, 0.74, 1.96]} rotation={[0, 0.36, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_73.geometry}
              material={materials.M_TapeRecorder_Tape_Rotors_Glass_1024}
            />
          </group>
          <group position={[0.1, 0.91, 0.5]} rotation={[0, -0.27, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_16.geometry}
              material={materials.M_Computer_2048}
            />
          </group>
          <group
            position={[0.23, 0.74, 1.17]}
            rotation={[0, 0.32, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_105.geometry}
              material={materials.M_Clipboard_Notepad_1024}
              position={[0.01, 0, 0]}
            />
          </group>
          <group
            position={[0.36, 0.74, 1.74]}
            rotation={[-0.01, 1.39, 0.01]}
            scale={[0.38, 0.14, 0.38]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_26.geometry}
              material={materials.M_Office_PinBoard_Photo_Notepad_1024}
              position={[0, 0.08, 0]}
            />
          </group>
          <group
            position={[-0.24, 1.63, 0.37]}
            rotation={[0, -1.57, 0]}
            scale={[0.99, 0.99, 1.12]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_99.geometry}
              material={materials.PhotoFrame_20x30_likeA4_512}
            />
          </group>
          <group
            position={[-0.24, 1.27, -0.1]}
            rotation={[0, -1.57, 0]}
            scale={[0.99, 0.99, 1.12]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_97.geometry}
              material={materials.PhotoFrame_20x30_likeA4_512}
            />
          </group>
          <group
            position={[-0.03, 0.74, 1.12]}
            rotation={[Math.PI / 2, 0, -1.81]}
            scale={0.38}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_28.geometry}
              material={materials.M_Office_PinBoard_Photo_Notepad_1024}
            />
          </group>
          <group
            position={[-0.23, 1.32, 2.26]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={0.38}
          >
            <group position={[0.43, 0.03, -0.44]} rotation={[-0.02, -0.02, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_32.geometry}
                material={materials.M_Office_PinBoard_Photo_Notepad_1024}
              />
            </group>
            <group position={[-0.44, 0.04, 0.07]} rotation={[-0.03, 0.04, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_34.geometry}
                material={materials.M_Office_PinBoard_Photo_Notepad_1024}
              />
            </group>
            <group position={[-0.12, 0.03, -0.37]} rotation={[-0.05, -0.05, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_36.geometry}
                material={materials.M_Office_PinBoard_Photo_Notepad_1024}
              />
            </group>
            <group position={[0.44, 0.03, 0.2]} rotation={[-0.07, 0.06, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_38.geometry}
                material={materials.M_Office_PinBoard_Photo_Notepad_1024}
              />
            </group>
            <group position={[-0.58, 0.03, -0.5]} rotation={[-0.03, -0.06, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_40.geometry}
                material={materials.M_Office_PinBoard_Photo_Notepad_1024}
              />
            </group>
            <group
              position={[0.19, 0.04, -0.43]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={2.63}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_42.geometry}
                material={materials.M_Office_PinBoard_Photo_Notepad_1024}
              />
            </group>
            <group
              position={[0.68, 0.04, -0.42]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={2.63}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_46.geometry}
                material={materials.M_Office_PinBoard_Photo_Notepad_1024}
              />
            </group>
            <group
              position={[-0.59, 0.04, -0.47]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={2.63}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_44.geometry}
                material={materials.M_Office_PinBoard_Photo_Notepad_1024}
              />
            </group>
            <group
              position={[0.48, 0.04, 0.23]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={2.63}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_50.geometry}
                material={materials.M_Office_PinBoard_Photo_Notepad_1024}
              />
            </group>
            <group
              position={[-0.44, 0.04, 0.09]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={2.63}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_48.geometry}
                material={materials.M_Office_PinBoard_Photo_Notepad_1024}
              />
            </group>
            <group
              position={[-0.12, 0.04, -0.36]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={2.63}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_52.geometry}
                material={materials.M_Office_PinBoard_Photo_Notepad_1024}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_30.geometry}
              material={materials.M_Office_PinBoard_Photo_Notepad_1024}
            />
          </group>
          <group
            position={[-0.25, 1.57, 1.32]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={[0.62, 0.31, 0.62]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_95.geometry}
              material={materials.Poster_1024}
              rotation={[0, -1.56, 0]}
            />
          </group>
          <group position={[0.21, 0.01, 1.17]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_68.geometry}
              material={materials.M_Table_2048}
            />
          </group>
          <group
            position={[0.03, 0.74, 1.9]}
            rotation={[-Math.PI, 1.36, -Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_70.geometry}
              material={materials.M_TapeRecorder_1024}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_71.geometry}
              material={materials.M_TapeRecorder_Tape_Rotors_Glass_1024}
            />
          </group>
          <group position={[-0.22, 2.01, 2.1]}>
            <group position={[0.05, -0.01, 0]}>
              <group rotation={[Math.PI / 3, 0, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_79.geometry}
                  material={materials.M_Vent_1024}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_77.geometry}
                material={materials.M_Vent_1024}
              />
            </group>
            <group position={[0, 0.16, 0.24]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_81.geometry}
                material={materials.M_Vent_1024}
              />
            </group>
            <group position={[-0.01, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_83.geometry}
                material={materials.M_Vent_1024}
              />
            </group>
            <group position={[0.13, 0, 0]}>
              <group position={[0, -0.11, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_87.geometry}
                  material={materials.M_Vent_1024}
                />
              </group>
              <group position={[-0.16, 0, 0]}>
                <group position={[0.01, 0.01, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_91.geometry}
                    material={materials.M_Vent_1024}
                  />
                </group>
                <group position={[0.13, -0.02, 0.19]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_93.geometry}
                    material={materials.M_Vent_1024}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_89.geometry}
                  material={materials.M_Vent_1024}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_85.geometry}
                material={materials.M_Vent_1024}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_75.geometry}
              material={materials.M_Vent_1024}
            />
          </group>
        </group>
      </group>
      <group
        position={[0.07, 0.75, -0.32]}
        rotation={[-Math.PI / 2, 0, -2.35]}
        scale={0}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-150.6, 88.31, 299.69]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube002_base_0.geometry}
              material={materials.base}
            />
          </group>
          <group
            position={[22.99, 37.32, 299.69]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_def_0.geometry}
              material={materials.material}
            />
          </group>
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall.geometry}
        material={materials["Material.005"]}
        position={[-0.29, 1.37, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.4, 1, 3.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={materials["Material.006"]}
        position={[1.08, 0, 0]}
        scale={[1.4, 1, 3.5]}
      />
    </group>
  );
}

useGLTF.preload("/Office2.glb");
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 .\public\models\test.glb 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/test.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature001" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="Cylinder002" geometry={nodes.Cylinder002.geometry} material={materials['Material.008']} skeleton={nodes.Cylinder002.skeleton} />
          <skinnedMesh name="defaultMaterial003" geometry={nodes.defaultMaterial003.geometry} material={materials['Material.008']} skeleton={nodes.defaultMaterial003.skeleton} />
          <skinnedMesh name="model_10003" geometry={nodes.model_10003.geometry} material={materials['Material.008']} skeleton={nodes.model_10003.skeleton} />
          <skinnedMesh name="Retopo_defaultMaterial002" geometry={nodes.Retopo_defaultMaterial002.geometry} material={materials['Material.008']} skeleton={nodes.Retopo_defaultMaterial002.skeleton} />
          <skinnedMesh name="Retopo_M_OZ_KingKazuma005" geometry={nodes.Retopo_M_OZ_KingKazuma005.geometry} material={materials['Material.008']} skeleton={nodes.Retopo_M_OZ_KingKazuma005.skeleton} />
          <skinnedMesh name="Retopo_M_OZ_KingKazuma006" geometry={nodes.Retopo_M_OZ_KingKazuma006.geometry} material={materials['Material.008']} skeleton={nodes.Retopo_M_OZ_KingKazuma006.skeleton} />
          <skinnedMesh name="Retopo_M_OZ_KingKazuma009" geometry={nodes.Retopo_M_OZ_KingKazuma009.geometry} material={materials['Material.008']} skeleton={nodes.Retopo_M_OZ_KingKazuma009.skeleton} />
          <skinnedMesh name="Retopo_M_OZ_KingKazuma010" geometry={nodes.Retopo_M_OZ_KingKazuma010.geometry} material={materials['Material.008']} skeleton={nodes.Retopo_M_OZ_KingKazuma010.skeleton} />
        </group>
        <group name="Armature002" position={[-0.003, -1.226, 12.15]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips_1} />
          <skinnedMesh name="Cylinder003" geometry={nodes.Cylinder003.geometry} material={materials['Material.008']} skeleton={nodes.Cylinder003.skeleton} />
          <skinnedMesh name="defaultMaterial004" geometry={nodes.defaultMaterial004.geometry} material={materials['Material.008']} skeleton={nodes.defaultMaterial004.skeleton} />
          <skinnedMesh name="model_10004" geometry={nodes.model_10004.geometry} material={materials['Material.008']} skeleton={nodes.model_10004.skeleton} />
          <skinnedMesh name="Retopo_defaultMaterial003" geometry={nodes.Retopo_defaultMaterial003.geometry} material={materials['Material.008']} skeleton={nodes.Retopo_defaultMaterial003.skeleton} />
          <skinnedMesh name="Retopo_M_OZ_KingKazuma007" geometry={nodes.Retopo_M_OZ_KingKazuma007.geometry} material={materials['Material.008']} skeleton={nodes.Retopo_M_OZ_KingKazuma007.skeleton} />
          <skinnedMesh name="Retopo_M_OZ_KingKazuma008" geometry={nodes.Retopo_M_OZ_KingKazuma008.geometry} material={materials['Material.008']} skeleton={nodes.Retopo_M_OZ_KingKazuma008.skeleton} />
        </group>
        <mesh name="Object_5" geometry={nodes.Object_5.geometry} material={nodes.Object_5.material} position={[0.004, 1.768, 12.651]} scale={2.048} />
        <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials['Material.008']} position={[-1.068, 2.056, 14.376]} rotation={[Math.PI, -0.085, Math.PI]} scale={[0.13, 0.018, 0.217]} />
        <mesh name="Cube" geometry={nodes.Cube.geometry} material={nodes.Cube.material} position={[-7.669, 1.935, 12.148]} rotation={[-Math.PI, 0, -Math.PI]} scale={[9.59, 0.107, 0.823]} />
        <mesh name="model_5" geometry={nodes.model_5.geometry} material={materials['Material.008']} position={[17.037, 9.654, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
          <mesh name="model_2" geometry={nodes.model_2.geometry} material={materials['Material.008']} position={[-0.439, 1.184, 0.366]} rotation={[-Math.PI / 2, 0, 0]} />
        </mesh>
        <mesh name="Retopo_model_5" geometry={nodes.Retopo_model_5.geometry} material={materials['Material.004']} position={[17.037, 9.654, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="Retopo_model_5001" geometry={nodes.Retopo_model_5001.geometry} material={materials['Material.005']} position={[17.037, 9.654, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
        <mesh name="Sphere" geometry={nodes.Sphere.geometry} material={nodes.Sphere.material} position={[3.011, -20.758, 39.9]} rotation={[0, 0.241, 0]} scale={[2.299, 0.454, 0.523]}>
          <mesh name="Retopo_model_2" geometry={nodes.Retopo_model_2.geometry} material={materials['Material.012']} position={[-0.854, -1.26, -2.009]} rotation={[0, 0.077, 0]} scale={[0.761, 3.813, 3.31]} />
          <mesh name="Retopo_model_2001" geometry={nodes.Retopo_model_2001.geometry} material={materials['Material.012']} position={[0.837, -1.26, -2.009]} rotation={[0, 0.077, 0]} scale={[0.761, 3.813, 3.31]} />
          <mesh name="Retopo_model_2002" geometry={nodes.Retopo_model_2002.geometry} material={materials['Material.012']} position={[-0.857, -1.26, 1.914]} rotation={[0, 0.077, 0]} scale={[0.761, 3.813, 3.31]} />
          <mesh name="Retopo_model_2003" geometry={nodes.Retopo_model_2003.geometry} material={materials['Material.012']} position={[0.837, -1.26, 1.891]} rotation={[0, 0.077, 0]} scale={[0.761, 3.813, 3.31]} />
          <mesh name="model_8" geometry={nodes.model_8.geometry} material={materials['Material.008']} position={[-0.051, 0.135, -0.351]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[3.312, 0.753, 3.813]} />
        </mesh>
        <mesh name="Sphere004" geometry={nodes.Sphere004.geometry} material={nodes.Sphere004.material} position={[3.011, -20.758, 43.739]} rotation={[0, 0.241, 0]} scale={[2.299, 0.454, 0.523]}>
          <mesh name="Retopo_model_2016" geometry={nodes.Retopo_model_2016.geometry} material={materials['Material.012']} position={[-0.854, -1.26, -2.009]} rotation={[0, 0.077, 0]} scale={[0.761, 3.813, 3.31]} />
          <mesh name="Retopo_model_2017" geometry={nodes.Retopo_model_2017.geometry} material={materials['Material.012']} position={[0.837, -1.26, -2.009]} rotation={[0, 0.077, 0]} scale={[0.761, 3.813, 3.31]} />
          <mesh name="Retopo_model_2018" geometry={nodes.Retopo_model_2018.geometry} material={materials['Material.012']} position={[-0.857, -1.26, 1.914]} rotation={[0, 0.077, 0]} scale={[0.761, 3.813, 3.31]} />
          <mesh name="Retopo_model_2019" geometry={nodes.Retopo_model_2019.geometry} material={materials['Material.012']} position={[0.837, -1.26, 1.891]} rotation={[0, 0.077, 0]} scale={[0.761, 3.813, 3.31]} />
          <mesh name="model_8004" geometry={nodes.model_8004.geometry} material={materials['Material.008']} position={[-0.051, 0.135, -0.351]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[3.312, 0.753, 3.813]} />
        </mesh>
        <mesh name="Sphere005" geometry={nodes.Sphere005.geometry} material={nodes.Sphere005.material} position={[3.011, -17.163, 50.601]} rotation={[0, 0.241, 0]} scale={[2.299, 0.454, 0.523]}>
          <mesh name="Retopo_model_2020" geometry={nodes.Retopo_model_2020.geometry} material={materials['Material.013']} position={[-0.854, -1.26, -2.009]} rotation={[0, 0.077, 0]} scale={[0.761, 3.813, 3.31]} />
          <mesh name="Retopo_model_2021" geometry={nodes.Retopo_model_2021.geometry} material={materials['Material.013']} position={[0.837, -1.26, -2.009]} rotation={[0, 0.077, 0]} scale={[0.761, 3.813, 3.31]} />
          <mesh name="Retopo_model_2022" geometry={nodes.Retopo_model_2022.geometry} material={materials['Material.013']} position={[-0.857, -1.26, 1.914]} rotation={[0, 0.077, 0]} scale={[0.761, 3.813, 3.31]} />
          <mesh name="Retopo_model_2023" geometry={nodes.Retopo_model_2023.geometry} material={materials['Material.013']} position={[0.837, -1.26, 1.891]} rotation={[0, 0.077, 0]} scale={[0.761, 3.813, 3.31]} />
          <mesh name="model_8005" geometry={nodes.model_8005.geometry} material={materials['Material.008']} position={[-0.051, 0.135, -0.351]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[3.312, 0.753, 3.813]} />
        </mesh>
        <mesh name="Retopo_sellphone_low002_phone001_0" geometry={nodes.Retopo_sellphone_low002_phone001_0.geometry} material={materials['Material.008']} position={[7.174, 2.668, 12.769]} rotation={[-Math.PI / 2, 0, -2.597]} scale={0.314} />
        <mesh name="Retopo_OldBooksPiles_01a003__0" geometry={nodes.Retopo_OldBooksPiles_01a003__0.geometry} material={materials['Material.008']} position={[-2.668, 2.005, 14.545]} rotation={[-Math.PI / 2, 0, -0.218]} scale={1.943} />
      </group>
    </group>
  )
}

useGLTF.preload('/test.glb')

"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function Hero3DScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(46, 1, 0.1, 100);
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const nodeGeometry = new THREE.IcosahedronGeometry(0.08, 1);
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x3ee7d6, transparent: true, opacity: 0.88 });
    const nodes: THREE.Mesh[] = [];
    const nodePositions: THREE.Vector3[] = [];

    for (let index = 0; index < 34; index += 1) {
      const angle = index * 0.92;
      const radius = 1.4 + (index % 7) * 0.26;
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle * 0.74) * 1.55,
        Math.sin(angle) * radius * 0.58
      );
      nodes.push(node);
      nodePositions.push(node.position.clone());
      group.add(node);
    }

    const linePositions: number[] = [];
    for (let index = 0; index < nodePositions.length; index += 1) {
      const next = (index + 5) % nodePositions.length;
      linePositions.push(
        nodePositions[index].x,
        nodePositions[index].y,
        nodePositions[index].z,
        nodePositions[next].x,
        nodePositions[next].y,
        nodePositions[next].z
      );
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x3ee7d6, transparent: true, opacity: 0.2 });
    group.add(new THREE.LineSegments(lineGeometry, lineMaterial));

    const ringGeometry = new THREE.TorusGeometry(2.9, 0.009, 12, 140);
    const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xf4b860, transparent: true, opacity: 0.32 });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI * 0.62;
    ring.rotation.y = Math.PI * 0.14;
    group.add(ring);

    const innerRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.95, 0.007, 12, 120),
      new THREE.MeshBasicMaterial({ color: 0xff7a6b, transparent: true, opacity: 0.22 })
    );
    innerRing.rotation.x = Math.PI * 0.38;
    innerRing.rotation.y = -Math.PI * 0.25;
    group.add(innerRing);

    function resize() {
      if (!mount) return;
      const { width, height } = mount.getBoundingClientRect();
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    }

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);

    let frameId = 0;
    const clock = new THREE.Clock();

    function animate() {
      const elapsed = clock.getElapsedTime();
      group.rotation.y = elapsed * 0.13;
      group.rotation.x = Math.sin(elapsed * 0.35) * 0.08;
      ring.rotation.z = elapsed * 0.16;
      innerRing.rotation.z = -elapsed * 0.19;

      nodes.forEach((node, index) => {
        const pulse = 1 + Math.sin(elapsed * 1.7 + index) * 0.18;
        node.scale.setScalar(pulse);
      });

      renderer.render(scene, camera);
      if (!prefersReducedMotion) {
        frameId = requestAnimationFrame(animate);
      }
    }

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      mount.removeChild(renderer.domElement);
      lineGeometry.dispose();
      nodeGeometry.dispose();
      ringGeometry.dispose();
      nodeMaterial.dispose();
      lineMaterial.dispose();
      ringMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="pointer-events-none absolute inset-[-10%] -z-10 opacity-80" aria-hidden="true" />;
}

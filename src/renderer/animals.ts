const svgNs = 'http://www.w3.org/2000/svg';

type AnimalKind = 'dog' | 'cat' | 'mouse';

const createDog = (size: number) => {
  const g = document.createElementNS(svgNs, 'g');
  
  // Left ear
  const earL = document.createElementNS(svgNs, 'ellipse');
  earL.setAttribute('cx', String(size / 2 - 18));
  earL.setAttribute('cy', String(size / 2 - 28));
  earL.setAttribute('rx', String(size * 0.1));
  earL.setAttribute('ry', String(size * 0.2));
  earL.setAttribute('fill', '#8b6f47');
  g.appendChild(earL);

  // Right ear
  const earR = document.createElementNS(svgNs, 'ellipse');
  earR.setAttribute('cx', String(size / 2 + 18));
  earR.setAttribute('cy', String(size / 2 - 28));
  earR.setAttribute('rx', String(size * 0.1));
  earR.setAttribute('ry', String(size * 0.2));
  earR.setAttribute('fill', '#8b6f47');
  g.appendChild(earR);

  // Snout
  const snout = document.createElementNS(svgNs, 'circle');
  snout.setAttribute('cx', String(size / 2));
  snout.setAttribute('cy', String(size / 2 + 8));
  snout.setAttribute('r', String(size * 0.12));
  snout.setAttribute('fill', '#e6c9a8');
  g.appendChild(snout);

  // Left eye
  const eyeL = document.createElementNS(svgNs, 'circle');
  eyeL.setAttribute('cx', String(size / 2 - 12));
  eyeL.setAttribute('cy', String(size / 2 - 10));
  eyeL.setAttribute('r', String(size * 0.06));
  eyeL.setAttribute('fill', '#000');
  g.appendChild(eyeL);

  // Right eye
  const eyeR = document.createElementNS(svgNs, 'circle');
  eyeR.setAttribute('cx', String(size / 2 + 12));
  eyeR.setAttribute('cy', String(size / 2 - 10));
  eyeR.setAttribute('r', String(size * 0.06));
  eyeR.setAttribute('fill', '#000');
  g.appendChild(eyeR);

  // Nose
  const nose = document.createElementNS(svgNs, 'circle');
  nose.setAttribute('cx', String(size / 2));
  nose.setAttribute('cy', String(size / 2 + 8));
  nose.setAttribute('r', String(size * 0.05));
  nose.setAttribute('fill', '#000');
  g.appendChild(nose);

  // Tail
  const tail = document.createElementNS(svgNs, 'path');
  tail.setAttribute('d', `M ${size / 2 + 30} ${size / 2 + 15} Q ${size / 2 + 45} ${size / 2}, ${size / 2 + 40} ${size / 2 - 25}`);
  tail.setAttribute('stroke', '#8b6f47');
  tail.setAttribute('stroke-width', '6');
  tail.setAttribute('fill', 'none');
  tail.setAttribute('stroke-linecap', 'round');
  g.appendChild(tail);

  return g;
};

const createCat = (size: number) => {
  const g = document.createElementNS(svgNs, 'g');
  
  // Left ear
  const earL = document.createElementNS(svgNs, 'polygon');
  earL.setAttribute('points', `${size / 2 - 22},${size / 2 - 28} ${size / 2 - 28},${size / 2 - 50} ${size / 2 - 12},${size / 2 - 38}`);
  earL.setAttribute('fill', '#f4a460');
  earL.setAttribute('stroke', '#d4845c');
  earL.setAttribute('stroke-width', '2');
  g.appendChild(earL);

  // Right ear
  const earR = document.createElementNS(svgNs, 'polygon');
  earR.setAttribute('points', `${size / 2 + 22},${size / 2 - 28} ${size / 2 + 28},${size / 2 - 50} ${size / 2 + 12},${size / 2 - 38}`);
  earR.setAttribute('fill', '#f4a460');
  earR.setAttribute('stroke', '#d4845c');
  earR.setAttribute('stroke-width', '2');
  g.appendChild(earR);

  // Inner ear left
  const innerEarL = document.createElementNS(svgNs, 'polygon');
  innerEarL.setAttribute('points', `${size / 2 - 20},${size / 2 - 26} ${size / 2 - 24},${size / 2 - 45} ${size / 2 - 14},${size / 2 - 35}`);
  innerEarL.setAttribute('fill', '#ffb3a8');
  g.appendChild(innerEarL);

  // Inner ear right
  const innerEarR = document.createElementNS(svgNs, 'polygon');
  innerEarR.setAttribute('points', `${size / 2 + 20},${size / 2 - 26} ${size / 2 + 24},${size / 2 - 45} ${size / 2 + 14},${size / 2 - 35}`);
  innerEarR.setAttribute('fill', '#ffb3a8');
  g.appendChild(innerEarR);

  // Face
  const face = document.createElementNS(svgNs, 'circle');
  face.setAttribute('cx', String(size / 2));
  face.setAttribute('cy', String(size / 2));
  face.setAttribute('r', String(size * 0.24));
  face.setAttribute('fill', '#ffc9a8');
  g.appendChild(face);

  // Left eye
  const eyeL = document.createElementNS(svgNs, 'ellipse');
  eyeL.setAttribute('cx', String(size / 2 - 12));
  eyeL.setAttribute('cy', String(size / 2 - 8));
  eyeL.setAttribute('rx', String(size * 0.07));
  eyeL.setAttribute('ry', String(size * 0.09));
  eyeL.setAttribute('fill', '#228b22');
  g.appendChild(eyeL);

  // Right eye
  const eyeR = document.createElementNS(svgNs, 'ellipse');
  eyeR.setAttribute('cx', String(size / 2 + 12));
  eyeR.setAttribute('cy', String(size / 2 - 8));
  eyeR.setAttribute('rx', String(size * 0.07));
  eyeR.setAttribute('ry', String(size * 0.09));
  eyeR.setAttribute('fill', '#228b22');
  g.appendChild(eyeR);

  // Left pupil
  const pupilL = document.createElementNS(svgNs, 'ellipse');
  pupilL.setAttribute('cx', String(size / 2 - 12));
  pupilL.setAttribute('cy', String(size / 2 - 6));
  pupilL.setAttribute('rx', String(size * 0.03));
  pupilL.setAttribute('ry', String(size * 0.05));
  pupilL.setAttribute('fill', '#000');
  g.appendChild(pupilL);

  // Right pupil
  const pupilR = document.createElementNS(svgNs, 'ellipse');
  pupilR.setAttribute('cx', String(size / 2 + 12));
  pupilR.setAttribute('cy', String(size / 2 - 6));
  pupilR.setAttribute('rx', String(size * 0.03));
  pupilR.setAttribute('ry', String(size * 0.05));
  pupilR.setAttribute('fill', '#000');
  g.appendChild(pupilR);

  // Nose
  const nose = document.createElementNS(svgNs, 'polygon');
  nose.setAttribute('points', `${size / 2},${size / 2 + 2} ${size / 2 - 4},${size / 2 + 7} ${size / 2 + 4},${size / 2 + 7}`);
  nose.setAttribute('fill', '#ffb3a8');
  g.appendChild(nose);

  // Mouth
  const mouth = document.createElementNS(svgNs, 'path');
  mouth.setAttribute('d', `M ${size / 2} ${size / 2 + 7} Q ${size / 2 - 7} ${size / 2 + 12} ${size / 2 - 12} ${size / 2 + 10}`);
  mouth.setAttribute('stroke', '#d4845c');
  mouth.setAttribute('stroke-width', '1.5');
  mouth.setAttribute('fill', 'none');
  mouth.setAttribute('stroke-linecap', 'round');
  g.appendChild(mouth);

  // Right mouth
  const mouthR = document.createElementNS(svgNs, 'path');
  mouthR.setAttribute('d', `M ${size / 2} ${size / 2 + 7} Q ${size / 2 + 7} ${size / 2 + 12} ${size / 2 + 12} ${size / 2 + 10}`);
  mouthR.setAttribute('stroke', '#d4845c');
  mouthR.setAttribute('stroke-width', '1.5');
  mouthR.setAttribute('fill', 'none');
  mouthR.setAttribute('stroke-linecap', 'round');
  g.appendChild(mouthR);

  // Tail
  const tail = document.createElementNS(svgNs, 'path');
  tail.setAttribute('d', `M ${size / 2 + 30} ${size / 2 + 15} Q ${size / 2 + 45} ${size / 2}, ${size / 2 + 40} ${size / 2 - 25}`);
  tail.setAttribute('stroke', '#d4845c');
  tail.setAttribute('stroke-width', '6');
  tail.setAttribute('fill', 'none');
  tail.setAttribute('stroke-linecap', 'round');
  g.appendChild(tail);

  return g;
};

const createMouse = (size: number) => {
  const g = document.createElementNS(svgNs, 'g');
  
  // Left ear
  const earL = document.createElementNS(svgNs, 'circle');
  earL.setAttribute('cx', String(size / 2 - 20));
  earL.setAttribute('cy', String(size / 2 - 28));
  earL.setAttribute('r', String(size * 0.12));
  earL.setAttribute('fill', '#a9a9a9');
  earL.setAttribute('stroke', '#696969');
  earL.setAttribute('stroke-width', '1');
  g.appendChild(earL);

  // Right ear
  const earR = document.createElementNS(svgNs, 'circle');
  earR.setAttribute('cx', String(size / 2 + 20));
  earR.setAttribute('cy', String(size / 2 - 28));
  earR.setAttribute('r', String(size * 0.12));
  earR.setAttribute('fill', '#a9a9a9');
  earR.setAttribute('stroke', '#696969');
  earR.setAttribute('stroke-width', '1');
  g.appendChild(earR);

  // Inner ear left
  const innerEarL = document.createElementNS(svgNs, 'circle');
  innerEarL.setAttribute('cx', String(size / 2 - 20));
  innerEarL.setAttribute('cy', String(size / 2 - 28));
  innerEarL.setAttribute('r', String(size * 0.07));
  innerEarL.setAttribute('fill', '#ffb3a8');
  g.appendChild(innerEarL);

  // Inner ear right
  const innerEarR = document.createElementNS(svgNs, 'circle');
  innerEarR.setAttribute('cx', String(size / 2 + 20));
  innerEarR.setAttribute('cy', String(size / 2 - 28));
  innerEarR.setAttribute('r', String(size * 0.07));
  innerEarR.setAttribute('fill', '#ffb3a8');
  g.appendChild(innerEarR);

  // Snout
  const snout = document.createElementNS(svgNs, 'circle');
  snout.setAttribute('cx', String(size / 2));
  snout.setAttribute('cy', String(size / 2 + 5));
  snout.setAttribute('r', String(size * 0.1));
  snout.setAttribute('fill', '#d3d3d3');
  g.appendChild(snout);

  // Left eye
  const eyeL = document.createElementNS(svgNs, 'circle');
  eyeL.setAttribute('cx', String(size / 2 - 11));
  eyeL.setAttribute('cy', String(size / 2 - 10));
  eyeL.setAttribute('r', String(size * 0.05));
  eyeL.setAttribute('fill', '#000');
  g.appendChild(eyeL);

  // Right eye
  const eyeR = document.createElementNS(svgNs, 'circle');
  eyeR.setAttribute('cx', String(size / 2 + 11));
  eyeR.setAttribute('cy', String(size / 2 - 10));
  eyeR.setAttribute('r', String(size * 0.05));
  eyeR.setAttribute('fill', '#000');
  g.appendChild(eyeR);

  // Nose
  const nose = document.createElementNS(svgNs, 'circle');
  nose.setAttribute('cx', String(size / 2));
  nose.setAttribute('cy', String(size / 2 + 5));
  nose.setAttribute('r', String(size * 0.04));
  nose.setAttribute('fill', '#ff99cc');
  g.appendChild(nose);

  // Whiskers
  const whiskerL = document.createElementNS(svgNs, 'line');
  whiskerL.setAttribute('x1', String(size / 2 - 12));
  whiskerL.setAttribute('y1', String(size / 2));
  whiskerL.setAttribute('x2', String(size / 2 - 30));
  whiskerL.setAttribute('y2', String(size / 2 - 2));
  whiskerL.setAttribute('stroke', '#696969');
  whiskerL.setAttribute('stroke-width', '1');
  g.appendChild(whiskerL);

  const whiskerR = document.createElementNS(svgNs, 'line');
  whiskerR.setAttribute('x1', String(size / 2 + 12));
  whiskerR.setAttribute('y1', String(size / 2));
  whiskerR.setAttribute('x2', String(size / 2 + 30));
  whiskerR.setAttribute('y2', String(size / 2 - 2));
  whiskerR.setAttribute('stroke', '#696969');
  whiskerR.setAttribute('stroke-width', '1');
  g.appendChild(whiskerR);

  // Tail
  const tail = document.createElementNS(svgNs, 'path');
  tail.setAttribute('d', `M ${size / 2 + 22} ${size / 2 + 20} Q ${size / 2 + 38} ${size / 2 + 10}, ${size / 2 + 48} ${size / 2 - 10}`);
  tail.setAttribute('stroke', '#696969');
  tail.setAttribute('stroke-width', '3');
  tail.setAttribute('fill', 'none');
  tail.setAttribute('stroke-linecap', 'round');
  g.appendChild(tail);

  return g;
};

const createAnimal = (kind: AnimalKind, size: number) => {
  switch (kind) {
    case 'dog':
      return createDog(size);
    case 'cat':
      return createCat(size);
    case 'mouse':
      return createMouse(size);
    default:
      return createDog(size);
  }
};

export const randomAnimal = () => {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const size = 180; // Larger size for head-only animals
  const animals: AnimalKind[] = ['dog', 'cat', 'mouse'];
  const kind = animals[Math.floor(Math.random() * animals.length)];
  const left = Math.random() * Math.max(10, viewportWidth - size);
  const top = Math.random() * Math.max(10, viewportHeight - size);
  const rotation = (Math.random() * 50 - 25);

  const svg = document.createElementNS(svgNs, 'svg');
  svg.setAttribute('width', String(size));
  svg.setAttribute('height', String(size));
  svg.setAttribute('viewBox', `0 0 ${size} ${size}`);
  svg.classList.add('shape', 'float-up'); // Use float-up animation for animals
  svg.style.left = `${left}px`;
  svg.style.top = `${top}px`;
  svg.style.transform = `rotate(${rotation}deg)`;

  svg.appendChild(createAnimal(kind, size));

  return svg;
};

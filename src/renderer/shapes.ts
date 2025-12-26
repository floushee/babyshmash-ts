const colors = ['#ff6b6b', '#ffd166', '#06d6a0', '#4cc9f0', '#f72585', '#9b5de5', '#f4a261'];
const animations = ['float-up', 'spin-in', 'pop'];

const randomBetween = (min: number, max: number) => Math.random() * (max - min) + min;
const pick = <T,>(list: T[]): T => list[Math.floor(Math.random() * list.length)];

const svgNs = 'http://www.w3.org/2000/svg';

type ShapeKind = 'circle' | 'rect' | 'triangle' | 'star';

const createCircle = (size: number, fill: string) => {
  const circle = document.createElementNS(svgNs, 'circle');
  circle.setAttribute('cx', String(size / 2));
  circle.setAttribute('cy', String(size / 2));
  circle.setAttribute('r', String(size / 2 - 2));
  circle.setAttribute('fill', fill);
  return circle;
};

const createRect = (size: number, fill: string) => {
  const rect = document.createElementNS(svgNs, 'rect');
  rect.setAttribute('x', '2');
  rect.setAttribute('y', '2');
  rect.setAttribute('width', String(size - 4));
  rect.setAttribute('height', String(size - 4));
  rect.setAttribute('rx', String(size * 0.15));
  rect.setAttribute('fill', fill);
  return rect;
};

const createTriangle = (size: number, fill: string) => {
  const triangle = document.createElementNS(svgNs, 'polygon');
  const points = [
    `${size / 2},4`,
    `${size - 4},${size - 4}`,
    `4,${size - 4}`
  ].join(' ');
  triangle.setAttribute('points', points);
  triangle.setAttribute('fill', fill);
  return triangle;
};

const createStar = (size: number, fill: string) => {
  const star = document.createElementNS(svgNs, 'polygon');
  const spikes = 5;
  const outerRadius = size / 2 - 2;
  const innerRadius = outerRadius / 2.5;
  const centerX = size / 2;
  const centerY = size / 2;

  const points: string[] = [];
  for (let i = 0; i < spikes * 2; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const angle = (i * Math.PI) / spikes;
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;
    points.push(`${x},${y}`);
  }

  star.setAttribute('points', points.join(' '));
  star.setAttribute('fill', fill);
  return star;
};

const createShape = (kind: ShapeKind, size: number, fill: string) => {
  switch (kind) {
    case 'circle':
      return createCircle(size, fill);
    case 'rect':
      return createRect(size, fill);
    case 'triangle':
      return createTriangle(size, fill);
    case 'star':
    default:
      return createStar(size, fill);
  }
};

const createLabel = (text: string, size: number) => {
  const label = document.createElementNS(svgNs, 'text');
  label.textContent = text;
  label.setAttribute('x', '50%');
  label.setAttribute('y', '55%');
  label.setAttribute('text-anchor', 'middle');
  label.setAttribute('dominant-baseline', 'middle');
  label.setAttribute('fill', 'rgba(255,255,255,0.9)');
  label.setAttribute('font-size', String(Math.max(18, size * 0.22)));
  label.setAttribute('font-family', 'DM Sans, Manrope, Segoe UI, sans-serif');
  return label;
};

export const randomShape = (triggerLabel: string) => {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const size = randomBetween(120, 240);
  const fill = pick(colors);
  const kind = pick<ShapeKind>(['circle', 'rect', 'triangle', 'star']);
  const left = randomBetween(0, Math.max(10, viewportWidth - size));
  const top = randomBetween(0, Math.max(10, viewportHeight - size));
  const rotation = randomBetween(-25, 25);

  const svg = document.createElementNS(svgNs, 'svg');
  svg.setAttribute('width', String(size));
  svg.setAttribute('height', String(size));
  svg.setAttribute('viewBox', `0 0 ${size} ${size}`);
  svg.classList.add('shape', pick(animations));
  svg.style.left = `${left}px`;
  svg.style.top = `${top}px`;
  svg.style.transform = `rotate(${rotation}deg)`;

  svg.appendChild(createShape(kind, size, fill));
  svg.appendChild(createLabel(triggerLabel.toUpperCase().slice(0, 3), size));

  return svg;
};

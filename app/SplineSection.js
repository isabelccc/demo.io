'use client';

const SPLINE_PUBLIC_URL = 'https://my.spline.design/miniroomartcopy-ZE2wX5K7aZQ2WNLZPN9WWfQo/';

export default function SplineSection() {
  return (
    <iframe
      title="Spline 3D scene"
      src={SPLINE_PUBLIC_URL}
    />
  );
}

import dynamic from 'next/dynamic';

// Dynamically import DotGrid with no SSR
const DotGrid = dynamic(() => import('./DotGrid'), {
  ssr: false,
  loading: () => (
    <section className="dot-grid">
      <div className="dot-grid__wrap">
        <div className="dot-grid__canvas" />
      </div>
    </section>
  ),
});

export default DotGrid;
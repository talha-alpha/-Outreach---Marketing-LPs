export default function Head() {
  return (
    <>
      <link
        rel="preload"
        href="/fonts/BasementGrotesque/BasementGrotesque-Black_v1.202.otf"
        as="font"
        type="font/otf"
        crossOrigin="anonymous"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      {/* Local font is loaded via @font-face in globals.css */}
    </>
  );
}

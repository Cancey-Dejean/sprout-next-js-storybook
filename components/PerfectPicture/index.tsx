import Container from "../Container";
import Video from "../Video";

export default function PerfectPicture() {
  return (
    <section className=" text-white bg-brown">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <h2 className="text-heading-lg  leading-none tracking-[-0.02em] mb-6">
            Find the
            <span className="block">perfect picture</span>
          </h2>

          <p className="text-subtitle">
            Search for images with a Search Block, right inside the space.
            Arrange as many as you want on the canvas.
          </p>
        </div>

        <Video
          autoPlay
          src="/videos/perfect_picture_campfire.mp4"
          className="h-auto"
        />
      </Container>
    </section>
  );
}

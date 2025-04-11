import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
export default function Hero() {
  return (
    <div className="flex flex-col items-center space-y-6 mt-6 md:mt-10 ">
      <h1 className="font-medium text-4xl md:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools{' '}
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          for developers
        </span>
      </h1>
      <p className="text-lg text-center text-neutral-500 max-w-4xl">
        {' '}
        Empower your creativity and bring your VR app ideas to life with out
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center space-x-5">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-red-800 py-3 px-4 rounded-md"
        >
          {' '}
          Start for free
        </a>
        <a href="#" className="border py-3 px-4 rounded-md">
          {' '}
          Documentation
        </a>
      </div>
      <div className="flex justify-center space-x-4 mb-3 ">
        <video
          autoPlay
          loop
          muted
          src={video1}
          type="video/mp4"
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400"
        >
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          src={video2}
          type="video/mp4"
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400"
        >
          {' '}
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

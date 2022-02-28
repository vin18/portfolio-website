import { PEERLIST } from '../config';

const Footer = () => {
  return (
    <footer className="flex justify-center mb-4">
      Made with ❤️ by
      <a
        className="ml-1 font-bold text-blue-900 hover:underline"
        target="_blank"
        href={PEERLIST}
        rel="noreferrer"
      >
        Vinit Raut
      </a>
    </footer>
  );
};

export default Footer;

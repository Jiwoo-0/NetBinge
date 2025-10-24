import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer_ecom = () => {
  const socialIcons = [ FacebookIcon, InstagramIcon, XIcon ];

  return (
    <footer className="bg-black/20">
      <div className="container mx-auto px-4 py-10 text-center lg:px-10">
        <div className="mb-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          {['About Us', 'Contact', 'FAQ', 'Privacy Policy', 'Terms of Service'].map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-sm hover:text-white text-gray-400"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="mb-8 flex justify-center gap-6">
          {socialIcons.map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-400 hover:text-white"
            >
              <Icon fontSize="medium" />
            </a>
          ))}
        </div>

        <p className="text-sm text-gray-400">
          © 2025 NetBinge ● Created By Aaron Ropeta ● All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer_ecom;

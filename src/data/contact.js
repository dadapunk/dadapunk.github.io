import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/dadapunk',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.instagram.com/dadalab.dev/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/sebastian-velasquez-arancibia',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:svelasquez.consultor@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;

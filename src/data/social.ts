import type { IconType } from "react-icons";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";

export type SocialLink = {
  label: string
  href: string
  icon: IconType
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/enspikondplusplus', icon: FaGithub},
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ivan-zhang1', icon: FaLinkedin},
  { label: 'Email', href: 'mailto:ivanz@andrew.cmu.edu', icon: FaEnvelope},
]

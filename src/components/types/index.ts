import { BiChevronDown } from "react-icons/bi";

interface NavProps {
  name: string;
  href: string;
  current: boolean;
  icon?: any;
  hasDropdown?: boolean;
  dropdownItems?: Array<NavProps>;
}

export const navigation: Array<NavProps> = [
  { name: "Home", href: "#", current: true },
  {
    name: "Services",
    href: "#",
    current: false,
    hasDropdown: true,
    icon: BiChevronDown,
    dropdownItems: [
      {
        name: "Home Insurance",
        href: "#",
        current: false,
      },
      {
        name: "Auto Insurance",
        href: "#",
        current: false,
      },
      {
        name: "Life Insurance",
        href: "#",
        current: false,
      },
      {
        name: "Health Insurance",
        href: "#",
        current: false,
      },
      {
        name: "Cybersecurity Insurance",
        href: "#",
        current: false,
      },
      {
        name: "Long-Term Insurance",
        href: "#",
        current: false,
      },
    ],
  },
  { name: "About us", href: "#", current: false },
  { name: "Blog", href: "#", current: false },
  { name: "Career", href: "#", current: false },
];

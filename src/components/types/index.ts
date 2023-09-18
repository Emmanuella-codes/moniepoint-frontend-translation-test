interface NavProps {
  name: string;
  href?: string;
  current: boolean;
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

export const infoItems: Array<NavProps> = [
  { name: "Travel", current: false },
  { name: "Health", current: false },
  { name: "CASCO", current: false },
  { name: "Mortgage", current: false },
  { name: "Fire", current: false },
];

export const services = [
  "Medical expenses",
  "Family health insurance",
  "Vehicle damage",
  "Property loss",
  "Fire",
  "About us",
  "Career",
  "Help",
  "FAQ",
  "Blog",
  "Gift certificate",
  "Affiliate Program",
  "Trainings",
];

export const reviewData = [
  {
    image: "/images/review-1.jpg",
    alt: "review 1",
    name: "Georgia Darcy",
    job: "The agency founder",
    overview:
      "With over twenty years of industry experience. Darcy'sinsurance products' has learned a lot. The one thing we know for sure is that we're all about you. If you find searching for insurance frustrating, we are here to help.",
  },
  {
    image: "/images/review-2.jpg",
    alt: "review 2",
    name: "Emiko Sato",
    job: "Insurance appraiser",
    overview:
      "Hi! I estimate the value of the insured events. Also, I conduct investigations, inspecting damaged cars and buildings. Therefore, I have a great responsibility for providing insurance to our clients. I hope you will be comfortable with us.",
  },
  {
    image: "/images/review-1.jpg",
    alt: "review 3",
    name: "Georgia Darcy",
    job: "The agency founder",
    overview:
      "With over twenty years of industry experience. Darcy'sinsurance products' has learned a lot. The one thing we know for sure is that we're all about you. If you find searching for insurance frustrating, we are here to help.",
  },
  {
    image: "/images/review-2.jpg",
    alt: "review 4",
    name: "Emiko Sato",
    job: "Insurance appraiser",
    overview:
      "Hi! I estimate the value of the insured events. Also, I conduct investigations, inspecting damaged cars and buildings. Therefore, I have a great responsibility for providing insurance to our clients. I hope you will be comfortable with us.",
  },
  {
    image: "/images/review-1.jpg",
    alt: "review 5",
    name: "Georgia Darcy",
    job: "The agency founder",
    overview:
      "With over twenty years of industry experience. Darcy'sinsurance products' has learned a lot. The one thing we know for sure is that we're all about you. If you find searching for insurance frustrating, we are here to help.",
  },
];

export const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(" ");
};


export interface Service {
  id: number;
  name: string;
  logo: string;
  backupLogo: string;
  description: string;
  website: string;
}

export const services: Service[] = [
  {
    id: 1,
    name: 'Amer',
    logo: '/lovable-uploads/f9e6fefe-cf24-4223-ab43-eaf26d20d6a6.png',
    backupLogo: './images/amer-logo.svg',
    description: 'Amer offers comprehensive visa and residency services, including applications, renewals, and status inquiries for UAE residents and visitors.',
    website: 'https://www.amer.ae',
  },
  {
    id: 2,
    name: 'Tasheel',
    logo: '/lovable-uploads/f98ccb7d-4913-4d5e-9a09-698657d276ba.png',
    backupLogo: './images/tasheel-logo.svg',
    description: 'Tasheel provides streamlined business services, including company registration, licensing, and document processing for UAE enterprises.',
    website: 'https://www.tasheel.ae',
  },
  {
    id: 3,
    name: 'Tawjeeh',
    logo: '/lovable-uploads/706a4e06-d067-4532-b48e-adf06c63e39a.png',
    backupLogo: './images/tawjeeh-logo.svg',
    description: 'Tawjeeh delivers guidance and orientation services for UAE newcomers, including cultural orientation and local regulations assistance.',
    website: 'https://www.tawjeeh.ae',
  }
];

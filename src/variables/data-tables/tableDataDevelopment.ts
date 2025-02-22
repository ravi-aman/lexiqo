type RowObj = {
  name: string;
  tech: string[];
  date: string;
  progress: number;
};

const tableDataComplex: RowObj[] = [
  {
    name: 'Case Management System',
    tech: ['AI Legal Assistant', 'Cloud Storage', 'Windows'],
    date: '10.Mar.2023',
    progress: 80.2,
  },
  {
    name: 'Client Consultation Portal',
    tech: ['Chatbot', 'Video Call', 'Android'],
    date: '15.Apr.2023',
    progress: 45.7,
  },
  {
    name: 'Legal Research Database',
    tech: ['AI Legal Assistant', 'Search Engine'],
    date: '20.Jun.2023',
    progress: 60.5,
  },
  {
    name: 'E-Signature Platform',
    tech: ['Blockchain', 'Cloud Storage', 'iOS'],
    date: '05.Sep.2023',
    progress: 90,
  },
  {
    name: 'Lawyer Dashboard',
    tech: ['Analytics', 'Windows', 'iOS'],
    date: '18.Nov.2023',
    progress: 75.5,
  },
  {
    name: 'Court Case Tracker',
    tech: ['AI Predictions', 'Cloud Storage'],
    date: '07.Jan.2024',
    progress: 70.3,
  },
  {
    name: 'Digital Legal Forms',
    tech: ['E-Signature', 'Cloud Storage', 'Windows'],
    date: '22.Feb.2024',
    progress: 85.9,
  },
  {
    name: 'Contract Review AI',
    tech: ['AI Legal Assistant', 'Blockchain'],
    date: '03.Mar.2024',
    progress: 50,
  },
  {
    name: 'Online Dispute Resolution',
    tech: ['Chatbot', 'Video Call', 'Android'],
    date: '15.Mar.2024',
    progress: 65.4,
  },
  {
    name: 'Virtual Law Office',
    tech: ['Cloud Storage', 'Windows', 'iOS'],
    date: '10.Apr.2024',
    progress: 90.5,
  },
  {
    name: 'Legal Analytics Dashboard',
    tech: ['Analytics', 'AI Legal Assistant'],
    date: '05.May.2024',
    progress: 78.2,
  },
];

export default tableDataComplex;

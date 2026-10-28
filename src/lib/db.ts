import fs from 'fs';
import path from 'path';

export interface ContactInquiry {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  branch?: string;
  sport?: string;
  ageGroup?: string;
  message: string;
  locale: string;
  createdAt: string;
  status: 'new' | 'reviewed' | 'contacted';
}

const DATA_DIR = path.join(process.cwd(), '.data');
const DB_FILE = path.join(DATA_DIR, 'inquiries.json');

function ensureDbFile(): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(DB_FILE)) {
      fs.writeFileSync(DB_FILE, JSON.stringify([], null, 2), 'utf-8');
    }
  } catch (err) {
    console.error('Error initializing contact database store:', err);
  }
}

export function saveInquiry(data: Omit<ContactInquiry, 'id' | 'createdAt' | 'status'>): ContactInquiry {
  ensureDbFile();
  const inquiry: ContactInquiry = {
    ...data,
    id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    createdAt: new Date().toISOString(),
    status: 'new',
  };

  try {
    const raw = fs.readFileSync(DB_FILE, 'utf-8');
    const records: ContactInquiry[] = JSON.parse(raw || '[]');
    records.unshift(inquiry);
    fs.writeFileSync(DB_FILE, JSON.stringify(records, null, 2), 'utf-8');
  } catch (e) {
    console.error('Failed to write inquiry to file store:', e);
  }

  return inquiry;
}

export function getAllInquiries(): ContactInquiry[] {
  ensureDbFile();
  try {
    const raw = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(raw || '[]');
  } catch {
    return [];
  }
}

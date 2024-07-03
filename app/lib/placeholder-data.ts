// placeholder-data.ts

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  image_url: string;
}

export interface Invoice {
  customer_id: string;
  amount: number;
  status: string;
  date: string;
}

export interface Revenue {
  month: string;
  revenue: number;
}

const users: User[] = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
  // Add more users as needed
];

const customers: Customer[] = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  // Add more customers as needed
];

const invoices: Invoice[] = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  // Add more invoices as needed
];

const revenue: Revenue[] = [
  { month: 'Jan', revenue: 2000 },
  // Add more revenue data as needed
];

export { users, customers, invoices, revenue };

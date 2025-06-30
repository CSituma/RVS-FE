#  RVS Volunteers Dashboard

A clean, accessible, and paginated volunteer directory built with **Next.js 15**, **TypeScript**, **TailwindCSS**, and **Jest**.

## 📌 Features

- Server Components with **ISR**
- Paginated data from [randomuser.me](https://randomuser.me/) API
- Fully **typed** using TypeScript
- Context API
- Accessible HTML with ARIA labels
- Simple API unit tests using **Jest**


## 🛠️ Tech Stack

- Node.js `v18.x` or later
- Next.js `v15`
- TypeScript
- Tailwind CSS
- Jest

---

## 🧰 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/CSituma/RVS.git
cd RVS-FE
```

## 🧪 Run Tests

```bash
npm run test
```

## 🚀 Start Dev Server

```bash
npm run dev
````

📁 Folder Structure

```
src/
│
├── app/
│   └── volunteers/
│       └── [page]/            
│           ├── page.tsx         
│           ├── error.tsx     
     ├── layout.tsx    
     ├── page.tsx 
     ├── global.css      
│
├── components/
│   ├── VolunteerCard.tsx            
│   ├── VolunteerList.tsx            
│   ├── Pagination.tsx                
│   └── icons/
│       ├── EmailIcon.tsx
│       └── PhoneIcon.tsx
│
├── context/
│   └── VolunteersProvider.tsx        
│
├── lib/
│   └── api.ts                       
│
├── types/
│   └── Volunteers.ts                
│
└── __tests__/                      
    └── getVolunteers.test.tsx

```






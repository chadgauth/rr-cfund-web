# Contributing to Rainbow Rise

Welcome to Rainbow Rise! This guide will help you get started with contributing to our LGBTQ+ crowdfunding platform, especially if you're coming from a backend development background and are new to React.

## 🌈 Project Overview

Rainbow Rise is a crowdfunding platform that empowers the LGBTQ+ community to create and fund safe, vibrant venues. The platform combines modern web technologies with powerful storytelling and AI-generated content.

### Technology Stack
- **Frontend**: React.js with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Build Tool**: Vite
- **Deployment**: Replit (with Cloudflare support)

## 🚀 Getting Started

### Prerequisites
- Node.js (comes pre-installed in Replit)
- Basic understanding of JavaScript/TypeScript
- Familiarity with REST APIs (you already know this!)

### Quick Setup
1. The project runs automatically in Replit
2. Click the "Run" button or use the workflow "Start application"
3. The app will be available at the provided URL
4. Changes auto-reload thanks to Vite's hot module replacement

### Environment Variables
The following secrets are already configured:
- `DATABASE_URL` - PostgreSQL connection string
- `OPENROUTER_API_KEY` - For AI-generated content
- `CLOUDFLARE_API_TOKEN` - For deployment

## 📁 Project Structure

Understanding the file structure is crucial for React development:

```
rainbow-rise/
├── client/                     # Frontend React application
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── ui/            # Base UI components (buttons, forms, etc.)
│   │   │   ├── home/          # Homepage-specific components
│   │   │   ├── campaigns/     # Campaign-related components
│   │   │   └── layout/        # Header, footer, navigation
│   │   ├── pages/             # Route components (like controllers)
│   │   ├── lib/               # Utility functions and API calls
│   │   ├── hooks/             # Custom React hooks
│   │   ├── App.tsx            # Main app component with routing
│   │   └── main.tsx           # Application entry point
│   └── index.html             # HTML template
├── server/                     # Backend Express application
│   ├── index.ts               # Server entry point
│   ├── routes.ts              # API endpoints (like your REST controllers)
│   ├── storage.ts             # Database operations (like your DAOs)
│   └── db.ts                  # Database connection setup
├── shared/
│   └── schema.ts              # Database schema and TypeScript types
└── package.json               # Dependencies and scripts
```

## 🎯 React Concepts for Backend Developers

### Components vs. Routes
Think of React components like **template functions** that return HTML:

```typescript
// Like a function that returns a view
function CampaignCard({ campaign }) {
  return (
    <div className="card">
      <h3>{campaign.title}</h3>
      <p>${campaign.raised} raised</p>
    </div>
  );
}
```

### Pages vs. Components
- **Pages** (`/src/pages/`) = Your route handlers (like controllers)
- **Components** (`/src/components/`) = Reusable pieces (like partial views)

### State Management
React uses "state" instead of server-side sessions:

```typescript
// Like storing data in memory for a user session
const [campaigns, setCampaigns] = useState([]);
const [loading, setLoading] = useState(false);
```

### Data Fetching
We use **React Query** instead of direct API calls:

```typescript
// Similar to calling a service layer
const { data: campaigns, isLoading } = useQuery({
  queryKey: ['/api/campaigns'],
  queryFn: () => fetch('/api/campaigns').then(res => res.json())
});
```

## 🔧 Backend Structure (Familiar Territory!)

### API Routes (`server/routes.ts`)
This works just like your typical REST controllers:

```typescript
// GET /api/campaigns
app.get("/api/campaigns", async (req, res) => {
  try {
    const campaigns = await storage.getCampaigns();
    res.json(campaigns);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

### Database Layer (`server/storage.ts`)
Think of this as your Data Access Object (DAO):

```typescript
export class DatabaseStorage implements IStorage {
  async getCampaigns(): Promise<Campaign[]> {
    return await db.select().from(campaigns);
  }
  
  async createCampaign(campaign: InsertCampaign): Promise<Campaign> {
    const [newCampaign] = await db
      .insert(campaigns)
      .values(campaign)
      .returning();
    return newCampaign;
  }
}
```

### Database Schema (`shared/schema.ts`)
Using Drizzle ORM (similar to Hibernate/Entity Framework):

```typescript
export const campaigns = pgTable("campaigns", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  goal: decimal("goal", { precision: 10, scale: 2 }).notNull(),
  // ... other fields
});
```

## 🛠️ Development Workflow

### Making Changes

1. **Frontend Changes**:
   - Edit files in `client/src/`
   - Changes auto-reload in browser
   - Check browser console for errors

2. **Backend Changes**:
   - Edit files in `server/`
   - Server auto-restarts
   - Check terminal for errors

3. **Database Changes**:
   - Update schema in `shared/schema.ts`
   - Run `npm run db:push` to apply changes

### Testing Your Changes

1. **Frontend Testing**:
   ```bash
   # Open browser dev tools (F12)
   # Check Console tab for JavaScript errors
   # Check Network tab for API calls
   ```

2. **Backend Testing**:
   ```bash
   # Use curl or Postman to test APIs
   curl -X GET http://localhost:5000/api/campaigns
   curl -X POST http://localhost:5000/api/campaigns \
     -H "Content-Type: application/json" \
     -d '{"title":"Test Campaign","goal":"1000"}'
   ```

3. **Database Testing**:
   ```bash
   # Check the database directly
   npm run db:studio  # Opens Drizzle Studio (database GUI)
   ```

## 📝 Common Development Tasks

### Adding a New API Endpoint

1. **Define the route** in `server/routes.ts`:
```typescript
app.get("/api/donations/:campaignId", async (req, res) => {
  const campaignId = parseInt(req.params.campaignId);
  const donations = await storage.getDonationsByCampaign(campaignId);
  res.json(donations);
});
```

2. **Add storage method** in `server/storage.ts`:
```typescript
async getDonationsByCampaign(campaignId: number): Promise<Donation[]> {
  return await db.select()
    .from(donations)
    .where(eq(donations.campaignId, campaignId));
}
```

3. **Create frontend API call** in `client/src/lib/api.ts`:
```typescript
export const fetchDonationsByCampaign = async (campaignId: number): Promise<Donation[]> => {
  const response = await fetch(`/api/donations/${campaignId}`);
  return response.json();
};
```

### Adding a New React Component

1. **Create the component file**:
```typescript
// client/src/components/DonationsList.tsx
import { useQuery } from '@tanstack/react-query';
import { fetchDonationsByCampaign } from '@/lib/api';

interface DonationsListProps {
  campaignId: number;
}

export function DonationsList({ campaignId }: DonationsListProps) {
  const { data: donations, isLoading } = useQuery({
    queryKey: ['/api/donations', campaignId],
    queryFn: () => fetchDonationsByCampaign(campaignId)
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h3>Recent Donations</h3>
      {donations?.map(donation => (
        <div key={donation.id}>
          ${donation.amount} from {donation.donorName}
        </div>
      ))}
    </div>
  );
}
```

2. **Use it in a page**:
```typescript
// client/src/pages/CampaignDetail.tsx
import { DonationsList } from '@/components/DonationsList';

export default function CampaignDetail() {
  return (
    <div>
      {/* other campaign details */}
      <DonationsList campaignId={campaignId} />
    </div>
  );
}
```

### Adding a New Database Table

1. **Define the schema** in `shared/schema.ts`:
```typescript
export const updates = pgTable("updates", {
  id: serial("id").primaryKey(),
  campaignId: integer("campaign_id").references(() => campaigns.id),
  title: varchar("title", { length: 255 }).notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});

export type Update = typeof updates.$inferSelect;
export type InsertUpdate = typeof updates.$inferInsert;
```

2. **Push to database**:
```bash
npm run db:push
```

3. **Add storage methods** and **API endpoints** following the pattern above.

## 🎨 Styling Guidelines

We use **Tailwind CSS** for styling. Think of it as inline CSS classes:

```typescript
// Instead of writing CSS files
<div className="bg-purple-500 text-white p-4 rounded-lg shadow-md">
  <h3 className="text-xl font-bold mb-2">Campaign Title</h3>
  <p className="text-purple-100">Description text</p>
</div>
```

### Common Tailwind Patterns:
- `bg-purple-500` = background color
- `text-white` = text color
- `p-4` = padding
- `rounded-lg` = border radius
- `shadow-md` = drop shadow
- `flex items-center` = flexbox centering

## 🐛 Debugging Tips

### Frontend Debugging:
1. **Browser Dev Tools** (F12):
   - Console: JavaScript errors and `console.log()`
   - Network: API requests and responses
   - Elements: Inspect HTML and CSS

2. **React Developer Tools** (browser extension):
   - Inspect component state and props
   - Track re-renders and performance

### Backend Debugging:
1. **Server Console**: Check terminal for Express.js logs
2. **API Testing**: Use curl, Postman, or browser dev tools
3. **Database Queries**: Use `console.log()` in storage methods

### Common Issues:
- **CORS errors**: Backend and frontend run on same port, so this shouldn't happen
- **Database connection**: Check `DATABASE_URL` environment variable
- **Import errors**: Make sure file paths use correct aliases (`@/` for client files)

## 🚦 Development Commands

```bash
# Start the application (runs both frontend and backend)
npm run dev

# Database operations
npm run db:push          # Apply schema changes to database
npm run db:studio        # Open database GUI

# View logs
# Check the terminal for server logs
# Check browser console for frontend logs
```

## 📚 Key Dependencies

### Frontend Libraries:
- **React**: UI framework
- **React Query**: Server state management (like caching API responses)
- **Wouter**: Routing (like Express routes but for frontend)
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Pre-built component library

### Backend Libraries:
- **Express.js**: Web framework (you know this!)
- **Drizzle ORM**: Database toolkit (like Sequelize/TypeORM)
- **Zod**: Runtime type validation (like Joi)

## 🤝 Contributing Guidelines

### Before You Start:
1. Read through this guide
2. Explore the codebase to understand the structure
3. Run the app locally and click around

### Making Changes:
1. **Small changes**: Edit directly and test
2. **New features**: Plan the API first, then build frontend
3. **Database changes**: Always update schema first

### Code Style:
- Use TypeScript for type safety
- Follow existing naming conventions
- Add comments for complex logic
- Keep components small and focused

### Testing:
- Test API endpoints with curl/Postman
- Check frontend functionality in browser
- Verify database changes with Drizzle Studio

## 🆘 Getting Help

### Common Resources:
- **React Docs**: https://react.dev/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Drizzle ORM**: https://orm.drizzle.team/
- **Express.js**: https://expressjs.com/

### Understanding Error Messages:
- **TypeScript errors**: Usually type mismatches, check your interfaces
- **React errors**: Often missing dependencies or incorrect hooks usage
- **Database errors**: Check schema definitions and foreign keys

### When Stuck:
1. Check the browser console for detailed error messages
2. Look at similar working examples in the codebase
3. Start with the backend API first, then build the frontend

## 🌟 Next Steps

1. **Explore the code**: Start with `client/src/App.tsx` to see routing
2. **Make a small change**: Try updating text or colors
3. **Add a simple feature**: Maybe a new API endpoint that returns static data
4. **Build something bigger**: Add a new page or component

Remember: React is just JavaScript with a different way of organizing code. Your backend experience with APIs, databases, and server logic translates directly - you're just learning a new way to build user interfaces!

Welcome to the Rainbow Rise community! 🌈
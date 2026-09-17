# Grow My Therapy — Stage 2 Assignment

## Dr. Maya Reynolds, PsyD — Front-End Website

This project is a Next.js + Tailwind CSS implementation for the Grow My Therapy Stage 2 assignment. It preserves the main information architecture of the supplied Conejo Valley Family Counseling homepage while redesigning the visual theme and rewriting the content around the supplied Dr. Maya Reynolds profile.

### Stack
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v4
- Lucide React

### Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Build for production

```bash
npm run build
npm start
```

### Assignment implementation

- Responsive desktop/tablet/mobile layout
- Original homepage hierarchy recreated: hero → intro → who I work with → expertise → approach → specialties → therapist → appointment → FAQs → contact
- New sage / cream / clay visual system
- Copy is based on the supplied Dr. Maya Reynolds, PsyD profile
- Three profile-relevant services: Anxiety & Panic, Trauma Therapy, Burnout & Perfectionism
- Custom **Our Office** section required by the assignment
- Santa Monica in-person + California telehealth messaging
- SEO title and description
- Accessible navigation and mobile menu

### Image note

The supplied PDF contains an office-image Google Drive folder link but does not provide a direct Maya portrait file in the attachment. The project therefore uses clearly labelled illustrative/stock visuals rather than falsely presenting a stock image as Dr. Reynolds. Before final submission, replace the therapist portrait and the two office images with the exact profile images from the provided Drive folder if accessible.

The profile supplied for the assignment lists the office as:
`123th Street 45 W, Santa Monica, CA 90401`

### Deployment

Push this folder to a public GitHub repository and import the repository into Vercel. No environment variables are required.

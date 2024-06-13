import {defineCollection, z} from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string({required_error: "Project Name is required"}),
    tagLine: z.string(),
    start: z.string(),
    end: z.string(),
    role:  z.string(),
    client: z.string(),
    company: z.object({
      name: z.string(),
      logo: z.string(),
    })
  })
})

const profileCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    profilePhoto: z.string(),
    fullName: z.string(),
    bio: z.string(),
    experience: z.array(z.object({
      name: z.string(),
      role: z.string(),
      joiningDate: z.string(),
      leavingDate: z.string(),
      companyLogo: z.string(),
    })),
    socials: z.array(z.object({
      name: z.string(),
      link: z.string(),
      logo: z.string(),
    }))
  })
})

export const collections = {
  projects: projectsCollection,
  profile: profileCollection,
}

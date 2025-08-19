import { ProjectYearGroup } from "@/types/project"

export const projectData: ProjectYearGroup[] = [
    {
        year: 2025,
        projects: [
            {
                title: 'ParkPal',
                description: `
                    Android application that helps users explore national parks by searching for parks, 
                    viewing detailed information, tracking visited locations, discovering popular destinations, 
                    and planning trips with an integrated AI assistant.`,
                actions: {
                    demo: 'https://www.youtube.com/watch?v=LTI_4Dn43mc',
                    github: 'https://github.com/thomas944/ParkPal',
                },
            },
        ],
    },
    {
        year: 2024,
        projects: [
            {
                title: 'MNIST Model Explorer',
                description: `Created an app for generating typographic art...`,
                actions: {
                    visit: 'https://mnist-digit-explorer-cpj1.vercel.app/',
                    github: 'https://github.com/thomas944/mnist-digit-explorer',
                },
            },
        ],
    },
];
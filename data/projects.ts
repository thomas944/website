import { ProjectYearGroup } from "@/types/project"

export const projectData: ProjectYearGroup[] = [
    {
        year: 2025,
        projects: [
            {
                title: 'project1',
                description: `Created an app for generating typographic art...`,
                actions: {
                    visit: true,
                    demo: true,
                    github: true,
                },
            },
            {
                title: 'project2',
                description: 'description2',
                actions: {
                    visit: true,
                    github: true,
                    demo: false,
                },
            },
        ],
    },
    {
        year: 2024,
        projects: [
            {
                title: 'project1',
                description: `Created an app for generating typographic art...`,
                actions: {
                    visit: true,
                    demo: true,
                    github: true,
                },
            },
        ],
    },
];
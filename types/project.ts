export interface Actions {
    // visit: boolean;
    // github: boolean;
    // demo: boolean;
    visit?: string;
    github?: string;
    demo?: string;
}

export interface Project {
    title: string;
    description: string;
    actions: Actions;
}

export interface ProjectYearGroup {
    year: number;
    projects: Project[];
}
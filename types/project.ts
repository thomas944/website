export interface Actions {
    visit: boolean;
    github: boolean;
    demo: boolean;
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
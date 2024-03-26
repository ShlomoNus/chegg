export type User = {
    login: string;
    avatar_url: string;
    html_url: string;
    repos_url: string;
    location: string;
    bio: string;
    public_repos: number;
    followers: number;
    created_at: string;
    updated_at: string;
};

export type Details = {
    html_url: string;
    name?: string;
    login?: string;
};

export type DetailsWithName = {
    html_url: string;
    name: string;
};

export type DetailsWithLogin = {
    html_url: string;
    login: string;
};

export type Segment = 'followers' | 'repos';

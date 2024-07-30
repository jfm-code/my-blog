interface BilingualObject {
    EN: string,
    VN: string
}

export interface TutorialObject {
    name: string;
    list: [{
        path: string;
        title: string;
        image_link: string;
        embed_link: string;
    }];
}

export interface PictureObject {
    style: string;
    link: string;
}

export interface AlbumObject {
    name: BilingualObject;
    time: BilingualObject;
    path: string;
    latest_album: boolean;
    images: (PictureObject | string)[];
}

export interface VideoObject {
    title: string,
    embed_link: string,
    lightbox_link: string,
    latest_video: boolean,
}

export interface PostObject {
    path: string,
    title: BilingualObject,
    image_link: string,
    date: BilingualObject,
    short_description: BilingualObject,
    content: BilingualObject,
    tags: string[]
}

export interface TopicObject {
    name: BilingualObject;
}

export interface NavigationObject {
    name: string,
    list: [{
        name: string,
        path: string,
    }]
}

export interface OnlyLinkObject {
    link: string
}

export interface AboutMeObject {
    profilepic_link: string,
    overview_myself: string,
    overview_blog: string,
    blogpic_link: string,
    timeline: [{
        year: string,
        summary: string,
        details: string[],
    }]
}
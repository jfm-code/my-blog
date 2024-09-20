interface BilingualObject {
    EN: string,
    VN: string
}

export interface TutorialObject {
    name: BilingualObject;
    list: [{
        path: string;
        title: BilingualObject;
        description: BilingualObject;
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
    description: BilingualObject;
}

export interface VideoObject {
    title: BilingualObject,
    embed_link: string,
    lightbox_link: string,
    description: BilingualObject
}

export interface PostObject {
    path: string,
    title: BilingualObject,
    image_link: string,
    date: BilingualObject,
    short_description: BilingualObject,
    content: BilingualObject,
    tags: BilingualObject[]
}

export interface TopicObject {
    name: BilingualObject;
}

export interface NavigationObject {
    name: BilingualObject,
    list: [{
        name: BilingualObject,
        path: string,
    }]
}

export interface OnlyLinkObject {
    link: string
}

export interface AboutMeObject {
    profilepic_link: string,
    overview_myself: BilingualObject[],
    overview_blog: BilingualObject[],
    blogpic_link: string,
    timeline: [{
        year: string,
        summary: BilingualObject,
        details: BilingualObject[],
    }]
}
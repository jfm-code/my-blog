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
    name: string;
    time: string;
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
    title: string,
    image_link: string,
    tags: []
}

export interface TopicObject {
    name: string;
}

export interface NavbarElementObjet {
    name: string,
    path: string,
  }
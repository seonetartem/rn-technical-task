import { uuid } from '../utils/uuid'

export type PictureObject = {
    id: string;
    url: string;
    name: string;
}

export function createPictureObject(link: string): PictureObject {
    return {
        id: uuid(),
        url: link,
        name: getName(link)
    }
}

function getName(link: string): string {
    let dogName = ''
    const pattern = /\/breeds\/([a-zA-Z-]+)\//;
    const match = link.match(pattern);

    if (match) {
        dogName = match[1];
    }
    return dogName
}
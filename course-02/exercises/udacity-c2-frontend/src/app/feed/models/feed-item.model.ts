export interface FeedItem {
    id: number;
    url: string;
    caption: string;
    createdAt: Date;
}

export const feedItemMocks: FeedItem[] = [
    {
    id: 0,
    url: '/assets/mock/xander0.jpg',
    caption: 'Such a cute pup',
    createdAt: new Date()

    },
    {
    id: 0,
    url: '/assets/mock/xander1.jpg',
    caption: 'Who\'s a good boy?',
    createdAt: new Date()
    },
    {
    id: 0,
    url: '/assets/mock/xander2.jpg',
    caption: 'Majestic.',
    createdAt: new Date()
    }
];

interface FolderItem {
  id: string;
  name: string;
  type: "folder" | "deck"| "repository_folder" | "repository_deck";
  childrenCount: string;
  author?: string;  
  isRecentItem?: boolean;
  isUnpublishedChangesPresent: boolean;
  isOutOfSync: boolean;
  isPublished: boolean;
  onItemPress?: () => void;
}

export const folderStructure: FolderItem[] = [
  {
    id: '1',
    name: 'Recent Deck',
    type: 'deck',
    childrenCount: '',
    author: '',
    isUnpublishedChangesPresent: false,
    isOutOfSync: false,
    isPublished: false
  },
  {
    id: '2',
    name: 'Greeting',
    type: 'deck',
    childrenCount: '4',
    author: '',
    isUnpublishedChangesPresent: false,
    isOutOfSync: false,
    isPublished: false,
    isRecentItem: true,
  },
  {
    id: '3',
    name: 'Numbers',
    type: 'deck',
    childrenCount: '3',
    author: '',
    isUnpublishedChangesPresent: false,
    isOutOfSync: false,
    isPublished: false,
    isRecentItem: true,
  },
  {
    id: '4',
    name: 'French Food',
    type: 'deck',
    childrenCount: '3',
    author: '',
    isUnpublishedChangesPresent: false,
    isOutOfSync: false,
    isPublished: false,
    isRecentItem: true,
  },

  {
    id: '5',
    name: 'Spanish Basics ',
    type: 'folder',
    childrenCount: '2',
    author: '',
    isUnpublishedChangesPresent: true,
    isOutOfSync: false,
    isPublished: true,
  },
  {
    id: '6',
    name: 'French Food 1',
    type: 'deck',
    childrenCount: '3',
    author: '',
    isUnpublishedChangesPresent: false,
    isOutOfSync: false,
    isPublished: true,
  },
  {
    id: '7',
    name: 'EnglishTeacherUA',
    type: 'repository_folder',
    childrenCount: '1',
    author: 'EnglishTeacherUA',
    isUnpublishedChangesPresent: false,
    isOutOfSync: false,
    isPublished: false
  },

  {
    id: '8',
    name: 'Greeting',
    type: 'deck',
    childrenCount: '4',
    author: '',
    isUnpublishedChangesPresent: false,
    isOutOfSync: false,
    isPublished: true,
  },
  {
    id: '9',
    name: 'Spanish Basics',
    type: 'folder',
    childrenCount: '2',
    author: '',
    isUnpublishedChangesPresent: true,
    isOutOfSync: false,
    isPublished: true
  },
  {
    id: '10',
    name: 'French Food',
    type: 'deck',
    childrenCount: '3',
    author: '',
    isUnpublishedChangesPresent: false,
    isOutOfSync: false,
    isPublished: false,
  },
  {
    id: '11',
    name: 'EnglishTeacherUA',
    type: 'repository_folder',
    childrenCount: '1',
    author: 'EnglishTeacherUA',
    isUnpublishedChangesPresent: false,
    isOutOfSync: false,
    isPublished: false
  },

];

interface FolderItem {
  id: string;
  typeIcon: string;
  name: string;
  childrenCount: string;
  // childrenCount: number;
  textDescr: string;
  folderDeckStatus: string;
  actionElement: string | null;
  isRecentItem?: boolean;
}

export const folderStructure: FolderItem[] = [
  {
    id: '1',
    typeIcon: '',
    name: 'Recent Deck',
    childrenCount: '',
    textDescr: '',
    folderDeckStatus: '',
    actionElement: 'ArrowDropDown',
    // isRecentItem: undefined
  },
  {
    id: '2',
    typeIcon: 'CardsIcon',
    name: 'Chapter 1',
    childrenCount: '',
    textDescr: 'PockVoc → English for Everyone Course...',
    folderDeckStatus: '',
    actionElement: 'GloboIcon',
    isRecentItem: true,
  },
  {
    id: '3',
    typeIcon: 'CardsIcon',
    name: 'Marvel heroes',
    childrenCount: '',
    textDescr: 'PockVoc',
    folderDeckStatus: '',
    actionElement: '',
    isRecentItem: true,
  },
  {
    id: '4',
    typeIcon: 'CardsIcon',
    name: 'Unit1',
    childrenCount: '',
    textDescr: 'Halyna Fedorivna → Opportunities 11 form',
    folderDeckStatus: '',
    actionElement: 'GloboIcon',
    isRecentItem: true,
  },

  {
    id: '5',
    typeIcon: 'FolderIcon',
    name: 'Spanish Basics',
    childrenCount: '2',
    textDescr: 'items',
    folderDeckStatus: 'Unpublished changes',
    actionElement: 'DotsVertical',
  },
  {
    id: '6',
    typeIcon: 'CardsIcon',
    name: 'French Food',
    childrenCount: '3',
    textDescr: 'words',
    folderDeckStatus: 'Draft',
    actionElement: 'DotsVertical',
  },
  {
    id: '7',
    typeIcon: 'Repository',
    name: 'EnglishTeacherUA',
    childrenCount: '1',
    textDescr: 'item',
    folderDeckStatus: '',
    actionElement: 'DotsVertical',
  },

  {
    id: '8',
    typeIcon: 'FolderIcon',
    name: 'Spanish Basics',
    childrenCount: '2',
    textDescr: 'items',
    folderDeckStatus: 'Unpublished changes',
    actionElement: 'DotsVertical',
  },
  {
    id: '9',
    typeIcon: 'CardsIcon',
    name: 'French Food',
    childrenCount: '3',
    textDescr: 'words',
    folderDeckStatus: 'Draft',
    actionElement: 'DotsVertical',
  },
  {
    id: '10',
    typeIcon: 'Repository',
    name: 'EnglishTeacherUA',
    childrenCount: '1',
    textDescr: 'item',
    folderDeckStatus: '',
    actionElement: 'DotsVertical',
  },

  // {
  //   id: '11',
  //   typeIcon: 'FolderIcon',
  //   name: 'English for Everyone Course Book. A very good book for learning English',
  //   textDescr: '',
  //   actionElement: 'GloboIcon',
  // },
  // {
  //   id: '12',
  //   typeIcon: 'FolderIcon',
  //   name: 'Math formulas ',
  //   textDescr: '',
  //   actionElement: null,
  // },
  // {
  //   id: '13',
  //   typeIcon: 'FolderIcon',
  //   name: 'Marvel heroes',
  //   textDescr: '',
  //   actionElement: null,
  // },
  // {
  //   id: '14',
  //   typeIcon: 'FolderIcon',
  //   name: 'English for Everyone Course Book. A very good book for learning English',
  //   textDescr: '',
  //   actionElement: 'GloboIcon',
  // },
  // {
  //   id: '15',
  //   typeIcon: 'FolderIcon',
  //   name: 'English for Everyone Course Book. A very good book for learning English',
  //   textDescr: '',
  //   actionElement: null,
  // },
  // {
  //   id: '16',
  //   typeIcon: 'FolderIcon',
  //   name: 'English for Everyone Course Book. A very good book for learning English',
  //   textDescr: '',
  //   actionElement: 'GloboIcon',
  // },
  // {
  //   id: '17',
  //   typeIcon: 'FolderIcon',
  //   name: 'English for Everyone Course Book. A very good book for learning English',
  //   textDescr: '',
  //   actionElement: 'GloboIcon',
  // },

];

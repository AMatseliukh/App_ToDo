interface FolderItem {
  // isrecentItem: unknown;
  id: string;
  leadingElement: string;
  text: string;
  textDescr: string;
  trailingElement: string | null;
  isRecentItem?: boolean;
}

export const folderStructure: FolderItem[] = [
  {
    id: '1',
    leadingElement: '',
    text: 'Recent',
    textDescr: '',
    trailingElement: 'ArrowDropDown',
  },
  {
    id: '2',
    leadingElement: 'CardsIcon',
    text: 'Chapter 1',
    textDescr: 'PockVoc → English for Everyone Course...',
    trailingElement: 'GloboIcon',
    isRecentItem: true,
  },
  {
    id: '3',
    leadingElement: 'CardsIcon',
    text: 'Marvel heroes',
    textDescr: 'PockVoc',
    trailingElement: '',
    isRecentItem: true,
  },
  {
    id: '4',
    leadingElement: 'CardsIcon',
    text: 'Unit1',
    textDescr: 'Halyna Fedorivna → Opportunities 11 form',
    trailingElement: 'GloboIcon',
    isRecentItem: true,
  },
  {
    id: '5',
    leadingElement: 'FolderIcon',
    text: 'Dan Brown',
    textDescr: '',
    trailingElement: 'ArrowRight',
  },
  {
    id: '6',
    leadingElement: 'ArchiveIcon',
    text: 'High school 54',
    textDescr: '',
    trailingElement: 'ArrowRight',
  },
  {
    id: '7',
    leadingElement: 'ArchiveIcon',
    text: 'PockVoc',
    textDescr: '',
    trailingElement: 'ArrowRight',
  },

  {
    id: '11',
    leadingElement: 'FolderIcon',
    text: 'English for Everyone Course Book. A very good book for learning English',
    textDescr: '',
    trailingElement: 'GloboIcon',
  },
  {
    id: '12',
    leadingElement: 'FolderIcon',
    text: 'Math formulas ',
    textDescr: '',
    trailingElement: null,
  },
  {
    id: '13',
    leadingElement: 'FolderIcon',
    text: 'Marvel heroes',
    textDescr: '',
    trailingElement: null,
  },
  {
    id: '14',
    leadingElement: 'FolderIcon',
    text: 'English for Everyone Course Book. A very good book for learning English',
    textDescr: '',
    trailingElement: 'GloboIcon',
  },
  {
    id: '15',
    leadingElement: 'FolderIcon',
    text: 'English for Everyone Course Book. A very good book for learning English',
    textDescr: '',
    trailingElement: null,
  },
  {
    id: '16',
    leadingElement: 'FolderIcon',
    text: 'English for Everyone Course Book. A very good book for learning English',
    textDescr: '',
    trailingElement: 'GloboIcon',
  },
  {
    id: '17',
    leadingElement: 'FolderIcon',
    text: 'English for Everyone Course Book. A very good book for learning English',
    textDescr: '',
    trailingElement: 'GloboIcon',
  },

];

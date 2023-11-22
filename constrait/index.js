const CardType = Object.freeze({
  Profile: 'profile',
  FullText: 'fulltext',
  HalfText: 'halftext',
  FullImage: 'fullimage',
  Custom: 'custom',
})

const DESCRIPTION_MAX_LENGTH = 300

const MAIN_MD_FILE_PATH = `${process.cwd()}/data`

const JSON_BLOG_PATH = `${MAIN_MD_FILE_PATH}/blogs.json`

const BLOG_FOLDER_PATH = `${MAIN_MD_FILE_PATH}/blogs`

const MENUS = [
  { text: 'Home', href: '/new-design' },
  { text: 'About', href: '/new-design#about' },
  { text: 'Publications', href: '/new-design#publications' },
  { text: 'Stacks', href: '/new-design#stacks' },
  { text: 'Projects', href: '/new-design#projects' },
  { text: 'Contact', href: '/new-design#contact' },
]

export {
  CardType,
  DESCRIPTION_MAX_LENGTH,
  BLOG_FOLDER_PATH,
  MAIN_MD_FILE_PATH,
  JSON_BLOG_PATH,
  MENUS,
}

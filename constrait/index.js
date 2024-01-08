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
const BLOG_IMAGES = `${MAIN_MD_FILE_PATH}/public/img/blogs`

const MENUS = [
  { text: 'Publications', href: '/#publications' },
  { text: 'Stacks', href: '/#stacks' },
  { text: 'Experiences', href: '/#experiences' },
  { text: 'Projects', href: '/#projects' },
  { text: 'Blogs', href: '/#blogs' },
  { text: 'Contact', href: '/#follow-me' },
]

export {
  CardType,
  DESCRIPTION_MAX_LENGTH,
  BLOG_FOLDER_PATH,
  MAIN_MD_FILE_PATH,
  JSON_BLOG_PATH,
  BLOG_IMAGES,
  MENUS,
}

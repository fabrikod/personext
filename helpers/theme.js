export const changeThemeMode = () => {
  document.documentElement.classList.toggle('dark')
  localStorage.setItem(
    'theme',
    localStorage.getItem('theme') === 'light' ? 'dark' : 'light'
  )
}

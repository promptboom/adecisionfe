export function handleNotLoginLimit() {
  if (localStorage.getItem('PromptBoomNotLogin') === null) {
    localStorage.setItem('PromptBoomNotLogin', '20');
  } else {
    const currentValue = parseInt(localStorage.getItem('PromptBoomNotLogin'));
    if (currentValue > 20) {
      localStorage.setItem('PromptBoomNotLogin', '20');
    }
  }
}

export function getNotLoginLimit() {
  return localStorage.getItem('PromptBoomNotLogin')
}

export function setNotLoginLimit() {
  return localStorage.setItem('PromptBoomNotLogin', getNotLoginLimit() - 1)
}

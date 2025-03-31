export function scrollToWithOffset(selector: string, offset: number = -60) {
  const el = document.querySelector(selector);
  if (!el) {
    console.warn(`failed to scroll to given selector: ${selector}`);
    return;
  }
  const y = el.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top: y, behavior: "smooth" });
}

export function calculateCodingExp() {
  const DATE_STARTED = "2018/03/01";
  const currentDate = new Date().getTime();
  const dateStarted = new Date(DATE_STARTED).getTime();
  const dateStartedInMilliseconds = currentDate - dateStarted;
  return Math.floor(dateStartedInMilliseconds / 1000 / 60 / 60 / 24 / 365);
}

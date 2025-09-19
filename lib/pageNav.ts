export function navHome() {
  window.location.replace("/");
}
export function navServices() {
  window.location.replace("/services");
}
export function navGuest() {
  window.location.replace("/guest");
}

export function openExt(route: string) {
  switch (route) {
    case "disclaimer": return window.open("/disclaimer", "_blank");
    case "unsplash": return window.open("https://unsplash.com", "_blank");
    default: return;
  }
}

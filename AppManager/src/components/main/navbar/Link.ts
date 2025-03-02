export default function ({ title, path }: { title: string; path: string }) {
  const active =
    window.location.pathname.split("/")?.[1] === path ? true : false;
  return `
    <a 
      class="nav-link ${active ? "active" : ""}" 
      aria-current="${path}"
      href="${path}"
    >
      ${title}
    </a>
  `;
}

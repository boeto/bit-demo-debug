
export type MyHtmlComponentProps = {
  text: string
}
export function MyHtmlComponent({text}: MyHtmlComponentProps) {
  return `<div>${text}</div>`;
}

interface ArticalsPageProps {
  className?: string
}
const ArticalsPage = (
  { className }: ArticalsPageProps
) => {
  return (
    <div className={`
      ${className ? className : undefined}
    `}>
      <div>ArticalsPage</div>
    </div>
  )
}
export default ArticalsPage
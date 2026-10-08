type PageHeaderProps = {
  title: string
  subtitle?: string
  image?: string
}

function PageHeader({ title, subtitle, image}: PageHeaderProps) {
  return (
    <div className="horizontal-container">
      <header className="page-header">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </header>
      {image && <img src={image} className="icon"/>}
    </div>
  )
}

export default PageHeader

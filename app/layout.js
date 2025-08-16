import './globals.css'

export const metadata = {
  title: 'Disciplinas por Curso',
  description: 'Gráfico de disciplinas por curso',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
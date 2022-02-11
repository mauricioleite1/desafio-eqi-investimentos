import { cleanup, render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Página Inicial', () => {
  afterEach(cleanup)

  it('1 . Renderiza o título da página corretamente', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', { name: 'Simulador de Investimentos' });

    expect(heading).toBeInTheDocument()
  })
})

import { cleanup, render, screen } from '@testing-library/react'
import Simulador from '@/components/Simulador';

describe('Componente Simulador', () => {
  afterEach(cleanup)

  it('1 . Renderiza o título do componente corretamente', () => {
    render(<Simulador />)
    const heading = screen.getByRole('heading', { name: 'Simulador' });
    
    expect(heading).toBeInTheDocument()
  })

  describe('Seção de Rendimento', () => {
    it('a . Renderiza o título de Rendimento', () => {
      render(<Simulador />)
      const text = screen.getByRole('heading', { name: 'Rendimento' });
      
      expect(text).toBeInTheDocument()
    });
  
    it('b . Renderiza dois botões de escolhe entre os tipos', () => {
      render(<Simulador />)
  
      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBe(2);
    });

    it('c. Os botões de escolha entre os tipos devem ser clicáveis e ter apenas as classes específicas', () => {
      render(<Simulador />)
  
      const buttons = screen.getAllByRole('button');
      buttons.forEach(button => {
        expect(button).toBeInTheDocument();
        expect(button).toBeEnabled();

        expect(button).toHaveClass('btn', 'btn-choice');
        expect(button.classList).toHaveLength(2);
      });
    });
  });

  describe('Seção de Inputs', () => {
    it('d . Renderiza três 3 inputs dentro do form', () => {
      render(<Simulador />)
  
      const inputs = screen.getAllByRole('textbox');
      expect(inputs.length).toBe(3);
    });
  });


})

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
  
    it('b . Renderiza todos os botões do form', () => {
      render(<Simulador />)
  
      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBe(7);
    });
    });
  });

  describe('Seção de Inputs', () => {
    it('d . Renderiza seis inputs dentro do form', () => {
      render(<Simulador />)
  
      const inputs = screen.getAllByRole('textbox');
      expect(inputs.length).toBe(6);
    });
  });

  describe('Botões de Limpar ou Simular para o form', () => {
    it('e . Renderiza botão de Limpar Campos e outro botão de Simular', () => {
      render(<Simulador />)
  
      const buttonLimpar = screen.getByRole('button', { name: 'Limpar campos' });
      const buttonSimular = screen.getByRole('button', { name: 'Simular' });

      expect(buttonLimpar).toBeInTheDocument();
      expect(buttonSimular).toBeInTheDocument();
    });

    it(' f . O botão Simular deve estar desligado (disabled) ao iniciar', () => {
      render(<Simulador />)

      const buttonSimular = screen.getByRole('button', { name: 'Simular' });

      expect(buttonSimular).toBeDisabled();
    });
  });

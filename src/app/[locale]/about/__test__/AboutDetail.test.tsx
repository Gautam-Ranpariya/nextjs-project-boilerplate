import { render, screen } from '@testing-library/react'
import AboutDetail from '../components/AboutDetail'

describe('AboutDetail Component', () => {
  it('renders modal overlay', () => {
    render(<AboutDetail />)
    expect(screen.getByTestId('modal-overlay')).toBeInTheDocument()
  })

  it('renders the modal container', () => {
    render(<AboutDetail />)
    expect(screen.getByTestId('about-modal')).toBeInTheDocument()
  })

  it('renders the image', () => {
    render(<AboutDetail />)
    const image = screen.getByTestId('about-image')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('alt', 'dynamic image')
  })

  it('renders the title', () => {
    render(<AboutDetail />)
    expect(screen.getByTestId('about-title')).toHaveTextContent('About Me')
  })

  it('renders both paragraphs', () => {
    render(<AboutDetail />)
    expect(screen.getByTestId('about-paragraph-1')).toBeInTheDocument()
    expect(screen.getByTestId('about-paragraph-2')).toBeInTheDocument()
  })
})

import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

import MainButton from "../src/components/MainButton/MainButton";
import MainButtons from "@/components/MainButtons/MainButtons";

describe('MainButtons', () => {
    it('render a MainButton', () => {
        render(<MainButton name="test" href="https://www.test.com/"/>)
        const button = screen.getByRole('link',{name: "TEST"})
        expect(button).toBeInTheDocument()
        expect(button).toHaveAttribute('href','https://www.test.com/')
    })
    
    it('render MainButtons', () => {
        render(<MainButtons/>)
        const buttons = screen.getAllByRole('link')
        
        expect(buttons).toHaveLength(3)
        
        buttons.forEach(button => {
            //expect(button).toHaveAttribute('href','/')
            expect(button).toBeInTheDocument()
        })
    })
})
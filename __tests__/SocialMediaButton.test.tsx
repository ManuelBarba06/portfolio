import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import {FaAd} from 'react-icons/fa'

import SocialMediaButton from "@/components/SocialMediaButton/SocialMediaButton";

describe('MediaButton', () => {
    it('render SocialMediaButton', () => {
        render(
        <SocialMediaButton link="https://www.test.com/">
            <FaAd/>
        </SocialMediaButton>)
        const button = screen.getByRole('link')
        expect(button).toBeInTheDocument()
        expect(button).toHaveAttribute('href','https://www.test.com/')
    })
})
import React from 'react';
import AnimalCard from './AnimalCard';
import { render, queryAllByTestId } from '@testing-library/react';

let animal = {
    name: 'Lion',
    sound: 'RAWR!',
    classification: {
        species: 'Panthera leo'
    }
}

test('Animal Card renders and props updated when passed in', () => {
    const { queryAllByTestId, getAllByText, rerender } = render(<AnimalCard animal={{ animal: '', sound: '', classification: { speccies: '' } }} />)
    expect(queryAllByTestId('animalcard')).toHaveLength(1)
    rerender(<AnimalCard animal={animal} />)
    getAllByText(/Lion/i)
    getAllByText(/RAWR!/i)
    getAllByText(/Panthera leo/i)
})
import '@testing-library/jest-dom'
import React from 'react';
import { render, screen } from '@testing-library/react'

import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';

jest.mock('./TodoItem');
describe('TodoList Unit Test', () => {
    beforeEach(() => {
        (ToDoItem as any as jest.Mock).mockReturnValue(<div>MockTodoItem</div>);
    })

    it("should contains all todo items", () => {
        let items = [
            { id: 1, name: 'item 1' },
            { id: 2, name: 'item 2' },
            { id: 3, name: 'item 3' },
        ]
        render(<ToDoList todoList={items} />);
        const elements = screen.getAllByText(/MockTodoItem/);
        expect(elements.length).toEqual(items.length);
    });

    /**
     * Show a message in the UI instead of showing a black page.
     * Otherwise the user may assume the webapp is still loading.
     */
    it("should contains empty message if not given any todo items", () => {
        render(<ToDoList todoList={[]} />);
        const element = screen.getByText(/No Todo Items/);
        expect(element).toBeInTheDocument();
    });
})
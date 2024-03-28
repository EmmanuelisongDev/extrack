import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

export default function ExpenseForm({ isOpened, onClose }) {
    const [expenseInput, setExpenseInput] = useState({
        description: '',
        amount: '',
        date: '',
        currency: 'USD',
        type: 'expenses'
    });

    const ref = useRef();

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        setExpenseInput(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your submission logic here
        console.log(expenseInput);
        // Clear form inputs
        setExpenseInput({
            description: '',
            amount: '',
            date: '',
            currency: 'USD',
            type: 'expenses'
        });
        onClose()
    }

    useEffect(() => {
        if (isOpened) {
            ref.current.showModal();
            document.body.classList.add("modal-open");
        } else {
            ref.current.close();
            document.body.classList.remove("modal-open");
        }
    }, [isOpened]);

    return (
        <Overlay ref={ref}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Description"
                    name="description"
                    value={expenseInput.description}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    placeholder="Amount"
                    name="amount"
                    value={expenseInput.amount}
                    onChange={handleChange}
                    required
                />
                <input
                    type="date"
                    placeholder="Date"
                    name="date"
                    value={expenseInput.date}
                    onChange={handleChange}
                    required
                />
                {/* <select
                    name="currency"
                    value={expenseInput.currency}
                    onChange={handleChange}
                    required
                >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                
                </select> */}
                <select
                    name="type"
                    value={expenseInput.type}
                    onChange={handleChange}
                    required
                >
                    <option value="expenses">Expenses</option>
                    <option value="income">Income</option>
                    <option value="savings">Savings</option>
                
                </select>
                <button   type="submit">Add Expense</button>
                <button  onClick={onClose} type="button">Close</button>
            </form>
        </Overlay>
    );
}

const Overlay = styled.dialog`
    border: none;
    border-radius: 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form {
        display: flex;
        flex-direction: column;
        padding: 20px;
        background-color: #fff;
        border-radius: 8px;
        width: 300px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    input,
    select {
        margin-bottom: 10px;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    button {
        padding: 10px;
        margin-top: 10px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    button:hover {
        background-color: #0056b3;
    }
`;

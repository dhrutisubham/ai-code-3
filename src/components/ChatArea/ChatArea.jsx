import { useState } from 'react';
import CodeTextArea from '../CodeTextArea/CodeTextArea.jsx';
import DataTextField from '../DataTextField/DataTextField.jsx';
import TypewriterTextBox from '../TypewritterTextBox/TypewritterTextBox.jsx';
import './ChatArea.css'

const ChatArea = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (value) => {
        setInputValue(value);
    };

    return (
        <section className='chat-area w-full h-full gap-2 overflow-auto bg-white1 rounded-lg drop-shadow p-4'>
            <section className='responseArea'>
                <section className='output'>
                    <h2 className='font-bold pl-1 text-black1 '>Code Area</h2>
                    <CodeTextArea inputValue={inputValue} />
                </section>
                <section className='output'>
                    <h2 className='font-bold pl-1 text-black1 '>Code Summary</h2>

                    <TypewriterTextBox text={inputValue} />
                </section>
            </section>
            <DataTextField onInputChange={handleInputChange} />
        </section>
    );
}

export default ChatArea;

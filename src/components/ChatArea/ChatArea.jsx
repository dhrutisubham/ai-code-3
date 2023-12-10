import { useState } from 'react';
import CodeTextArea from '../CodeTextArea/CodeTextArea.jsx';
import DataTextField from '../DataTextField/DataTextField.jsx';
import TypewriterTextBox from '../TypewritterTextBox/TypewritterTextBox.jsx';

const ChatArea = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (value) => {
        setInputValue(value);
    };

    return (
        <section className='chat-area w-full h-full overflow-auto  bg-gray-200 p-4'>
            <CodeTextArea inputValue={inputValue} />
            <TypewriterTextBox text={inputValue} />
            <DataTextField onInputChange={handleInputChange} />
        </section>
    );
}

export default ChatArea;

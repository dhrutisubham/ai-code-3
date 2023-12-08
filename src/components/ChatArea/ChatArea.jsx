import { useState } from 'react';
import CodeTextArea from '../CodeTextArea/CodeTextArea.jsx';
import DataTextField from '../DataTextField/DataTextField.jsx';


const ChatArea = () => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (value) => {
        setInputValue(value);
    };

    return (
        <section className='chatArea'>
            <CodeTextArea inputValue={inputValue}/>
            <DataTextField onInputChange={handleInputChange} />
        </section>
    );
}

export default ChatArea;
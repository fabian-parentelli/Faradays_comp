import './textAreaExpand.css';
import { useRef, useEffect } from 'react';

export const TextAreaExpand = ({
    placeholder = 'Completa este campo', value, handleChange, name, required = false, style = {} }) => {

    const textareaRef = useRef(null);

    const adjustHeight = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight + 12}px`;
        }
    };

    useEffect(() => { adjustHeight() }, [value]);

    return (
        <textarea
            className='textAreaExpand'
            ref={textareaRef}
            onInput={adjustHeight}
            placeholder={placeholder}
            value={value || ''}
            onChange={handleChange}
            name={name || ''}
            required={required}
            style={{
                width: style.width || '300px',
                border: style.border || 'none',
                borderRadius: style.borderRadius || '0',
                color: style.color || '',
                backgroundColor: style.backgroundColor || ''
            }}
        >
        </textarea>
    );
};
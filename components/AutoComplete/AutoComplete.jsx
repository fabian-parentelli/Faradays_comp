import './autocomplete.css';
import { useEffect, useState } from "react";

export const AutoComplete = ({ options = [], labelKey = 'label', setData, style = {} }) => {

    const [inputValue, setInputValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);

    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        if (value.length > 0) {
            const filtered = options.filter(option => option[labelKey].toLowerCase().includes(value.toLowerCase()));
            setFilteredOptions(filtered);
            setIsOpen(true);
        } else {
            setFilteredOptions([]);
            setIsOpen(false);
        };
    };

    const handleSelect = (option) => {
        setInputValue(option[labelKey]);
        setIsOpen(false);
        setHighlightedIndex(-1);
        if (setData) setData(option);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            if (highlightedIndex < filteredOptions.length - 1) setHighlightedIndex(highlightedIndex + 1);
        } else if (e.key === 'ArrowUp') {
            if (highlightedIndex > 0) setHighlightedIndex(highlightedIndex - 1);
        } else if (e.key === 'Enter' && highlightedIndex !== -1) {
            handleSelect(filteredOptions[highlightedIndex]);
        } else if (e.key === 'Escape') setIsOpen(false);
    };

    const handleBlur = () => setTimeout(() => setIsOpen(false), 100);
    
    const handleClear = () => {
        setInputValue('');
        setFilteredOptions([]);
        setIsOpen(false);
        if (setData) setData(null);
    };

    const getOptionClass = (index) => index === highlightedIndex ? 'highlighted' : '';
    
    useEffect(() => {
        if (!isOpen) setHighlightedIndex(-1); 
    }, [isOpen]);

    return (
        <div className="autocomplete" style={{ width: style.width || '280px' }}>
            <div className="autocomplete-input-wrapper">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    placeholder={style.placeholder || 'Buscar una opción'}
                    style={{ height: style.height || '40px' }}
                />
                {inputValue && (
                    <span className="clear-icon" onClick={handleClear}>
                        &#10005;
                    </span>
                )}
            </div>
            {isOpen && filteredOptions.length > 0 && (
                <ul className="autocomplete-list">
                    {filteredOptions.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelect(option)}
                            className={`autocomplete-item ${getOptionClass(index)}`}
                        >
                            {option[labelKey]}
                        </li>
                    ))}
                </ul>
            )}
            {isOpen && filteredOptions.length === 0 && (
                <div className="no-results">No hay resultados</div>
            )}
        </div>
    );
};
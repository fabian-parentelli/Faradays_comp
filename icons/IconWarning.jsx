const IconWarning = ({ color = '#000', size = '100px', onClick, backCol = 'none', bold = 2 }) => {
    
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            style={{ fill: backCol }}
            stroke={color}
            strokeWidth={bold}
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={onClick}
        >
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
        </svg>
    );
};

export { IconWarning };

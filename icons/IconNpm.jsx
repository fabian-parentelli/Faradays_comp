const IconNpm = ({ color = '#000', size = '100px', onClick, backCol = 'none', bold = 2 }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size} height={size}
            style={{ fill: backCol }}
            onClick={onClick}
            stroke={color}
            strokeWidth={bold}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M1 8h22v7h-12v2h-4v-2h-6z" />
            <path d="M7 8v7" />
            <path d="M14 8v7" />
            <path d="M17 11v4" />
            <path d="M4 11v4" />
            <path d="M11 11v1" />
            <path d="M20 11v4" />
        </svg>
    );
};

export { IconNpm };
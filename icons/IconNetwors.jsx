const IconNetworks = ({ color = '#000', size = '100px', onClick, backCol = 'none', bold = 2 }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            style={{ fill: backCol }}
            onClick={onClick}
            stroke={color}
            strokeWidth={bold}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M14 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
            <path d="M7 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
            <path d="M21 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
            <path d="M7 18h10" />
            <path d="M18 16l-5 -8" />
            <path d="M11 8l-5 8" />
        </svg>
    );
};

export { IconNetworks };
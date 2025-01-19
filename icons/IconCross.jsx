const IconCross = ({ color = '#000', size = '100px', onClick, backCol = 'none', bold = 2 }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size} height={size}
            style={{ fill: backCol }}
            onClick={onClick}
            stroke={color}
            stroke-width={bold}
        >
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </svg>
    );
};

export { IconCross };
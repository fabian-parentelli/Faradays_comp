const IconBell = ({ color = '#000', size = '100px', onClick, backCol = 'none', bold = 2 }) => {

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
            <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
            <path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727" />
            <path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727" />
        </svg>
    );
};

export { IconBell };
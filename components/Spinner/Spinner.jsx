import './spinner.css';

export const Spinner = ({ color, size }) => {

    return (
        <div
            className='spinner'
            role='status'
            aria-live='polite'
            aria-label='Cargando'
            style={{
                borderTopColor: color ? color : '#2990c8',
                width: size ? size : '36px', 
                height: size ? size : '36px', 
                zIndex: '1003'
            }}
        >
        </div>
    );
};


// Recive por parametro color: string.
// Recive por parametro size: number sin unidad de medida.
import './snackbar.css';
import { useEffect, useState } from "react";

import { IconCheck } from '../../icons/IconCheck';
import { IconCross } from '../../icons/IconCross';
import { IconInfo } from '../../icons/IconInfo';
import { IconWarning } from '../../icons/IconWarning';

export const Snackbar = ({ snack, duration = 4000 }) => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (snack.open) {
            setIsVisible(true);
            const timeout = setTimeout(() => setIsVisible(false), duration);
            return () => clearTimeout(timeout);
        };
        return undefined;
    }, [snack.open, duration]);

    if (snack.open && snack.message) return (
        <div
            className={`snackbar ${isVisible ? "show" : "hide"} ${snack.status}`}
        >
            {snack.status === 'error' && <IconCross color='#ffff' size='30px' />}
            {snack.status === 'success' && <IconCheck color='#ffff' size='30px' />}
            {snack.status === 'info' && <IconInfo color='#ffff' size='30px' />}
            {snack.status === 'warning' && <IconWarning color='#ffff' size='30px' />}
            <p>{snack.message}</p>
        </div>
    );
};

// Toma 1 un objeto como parámetro, el cual contiene las propiedades:
// - open: boolean
// - message: string
// - status: string ('error' | 'success' | 'info' | 'warning')
// - autoCloseDuration: número (milisegundos) para cerrar automáticamente el snackbar
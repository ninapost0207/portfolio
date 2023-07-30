import  { useState } from 'react';
import './loader.scss';

export default function Form ({openModal}: {openModal: () => void}) {
    const [loading, setLoading] = useState<boolean>(false);
    return (
        <div className="loader-container">
            <div className="spinner"></div>
        </div>
    )
}
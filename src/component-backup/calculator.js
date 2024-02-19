import React from 'react'

export function Calculator2() {
    const n1 = 20;
    const n2 = 4;

    const calculator = (op) => {
        let c = `${n1} ${op} ${n2}`;
        let r = eval(c);
        alert(`${c} = ${r}`);
    }

    return (
        <div style={{ textAlign: 'center', marginTop: 20 }}>
            <span>{n1}</span>&nbsp;
            <button onClick={() => calculator('+')}>+</button>&nbsp;
            <button onClick={() => calculator('-')}>-</button>&nbsp;
            <button onClick={() => calculator('*')}>*</button>&nbsp;
            <button onClick={() => calculator('/')}>/</button>&nbsp;
            <span>{n2}</span>
        </div>
    )
}
import React, { useRef } from 'react';

export default function FormCheck() {
    const switchReq = useRef();
    const styles = ['bold', 'italic', 'underline'];
    const size = ['small', 'medium', 'large', 'lager'];
    let checkedStyles = [];
    let checkedSize = '';

    const onChangeCheck = (e) => {
        let checked = e.target.checked;
        let value = e.target.value;
        let idx = checkedStyles.indexOf(value);

        if (checked && idx === -1) {
            checkedStyles.push(value);
        } else {
            checkedStyles.splice(idx, 1);
        }
    }

    const onChangeRadio = (e) => {
        checkedSize = e.target.value;
    }

    const onClickButton = () => {
        if (switchReq.current.checked) {
            if (checkedStyles.length === 0) {
                alert('Please select style');
                return;
            } else if (checkedSize === '') {
                alert('Please select size');
                return;
            }
        }

        let msg = 'selected style(s): ' + checkedStyles.join(', ')
        msg += '\nselected size: ' + checkedSize;
        alert(msg);
    }

    return (
        <div className='mt-4 mx-auto p-3 rounded' style={{ width: '450px', background: '#cee' }}>
            <form>
                <span className='mr-1'>fomt style:</span>
                {
                    styles.map((st, i) => {
                        return (
                            <div key={st} className='form-check form-check-inline mb-2'>
                                <input type="checkbox" id={'check' + i}
                                    value={st} className='form-check-input'
                                    onChange={onChangeCheck} />
                                <label htmlFor={'check' + i} className='form-check-label'>{st}</label>
                            </div>
                        )
                    })
                }
                <br />
                <span className='mr-1'>fomt style:</span>
                {
                    size.map((sz, i) => {
                        return (
                            <div key={sz} className='form-check form-check-inline mb-2'>
                                <input type="radio" id={'radio' + i} name='fontSize'
                                    value={sz} className='form-check-input'
                                    onChange={onChangeRadio} />
                                <label htmlFor={'radio' + i} className='form-check-label'>{sz}</label>
                            </div>
                        )
                    })
                }

                <div className='form-check form-switch mt-3'>
                    <input type='checkbox' id='sw' value={require}
                        className='form-check-input' ref={switchReq} />
                    <label htmlFor='sw' className='form-check-label'>require</label>
                </div>

                <div className='text-center mt-4'>
                    <button type='button' className='btn btn-sm px-4 btn-primary'
                        onClick={onClickButton}>OK
                    </button>
                </div>
            </form>
        </div>
    )
}
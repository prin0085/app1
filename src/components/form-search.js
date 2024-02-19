import React, { useRef } from "react";

export default function FormSearch() {
    const textKw = useRef();
    const btOk = useRef();

    const onChangeKw = () => {
        if (textKw.current.value.trim() !== "") {
            btOk.current.disabled = false;
        } else {
            btOk.current.disabled = true;
        }
    }

    return (
        <div style={{ margin: "30px" }}>
            <form>
                <input type="text" name="Kw" placeholder="ค้นหา"
                    ref={textKw} onInput={onChangeKw} />&nbsp;
                <button ref={btOk} disabled>ตกลง</button>
            </form>
        </div>
    )
}
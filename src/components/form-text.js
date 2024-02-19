import React, { useRef } from "react";

export default function FormText() {
    const textPswd = useRef();
    const textPswd2 = useRef();

    const onBlurPassword = () => {
        let pswd = textPswd.current.value;
        if (pswd !== '' && !pswd.match(/^[0-9a-zA-z]+$/)) {
            textPswd.current.value = "";
            alert("ต้องเป็น 0-9 a-z หรือ A-Z เท่านั้น")
        }
    }

    const onBlurPassword2 = () => {
        const pw1 = textPswd.current.value;
        const pw2 = textPswd2.current.value;
        console.log(pw1);
        console.log(pw2);
        if (pw2 !== '' && pw1 != pw2) {
            textPswd2.current.value = '';
            alert('รหัสผ่านสองช่องไม่ตรงกัน');
        }
    }

    return (
        <div className="mt-4 mx-auto p-3 rounded" style={{ width: '400px', backgroundColor: '#cee' }}>
            <form>
                <div className="form-group mb-2">
                    <label htmlFor="login">ชื่อผู้ใช้(login)</label>
                    <input type="text" id="login" name="login" maxLength="20px" className="form-control form-control-sm" />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="pswd">รหัสผ่าน</label>
                    <input type="password" id="pswd" name="pswd" maxLength="10" className="form-control form-control-sm"
                        ref={textPswd} onBlur={onBlurPassword} />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="pswd2">ยืนยันรหัสผ่าน</label>
                    <input type="password" id="pswd2" name="pswd2" maxLength="10" className="form-control form-control-sm"
                        ref={textPswd2} onBlur={onBlurPassword2} />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="memo">บันทึกช่วยจำ</label>
                    <textarea id="memo" name="memo" rows="2" maxLength="200" className="form-control form-control-sm"></textarea>
                </div>
                <div className="text-center">
                    <button className="btn btn-sm px-4 btn-primary">OK</button>
                </div>
            </form>
        </div>
    )
}
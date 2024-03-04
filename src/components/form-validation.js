import React, { createRef } from "react";
import { useForm } from "react-hook-form";

export default function FormValidation() {
    const cats = [["100", "ไอที"], ["200", "เครื่องจักรกล"], ["300", "เคมีภัณฑ์"]];
    const opts = ["Option 1", "Option 2", "Option 3"];
    const inputFile = createRef();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmitForm = (e) => {
        let maxNumFiles = 3;
        let maxSize = 300;

        if (inputFile.current.files.length > maxNumFiles) {
            alert(`เลือกได้ไม่เกิน ${maxNumFiles} ไฟล์`);
            return;
        }

        for (let f of inputFile.current.files) {
            if (f.size > maxSize * 1000) {
                alert(`ไฟล์มีขนาดใหญ่เกินไป (${maxSize})`);
                return;
            }
        }
    }

    const err = {
        fontSize: "smaller",
        color: "red"
    }

    return (
        <div className="mt-3 mb-5 mx-auto p-3 rounded" style={{ width: "450px", background: "#cee" }}>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <div className="form-group mb-3">
                    <label htmlFor="cats" className="form-label">หมวดหมู่ *</label>
                    <select id="cats" className="form-select form-select-sm">
                        {
                            cats.map(item => {
                                return <option key={item[0]} value={item[0]}>{item[1]}</option>
                            })
                        }
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="itemname">ชื่อสินค้า *</label>
                    <input type="text" id="itemname" name="itemname" maxLength="50" className="form-control form-control-sm"
                        {...register('itemname', { required: true, maxLength: 30 })} />
                    {errors.itemname && <div style={err}>กรุณาระบุชื่อสินค้า</div>}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="price">ราคาสินค้า *</label>
                    <input type="number" id="price" name="price" min="0" step="any"
                        className="form-control form-control-sm"
                        {...register('price', { validate: value => parseFloat(value) > 0 })} />
                    {errors.price && <div style={err}>กำหนดราคาสินค้าเป็นตัวเลขมากกว่า 0</div>}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="detail">รายละเอียดสินค้า *</label>
                    <textarea id="detail" name="detail" rows="2" maxLength="250"
                        className="form-control form-control-sm"
                        {...register('detail', { required: true, minLength: 1, maxLength: 200 })}>
                    </textarea>
                    {errors.price && <div style={err}>กรุณากรอกรายละเอียดสินค้า</div>}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="dateAdded">วันที่เพิ่มสินค้า *</label>
                    <input type="date" id="dateAdded" name="dateAdded"
                        className="form-control form-control-sm" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="file" className="form-label">ภาพสินค้า * (ไม่เกิน 3 ไฟล์
                        ขนาดสูงสุด 300 KB/ไฟล์)</label>
                    <input type="file" id="file" accept="image/*"
                        className="form-control form-control-sm" ref={inputFile} multiple />
                </div>

                <div>ออปชันเพิ่มเติม</div>
                {
                    opts.map((opt, i) => {
                        return (
                            <div key={opt} className="form-check form-check-inline mb-2">
                                <input type="checkbox" id={'opt' + i} value={opt}
                                    className="form-check-input" />
                                <label htmlFor={'opt' + i} className="form-check-label">{opt}</label>
                            </div>
                        )
                    })
                }

                <div className="text-center mt-4">
                    <button className="btn-sm px-4 btn btn-primary">OK</button>
                </div>
            </form>
        </div>
    )
}
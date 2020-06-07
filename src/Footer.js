import React, {useState,useEffect} from 'react'

const Footer = (props) => {
    
    let {onTimerClick} = props;

    const [time, setTime] = useState(0)

    //useEffect run after Render
    useEffect(() => {

        const interval = setInterval(() => {
            setTime(curretTime => curretTime + 1);
        }, 1000);

        return () => clearInterval(interval);

    },[]);

    //ถ้าไม่มีการใส่ Argument เลย จะทำงานทุกครั้ง เมื่อข้อมูลมีการเปลี่ยนแปลงของ Component นั้น
    //ถ้าใส่เป็น Array ว่าง ([]) จะเป็นการทำงานเฉพาะตอน mount และ unmount
    //ถ้าใส่ state ลงไปใน Argument ([time]) มันจะทำงาน ก็ต่อเมื่อค่าที่ระบุลงไปนั้นมีการเปลี่ยนแปลง (อัพเดท)

    return (
        <div>
            Footer Online Time {time}
            <br/>
            <button type="button" onClick={() => setTime(curretTime => curretTime + 1) }>Add</button>
            <button type="button" onClick={() => onTimerClick(time) }>Add Num</button>
        </div>
    )
}

export default Footer
